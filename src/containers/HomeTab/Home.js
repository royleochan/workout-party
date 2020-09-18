import React, {useEffect, useState} from "react";
import { Auth } from "aws-amplify";

import "./Home.css";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import * as jitsiActions from "../../store/actions/jitsi";
import {createJitsiRoom, getJitsiRoom, updateJitsiRoom} from "../../ApiHandlers";

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const jitsiState = useSelector((state) => state.jitsi);
    const [roomId, setRoomId] = useState("");

    const createRoom = () => {
    window.location.href = "/workouts";
  };
    const joinRoom = () => {
        getJitsiRoom(roomId)
            .then(response => dispatch(jitsiActions.jitsiStart(response.roomId, response.video)))
            .then(() => history.push("/exercise"))
    };

  return (
    <div className="home-body">
        <div>
            <input
                className="id-home"
                align="center"
                placeholder="Enter Room ID"
                onChange={e => setRoomId(e.target.value)}
                value={roomId}
            />
            <button className="submit-home" align="center" onClick={joinRoom}>
                Join Room
            </button>
        </div>
        <button className="submit-home2" onClick={createRoom} align="center">
            Create New Room
        </button>
    </div>
  );
};

export default Home;
