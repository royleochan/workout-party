import * as actionTypes from "./actionTypes";
import axios from "axios";

//When creating actions remember to add
//in the constants to actionTypes.js

//Use the 'dispatch' keyword to carry out action functions that will
//call the corresponding reducer functions
export const jitsiStart = () => {
  return {
    type: actionTypes.JITSI_START,
    roomName: 
  };
};

export const jitsiSuccess = (data) => {
  return {
    type: actionTypes.JITSI_SUCCESS,
    videos: data,
  };
};

export const jitsiFail = (error) => {
  return {
    type: actionTypes.JITSI_FAIL,
    error: error,
    loading: false,
  };
};

export const createRoom = () => {
  
}