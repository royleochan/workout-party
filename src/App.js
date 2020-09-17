import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Auth } from "aws-amplify";
import BaseRouter from "routes";
import CustomLayout from "containers/Layout";
import { AiOutlineLogin } from "react-icons/ai";
import authReducer from "store/reducers/auth";

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const store = createStore(rootReducer);

class App extends React.Component {
  handleLogout = async () => {
    await Auth.signOut();
    window.location.href = "/";
  };

  render() {
    return (
      // <Provider store={store}>
      <div className="App">
        <Router>
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
      // </Provider>
    );
  }
}
export default App;
