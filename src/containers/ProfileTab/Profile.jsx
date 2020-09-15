import React from "react";
import "./Profile.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import {Collapse, Divider} from "antd";

const {Panel} = Collapse;

const fakeProfile = {
    name: "Jay Chua",
    image_url: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    bg_image_url: 'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg',
}

const fakeHistory = [
    {
        date: "3 Sept, Thursday, 2350",
        participants: ["Roy", "Jerryl", "Darius", "Wai Kye"],
        exercises: [{name: "Push Ups", reps: "100"}],
        duration: "0.02"
    },
    {
        date: "26 August, Wednesday, 0609",
        participants: ["bob", "naruto", "muscleman"],
        exercises: [{name: "Push Ups", reps: "100"}, {name: "Squats", reps: "-100"}],
        duration: "1"
    },
    {
        date: "24 August, Monday, 1030",
        participants: ["bob", "naruto", "muscleman"],
        exercises: [{name: "Push Ups", reps: "100"}, {name: "Squats", reps: "-100000"}],
        duration: "2"
    }
]


const Profile = (props) => {



    return (
        <div className='profile'>
            <img
                className='background-image'
                src={fakeProfile.bg_image_url}
                alt="Background"
            />
            <div className='body'>
                <ul className='header'>
                    <div className='profile-pic-item'>
                        <img
                            onMouseOver=""
                            className='profile-pic'
                            src={fakeProfile.image_url}
                            alt="Profile Pic"
                        />
                        <div class="overlay">
                            <p class="overlay-text">Change Profile Picture</p>
                        </div>
                    </div>
                    <li className='profile-name'>
                        <p className='profile-name-text'>{fakeProfile.name}</p>
                    </li>
                </ul>
                <p className='profile-info'>{fakeProfile.name} has completed X workouts.</p>
                <Divider className='line'/>
                <div>
                    <div className='progress-row'>
                        <p className='progress-text'>Chest</p>
                        <div className='progress-bar-div'>
                            <ProgressBar className='custom-progress-bar' variant="success" now={50} />
                        </div>
                    </div>
                    <div className='progress-row'>
                        <p className='progress-text'>Shoulder</p>
                        <div className='progress-bar-div'>
                            <ProgressBar className='custom-progress-bar' variant="success" now={40} />
                        </div>
                    </div>
                    <div className='progress-row'>
                        <p className='progress-text'>Arms</p>
                        <div className='progress-bar-div'>
                            <ProgressBar className='custom-progress-bar' variant="success" now={60} />
                        </div>
                    </div>
                    <div className='progress-row'>
                        <p className='progress-text'>Core</p>
                        <div className='progress-bar-div'>
                            <ProgressBar className='custom-progress-bar' variant="success" now={80} />
                        </div>
                    </div>
                    <div className='progress-row'>
                        <p className='progress-text'>Legs</p>
                        <div className='progress-bar-div'>
                            <ProgressBar className='custom-progress-bar' variant="success" now={0.5} />
                        </div>
                    </div>
                </div>
                <div className='history-view'>
                    <p className='history-header-text'>Workout History:</p>
                    <Collapse className='history-list' accordion>
                        {
                            fakeHistory.map((history, index) =>
                                <Panel className='history-panel' header={history.date} key={index}>
                                    <div className='participants-div'>
                                        <p>Participants:</p>
                                        {history.participants.map(user =>
                                            <p>{user}</p>
                                        )}
                                    </div>
                                    {history.exercises.map(exercise =>
                                        <p>{exercise.name}: {exercise.reps}</p>
                                    )}
                                    <p>Duration: {history.duration} hours</p>
                                </Panel>
                            )
                        }
                    </Collapse>
                </div>

            </div>
        </div>
    );
};

export default Profile;
