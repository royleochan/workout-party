import * as actionTypes from "./actionTypes";
import axios from "axios";

//When creating actions remember to add
//in the constants to actionTypes.js

//Use the 'dispatch' keyword to carry out action functions that will
//call the corresponding reducer functions
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (email, idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    email: email,
    idToken: idToken,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authResetPassword = () => {
  return {
    type: actionTypes.AUTH_RESET,
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expiryTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expiryTime * 1000);
  };
};

export const resetPassword = (email) => {
  return (dispatch) => {
    const authData = {
      requestType: "PASSWORD_RESET",
      email: email,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC12wxDo517wIl_66rKVCglgn-EVT2VPFE";
    axios
      .post(url, authData)
      .then((response) => {
        // console.log(response.data);
        dispatch(authResetPassword());
      })
      .catch((err) => {
        // console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    //This URL is without email verification.
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC12wxDo517wIl_66rKVCglgn-EVT2VPFE";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC12wxDo517wIl_66rKVCglgn-EVT2VPFE";
    }
    axios
      .post(url, authData)
      .then((response) => {
        // console.log(response.data);
        dispatch(
          authSuccess(
            response.data.email,
            response.data.idToken,
            response.data.localId
          )
        );
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};
