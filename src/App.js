import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import BaseRouter from "routes";
import CustomLayout from "containers/Layout";

class App extends React.Component {
  handleLogout = async () => {
    await Auth.signOut();
    window.location.href = "/";
  };

  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}
export default App;
