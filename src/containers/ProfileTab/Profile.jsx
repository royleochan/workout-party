import React from "react";
import "./Profile.scss";
import ProgressBar from "react-bootstrap/ProgressBar";

const Profile = (props) => {
  return (
      <div className='profile'>
          <img
              className='background-image'
              src='https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg'
              alt="Background"
          />
          <div className='body'>
              <ul className='header'>
                  <li className='profile-pic-item'>
                      <img
                          className='profile-pic'
                          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                          alt="Profile Pic"
                      />
                  </li>
                  <li className='profile-name'>
                      <text className='profile-name-text'>Jenny Parker</text>
                  </li>
                  <li className='profile-achievement'>
                      <ul className='achievement-preview'>
                          <li className='achievement'>
                              <img
                                  className='achievement-image'
                                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gold_circle.svg/1024px-Gold_circle.svg.png'
                                  alt='achievement'
                              />
                          </li>
                          <li className='achievement'>
                              <img
                                  className='achievement-image'
                                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gold_circle.svg/1024px-Gold_circle.svg.png'
                                  alt='achievement'
                              />
                          </li>
                          <li className='achievement'>
                              <img
                                  className='achievement-image'
                                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gold_circle.svg/1024px-Gold_circle.svg.png'
                                  alt='achievement'
                              />
                          </li>
                      </ul>
                  </li>
              </ul>
              <text className='profile-info'>I do 100 push-ups everyday. My friends call me one-punch man.</text>
              <hr className='line'/>
              <div>
                  <div className='progress-row'>
                      <text className='progress-text'>Chest</text>
                      <div className='progress-bar-div'>
                          <ProgressBar className='custom-progress-bar' variant="success" now={50} />
                      </div>
                  </div>
                  <div className='progress-row'>
                      <text className='progress-text'>Shoulder</text>
                      <div className='progress-bar-div'>
                          <ProgressBar className='custom-progress-bar' variant="success" now={40} />
                      </div>
                  </div>
                  <div className='progress-row'>
                      <text className='progress-text'>Arms</text>
                      <div className='progress-bar-div'>
                          <ProgressBar className='custom-progress-bar' variant="success" now={60} />
                      </div>
                  </div>
                  <div className='progress-row'>
                      <text className='progress-text'>Core</text>
                      <div className='progress-bar-div'>
                          <ProgressBar className='custom-progress-bar' variant="success" now={80} />
                      </div>
                  </div>
                  <div className='progress-row'>
                      <text className='progress-text'>Legs</text>
                      <div className='progress-bar-div'>
                          <ProgressBar className='custom-progress-bar' variant="success" now={0.5} />
                      </div>
                  </div>
              </div>
              <div className='history-header'>
                  <text className='history-header-text'>Workout History:</text>
              </div>
          </div>
      </div>
  );
};

export default Profile;
