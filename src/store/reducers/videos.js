import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

//The state that you can use
const initialState = {
  videos: [],
  loading: false,
  finished: false,
  error: null,
};

//updateObject is just a helper function to update the initialState
const getVideosStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const getVideosSuccess = (state, action) => {
  return updateObject(state, {
    videos: action.videos,
    loading: false,
    finished: true,
  });
};

const getVideosFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  //Switch between the action type called in actions dir functions
  //This will call reducers corresponding to the actions and update
  //the initialState
  switch (action.type) {
    case actionTypes.GET_VIDEOS_START:
      return getVideosStart(state, action);
    case actionTypes.GET_VIDEOS_SUCCESS:
      return getVideosSuccess(state, action);
    case actionTypes.GET_VIDEOS_FAIL:
      return getVideosFail(state, action);
    default:
      return state;
  }
};

export default reducer;
