import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

import "./VictoryPage.scss";

import ProgressBar from "react-bootstrap/ProgressBar";

import VictoryImg from "./victory.jpg";
import {
  createPastWorkout,
  getStats,
  getWorkoutHistory,
  updatePastWorkout,
  updateStats,
  updateWorkoutHistory
} from "../../ApiHandlers";

const fakeWorkout = {
  chest: 10,
  shoulder: 7,
  arms: 5,
  core: 0,
  legs: 0,
  participants: "Darius, Jay, Jerryl, Roy, Wai Kye",
  videoDesc: "desc",
  videoLink: "link"
}

const VictoryPage = (props) => {
  const history = useHistory();
  const [currentStats, setStats] = useState([]);
  const [currentHist, setHist] = useState([]);

  useEffect(() => {
    getStats().then(stats => setStats(stats));
    getWorkoutHistory().then(hist => setHist(hist));
  }, [])

  const postWorkout = () => {
    const stats = {
      stats: currentStats,
      chest: fakeWorkout.chest,
      shoulder: fakeWorkout.shoulder,
      arms: fakeWorkout.arms,
      core: fakeWorkout.core,
      legs: fakeWorkout.legs
    }
    const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    const date = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);

    const workout = {
      workoutDate: date.substr(0, 10) + " " + date.substr(11, 5),
      participants: fakeWorkout.participants,
      videoDesc: fakeWorkout.videoDesc,
      videoLink: fakeWorkout.videoLink
    }

    Promise.all([
      updateStats(stats),
      updatePastWorkout("demo-room", workout),
      updateWorkoutHistory("demo-room", currentHist)
    ]).then(history.push("/home"));
  }

  return (
    <div className="victory-page">
      <div className="image-container">
        <img src={VictoryImg} className="image"></img>
      </div>
      <div className="stats-container">
        <div className="stat-container">
          <div className="text-container">
            <p>Chest</p>
          </div>
          <div className="progress-container">
            <ProgressBar>
              <ProgressBar variant="warning" now={currentStats.chestXp} key={2} />
              <ProgressBar variant="success" now={fakeWorkout.chest} label="+10" key={1} />
            </ProgressBar>
          </div>
        </div>
        <div className="stat-container">
          <div className="text-container">
            <p>Shoulder</p>
          </div>
          <div className="progress-container">
            <ProgressBar>
              <ProgressBar variant="warning" now={currentStats.shoulderXp} key={2} />
              <ProgressBar variant="success" now={fakeWorkout.shoulder} label="+5" key={1} />
            </ProgressBar>
          </div>
        </div>
        <div className="stat-container">
          <div className="text-container">
            <p>Arms</p>
          </div>
          <div className="progress-container">
            <ProgressBar>
              <ProgressBar variant="warning" now={currentStats.armsXp} key={2} />
              <ProgressBar variant="success" now={fakeWorkout.arms} label="+7" key={1} />
            </ProgressBar>
          </div>
        </div>
        <div className="stat-container">
          <div className="text-container">
            <p>Core</p>
          </div>
          <div className="progress-container">
            <ProgressBar>
              <ProgressBar variant="warning" now={currentStats.coreXp} key={2} />
              <ProgressBar variant="success" now={fakeWorkout.core} key={1} />
            </ProgressBar>
          </div>
        </div>
        <div className="stat-container">
          <div className="text-container">
            <p>Legs</p>
          </div>
          <div className="progress-container">
            <ProgressBar>
              <ProgressBar variant="warning" now={currentStats.legsXp} key={2} />
              <ProgressBar variant="success" now={fakeWorkout.legs} key={1} />
            </ProgressBar>
          </div>
        </div>
        <button
            onClick={postWorkout}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default VictoryPage;
