import React, { useEffect, useState } from "react";
import "./Profile.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Collapse, Divider } from "antd";
import { useSelector } from "react-redux";
import {getPastWorkout, getStats, getUserInfo} from "../../ApiHandlers";

const { Panel } = Collapse;

const fakeProfile = {
  name: "Jay Chua",
  image_url:
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  bg_image_url:
    "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg",
};

const fakeHistory = [
  {
    date: "3 Sept, Thursday, 2350",
    participants: ["Roy", "Jerryl", "Darius", "Wai Kye"],
    exercises: [{ name: "Push Ups", reps: "100" }],
    duration: "0.02",
  },
  {
    date: "26 August, Wednesday, 0609",
    participants: ["bob", "naruto", "muscleman"],
    exercises: [
      { name: "Push Ups", reps: "100" },
      { name: "Squats", reps: "-100" },
    ],
    duration: "1",
  },
  {
    date: "24 August, Monday, 1030",
    participants: ["bob", "naruto", "muscleman"],
    exercises: [
      { name: "Push Ups", reps: "100" },
      { name: "Squats", reps: "-100000" },
    ],
    duration: "2",
  },
];

const Profile = (props) => {
  const userData = useSelector((state) => state.auth);
  const [userStats, setStats] = useState([]);
  const [userInfo, setInfo] = useState([]);
  Promise.resolve(getStats()).then(stats => setStats(stats));
  Promise.resolve(getUserInfo()).then(info => setInfo(info));
  return (
    <div className="profile">
      <img
        className="background-image"
        src={fakeProfile.bg_image_url}
        alt="Background"
      />
      <div className="body">
        <ul className="header">
          <div className="content">
            <div>
              <div className="content-overlay"></div>
              <img
                  className="content-image"
                  src={fakeProfile.image_url}
                  alt="Profile Page"
              />
                <div className="content-details fadeIn-top">
                  <p>Click to change profile picture.</p>
                </div>
            </div>
          </div>
          <li className="profile-name">
            <p className="profile-name-text">{userData.name}</p>
          </li>
        </ul>
        <p className="profile-info">
          {userData.name} has completed {userInfo.noOfWorkouts} workouts.
        </p>
        <Divider className="line" />
        <div>
          <div className="progress-row">
            <p className="progress-text">Chest Lv {userStats.chestLevel}</p>
            <div className="progress-bar-div">
              <ProgressBar
                className="custom-progress-bar"
                variant="success"
                now={userStats.chestXp}
              />
            </div>
          </div>
          <div className="progress-row">
            <p className="progress-text">Shoulder Lv {userStats.shoulderLevel}</p>
            <div className="progress-bar-div">
              <ProgressBar
                className="custom-progress-bar"
                variant="success"
                now={userStats.shoulderXp}
              />
            </div>
          </div>
          <div className="progress-row">
            <p className="progress-text">Arms Lv {userStats.armsLevel}</p>
            <div className="progress-bar-div">
              <ProgressBar
                className="custom-progress-bar"
                variant="success"
                now={userStats.armsXp}
              />
            </div>
          </div>
          <div className="progress-row">
            <p className="progress-text">Core Lv {userStats.coreLevel}</p>
            <div className="progress-bar-div">
              <ProgressBar
                className="custom-progress-bar"
                variant="success"
                now={userStats.coreXp}
              />
            </div>
          </div>
          <div className="progress-row">
            <p className="progress-text">Legs Lv {userStats.legsLevel}</p>
            <div className="progress-bar-div">
              <ProgressBar
                className="custom-progress-bar"
                variant="success"
                now={userStats.legsXp}
              />
            </div>
          </div>
        </div>
        <div className="history-view">
          <p className="history-header-text">Workout History:</p>
          {userInfo.workoutHistory
              ? <Collapse className="history-list" accordion>
                {userInfo.workoutHistory.map((id, index) => {
                  const history = getPastWorkout(id);
                  return (
                      <Panel
                          className="history-panel"
                          header={history.date}
                          key={index}
                      >
                        <div className="participants-div">
                          <p>Participants:</p>
                          {history.participants.map((user) => (
                              <p>{user}</p>
                          ))}
                        </div>
                        <p>{history.videoDesc}</p>
                        <p>{history.videoLink}</p>
                        <p>Duration: {history.duration} hours</p>
                      </Panel>
                  )
                })}
              </Collapse>
              : <p>No workouts available.</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
