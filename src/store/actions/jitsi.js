import * as actionTypes from "./actionTypes";
import axios from "axios";

//When creating actions remember to add
//in the constants to actionTypes.js

//Use the 'dispatch' keyword to carry out action functions that will
//call the corresponding reducer functions
export const jitsiStart = (roomName, video, minutes) => {
  return {
    type: actionTypes.JITSI_START,
    roomName: roomName,
    video: video,
    minutes: minutes,
  };
};

export const jitsiSuccess = (video, minutes) => {
  return {
    type: actionTypes.JITSI_SUCCESS,
    video: video,
    minutes: minutes,
  };
};

export const jitsiFail = (error) => {
  return {
    type: actionTypes.JITSI_FAIL,
    error: error,
    loading: false,
  };
};

export const createRoom = () => {};
