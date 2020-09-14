import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Auth } from "aws-amplify";

import Home from "containers/HomeTab/Home";
import Exercise from "containers/ExerciseTab/Exercise";
import Workouts from "containers/WorkoutsTab/Workouts";
import Profile from "containers/ProfileTab/Profile";
import Achievements from "containers/AchievementsTab/Achievements";
import Login from "containers/LoginPage/Login";
import Create from "containers/InvitePage/Create";
import VictoryPage from "containers/VictoryPage/VictoryPage";

import { AiOutlineLogin } from "react-icons/ai";

function App() {
  const handleLogout = async () => {
    await Auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="App">
      <Router>
        {!["/", "/invite"].includes(window.location.pathname) && (
          <header className="App-header">
            <div>
              <nav>
                <ul className="nav-bar">
                  <li className="nav-item">
                    <Link className="App-link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="App-link" to="/exercise">
                      Exercise
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="App-link" to="/workouts">
                      Workouts
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="App-link" to="/achievements">
                      Achievements
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="App-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <AiOutlineLogin color={"white"} onClick={handleLogout} />
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        )}
        <div>
          <Switch>
            <Route path="/exercise">
              <Exercise />
            </Route>
            <Route path="/workouts">
              <Workouts />
            </Route>
            <Route path="/achievements">
              <Achievements />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/invite">
              <Create />
            </Route>
            <Route path="/victory">
              <VictoryPage />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
