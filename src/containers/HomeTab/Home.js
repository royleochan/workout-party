import React, { useEffect } from "react";
import { Auth } from "aws-amplify";

import "./Home.css";

const Home = () => {
  const createRoom = () => {
    window.location.href = "/invite";
  };

  return (
    <div className="home-body">
      <form className="form1">
        <input
          className="id-home"
          type="text"
          align="center"
          placeholder="Enter Room ID"
          name="name"
        />
        <button className="submit-home" type="submit" align="center">
          Join Room
        </button>
      </form>
      <button className="submit-home2" onClick={createRoom} align="center">
        Create New Room
      </button>
    </div>
  );
};

export default Home;
