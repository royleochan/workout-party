import "./Workouts.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import SearchBar from "material-ui-search-bar";
import Block from "./Block";

import { getAllVideos, createJitsiRoom, updateJitsiRoom } from "ApiHandlers";
import * as videosActions from "store/actions/videos";
import * as jitsiActions from "store/actions/jitsi";
import { Divider } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const searchFunction = (videos, keyword) => {
  let result = videos.filter((vid) => {
    return vid.description.includes(keyword);
  });
  return result;
};

const Workouts = (props) => {
  const [videos, setVideos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredVideos, setfilteredVideos] = useState([]);
  const [isFiltered, setisFiltered] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const jitsiState = useSelector((state) => state.jitsi);

  const onClickHandler = (videoLink, minutes) => {
    if (jitsiState.roomName == "") {
      const roomName = uuidv4().slice(0, 6);
      dispatch(jitsiActions.jitsiStart(roomName, videoLink, minutes));
      createJitsiRoom(roomName, videoLink);
    } else {
      dispatch(jitsiActions.jitsiSuccess(videoLink, minutes));
      updateJitsiRoom(jitsiState.roomName, videoLink);
    }
    history.push("/exercise");
  };

  const searchHandler = (keyword) => {
    if (keyword == "") {
      setisFiltered(false);
    } else {
      setisFiltered(true);
      setfilteredVideos(searchFunction(videos, keyword));
    }
  };

  dispatch(videosActions.getVideosStart());

  useEffect(() => {
    getAllVideos()
      .then((videos) => {
        dispatch(videosActions.getVideosSuccess(videos));
        setVideos(videos);
      })
      .catch((error) => dispatch(videosActions.getVideosFail(error)));
  }, []);

  // console.log(videos);

  let blockArray = videos.map((vid) => {
    return (
      <Block
        header=""
        description={vid.description}
        image={vid.image}
        minutes={vid.minutes}
        onClick={() => onClickHandler(vid.videoLink)}
      />
    );
  });

  let filteredArray = filteredVideos.map((vid) => {
    return (
      <Block
        header=""
        description={vid.description}
        image={vid.image}
        minutes={vid.minutes}
        onClick={() => onClickHandler(vid.videoLink)}
      />
    );
  });

  if (filteredArray.length == 0) {
    filteredArray = <h2>No Videos Found! Search Is Case Sensitive</h2>;
  }

  return (
    <div className="workout-page">
      <div style={{ paddingTop: "2rem" }}>
        <div style={{ padding: "2%" }}>
          <SearchBar
            style={{ width: "30%" }}
            placeholder="Search For Workouts..."
            value={searchValue}
            onChange={(event) => setSearchValue(event)}
            onRequestSearch={() => searchHandler(searchValue)}
          />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <div>
            <p style={{ color: "white", fontSize: "4vh" }}>
              Choose From Our Recommended Workouts
            </p>
          </div>
          <div className="workout-container">
            <Divider />
            <div className="scrolling-wrapper-flexbox">
              {isFiltered ? filteredArray : blockArray}
            </div>
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
