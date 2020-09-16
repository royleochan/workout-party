import "./Workouts.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "material-ui-search-bar";
import Block from "./Block";

import { getAllVideos } from "ApiHandlers";
import * as videosActions from "store/actions/videos";
import { Divider } from "@material-ui/core";

const searchFunction = (videos, keyword) => {
  let result = videos.filter((vid) => {
    return vid.description.includes(keyword);
  });
  console.log(result);
  return result;
};

const Workouts = (props) => {
  const [videos, setVideos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredVideos, setfilteredVideos] = useState([]);
  const [isFiltered, setisFiltered] = useState(false);
  const dispatch = useDispatch();
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
    getAllVideos().then((videos) => setVideos(videos));
  }, []);

  console.log(videos);

  dispatch(videosActions.getVideosSuccess(videos));

  let blockArray = videos.map((vid) => {
    return <Block header="" description={vid.description} image={vid.image} />;
  });

  let filteredArray = filteredVideos.map((vid) => {
    return <Block header="" description={vid.description} image={vid.image} />;
  });

  return (
    <div>
      <div style={{ padding: "2%" }}>
        <SearchBar
          style={{ width: "30%" }}
          placeholder="Search for workouts..."
          value={searchValue}
          onChange={(event) => setSearchValue(event)}
          onRequestSearch={() => searchHandler(searchValue)}
        />
      </div>
      <div>
        <h1>Our Recommended Workouts</h1>
      </div>
      <Divider />
      <div className="scrolling-wrapper-flexbox">
        {isFiltered ? filteredArray : blockArray}
      </div>
      <Divider />
    </div>
  );
};

export default Workouts;
