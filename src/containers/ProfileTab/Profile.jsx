import React from "react";
import "./Profile.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Collapse, Divider } from "antd";
import { useSelector } from "react-redux";

const { Panel } = Collapse;

const fakeProfile = {
  name: "Jay Chua",
  image_url:
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  bg_image_url:
    "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg",
  top_three_achievements: [
    {
      name: "one",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gold_circle.svg/1024px-Gold_circle.svg.png",
    },
    {
      name: "two",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gold_circle.svg/1024px-Gold_circle.svg.png",
    },
    {
      name: "three",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gold_circle.svg/1024px-Gold_circle.svg.png",
    },
  ],
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
  console.log(userData);
  return (
    <div className="profile">
      <img
        className="background-image"
        src={fakeProfile.bg_image_url}
        alt="Background"
      />
      <div className="body">
        <ul className="header">
          <li className="profile-pic-item">
            <img
              className="profile-pic"
              src={fakeProfile.image_url}
              alt="Profile Pic"
            />
          </li>
          <li className="profile-name">
            <p className="profile-name-text">{userData.name}</p>
          </li>
          <li className="profile-achievement">
            <ul className="achievement-preview">
              {fakeProfile.top_three_achievements.map((achievement) => (
                <li className="achievement">
                  <img
                    className="achievement-image"
                    src={achievement.image_url}
                    alt="achievement"
                  />
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <p className="profile-info">
          I do 100 push-ups everyday. My friends call me one-punch man.
        </p>
        <Divider className="line" />
        <div>
          <div className="progress-row">
            <p className="progress-text">Chest</p>
            <div className="progress-bar-div">
              <ProgressBar
                className="custom-progress-bar"
                variant="success"
                now={50}
              />
            </div>
          </div>
          <div className="progress-row">
            <p className="progress-text">Shoulder</p>
            <div className="progress-bar-div">
              <ProgressBar
                className="custom-progress-bar"
                variant="success"
                now={40}
              />
            </div>
          </div>
          <div className="progress-row">
            <p className="progress-text">Arms</p>
            <div className="progress-bar-div">
              <ProgressBar
                className="custom-progress-bar"
                variant="success"
                now={60}
              />
            </div>
          </div>
          <div className="progress-row">
            <p className="progress-text">Core</p>
            <div className="progress-bar-div">
              <ProgressBar
                className="custom-progress-bar"
                variant="success"
                now={80}
              />
            </div>
          </div>
          <div className="progress-row">
            <p className="progress-text">Legs</p>
            <div className="progress-bar-div">
              <ProgressBar
                className="custom-progress-bar"
                variant="success"
                now={0.5}
              />
            </div>
          </div>
        </div>
        <div className="history-view">
          <p className="history-header-text">Workout History:</p>
          <Collapse className="history-list" accordion>
            {fakeHistory.map((history, index) => (
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
                {history.exercises.map((exercise) => (
                  <p>
                    {exercise.name}: {exercise.reps}
                  </p>
                ))}
                <p>Duration: {history.duration} hours</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Profile;
