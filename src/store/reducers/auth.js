import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

//The state that you can use
const initialState = {
  email: "",
  token: "",
  userId: "",
  error: null,
  loading: false,
  loggedIn: false,
};

//updateObject is just a helper function to update the initialState
const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    email: action.email,
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
    loggedIn: true,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    email: "",
    token: null,
    userId: null,
    loggedIn: false,
  });
};

const authReset = (state, action) => {
  return updateObject(state, {
    error: {
      message: "SENT_RESET",
    },
  });
};

const reducer = (state = initialState, action) => {
  //Switch between the action type called in actions dir functions
  //This will call reducers corresponding to the actions and update
  //the initialState
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.AUTH_RESET:
      return authReset(state, action);
    default:
      return state;
  }
};

export default reducer;
