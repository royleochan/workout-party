import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

//The state that you can use
const initialState = {
  video: "",
  roomName: "",
  minutes: 0,
  error: null,
};

//updateObject is just a helper function to update the initialState
const jitsiStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    roomName: action.roomName,
    video: action.video,
    minutes: action.minutes,
  });
};

const jitsiSuccess = (state, action) => {
  return updateObject(state, {
    video: action.video,
  });
};

const jitsiFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  //Switch between the action type called in actions dir functions
  //This will call reducers corresponding to the actions and update
  //the initialState
  switch (action.type) {
    case actionTypes.JITSI_START:
      return jitsiStart(state, action);
    case actionTypes.JITSI_SUCCESS:
      return jitsiSuccess(state, action);
    case actionTypes.JITSI_FAIL:
      return jitsiFail(state, action);
    default:
      return state;
  }
};

export default reducer;
