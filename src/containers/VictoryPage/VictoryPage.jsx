import React from "react";

import "./VictoryPage.scss";

import ProgressBar from "react-bootstrap/ProgressBar";

import VictoryImg from "./victory.jpg";

const VictoryPage = (props) => {
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
              <ProgressBar variant="warning" now={50} key={2} />
              <ProgressBar variant="success" now={10} label="+10" key={1} />
            </ProgressBar>
          </div>
        </div>
        <div className="stat-container">
          <div className="text-container">
            <p>Shoulder</p>
          </div>
          <div className="progress-container">
            <ProgressBar>
              <ProgressBar variant="warning" now={30} key={2} />
              <ProgressBar variant="success" now={5} label="+5" key={1} />
            </ProgressBar>
          </div>
        </div>
        <div className="stat-container">
          <div className="text-container">
            <p>Arms</p>
          </div>
          <div className="progress-container">
            <ProgressBar>
              <ProgressBar variant="warning" now={60} key={2} />
              <ProgressBar variant="success" now={7} label="+7" key={1} />
            </ProgressBar>
          </div>
        </div>
        <div className="stat-container">
          <div className="text-container">
            <p>Core</p>
          </div>
          <div className="progress-container">
            <ProgressBar>
              <ProgressBar variant="warning" now={80} key={2} />
            </ProgressBar>
          </div>
        </div>
        <div className="stat-container">
          <div className="text-container">
            <p>Legs</p>
          </div>
          <div className="progress-container">
            <ProgressBar>
              <ProgressBar variant="warning" now={10} key={2} />
            </ProgressBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VictoryPage;
