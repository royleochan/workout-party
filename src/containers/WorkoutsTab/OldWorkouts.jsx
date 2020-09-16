import "./Workouts.scss";
import React, { useState } from "react";

import workoutOne from "./images/workoutOne.jpg";
import workoutTwo from "./images/workoutTwo.jpg";
import workoutThree from "./images/workoutThree.jpg";

import SearchBar from "material-ui-search-bar";
import Button from "@material-ui/core/Button";

const Workouts = (props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="workout-page">
      <div className="searchbar-container">
        <SearchBar
          style={{ width: "30%" }}
          placeholder="Search for workouts..."
          value={searchValue}
          onChange={(newValue) => setSearchValue(searchValue)}
          onRequestSearch={() => console.log(searchValue)}
        />
      </div>
      <div className="workouts-container">
        <div className="workout-container">
          <div className="image-container">
            <img className="image" src={workoutOne}></img>
          </div>
          <div className="text-container">
            <p style={{ fontSize: 20 }}>
              <strong>Core</strong>
            </p>
            <p>Difficulty: 2/5</p>
            <p>
              Core: +5 <br /> Legs: +2 <br /> Arms: +2
            </p>
          </div>
          <div className="button-container">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#5F5F5F",
                color: "white",
                alignSelf: "center",
              }}
            >
              Begin
            </Button>
          </div>
        </div>
        <div className="workout-container">
          <div className="image-container">
            <img className="image" src={workoutTwo}></img>
          </div>
          <div className="text-container">
            <p style={{ fontSize: 20 }}>
              <strong>Strength</strong>
            </p>
            <p>Difficulty: 4/5</p>
            <p>
              Arms: +5 <br /> Legs: +5 <br /> Core +3
            </p>
          </div>
          <div className="button-container">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#D68B1C",
                color: "white",
                alignSelf: "center",
              }}
            >
              Begin
            </Button>
          </div>
        </div>
        <div className="workout-container">
          <div className="image-container">
            <img className="image" src={workoutThree}></img>
          </div>
          <div className="text-container">
            <p style={{ fontSize: 20 }}>
              <strong>Cardio</strong>
            </p>
            <p>Difficulty: 3/5</p>
            <p>
              Arms: +3 <br /> Legs: +3 <br /> Core +3
            </p>
          </div>
          <div className="button-container">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#493B9D",
                color: "white",
                alignSelf: "center",
              }}
            >
              Begin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
