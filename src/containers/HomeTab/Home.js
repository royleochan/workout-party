import React, {useEffect, useState} from "react";
import { Auth } from "aws-amplify";

import "./Home.css";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const jitsiState = useSelector((state) => state.jitsi);
    const [roomId, setRoomId] = useState("");

    const createRoom = () => {
    window.location.href = "/workouts";
  };
    const joinRoom = () => {
        console.log("hello");
    };

  return (
    <div className="home-body">
        <input
            className="id-home"
            align="center"
            placeholder="Enter Room ID"
            onChange={setRoomId}
            value={roomId}
        />
        <button className="submit-home" align="center">
            Join Room
        </button>
      <button className="submit-home2" onClick={createRoom} align="center">
        Create New Room
      </button>
    </div>
  );
};

export default Home;
