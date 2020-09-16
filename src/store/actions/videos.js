import * as actionTypes from "./actionTypes";
import axios from "axios";

//When creating actions remember to add
//in the constants to actionTypes.js

//Use the 'dispatch' keyword to carry out action functions that will
//call the corresponding reducer functions
export const getVideosStart = () => {
  return {
    type: actionTypes.GET_VIDEOS_START,
  };
};

export const getVideosSuccess = (data) => {
  return {
    type: actionTypes.GET_VIDEOS_SUCCESS,
    videos: data,
  };
};

export const getVideosFail = (error) => {
  return {
    type: actionTypes.GET_VIDEOS_FAIL,
    error: error,
    loading: false,
  };
};
