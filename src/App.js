import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "containers/HomeTab/Home";
import Exercise from "containers/ExerciseTab/Exercise";
import Workouts from "containers/WorkoutsTab/Workouts";
import Profile from "containers/ProfileTab/Profile";
import Achievements from "containers/AchievementsTab/Achievements";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div>
            <nav>
              <ul className='nav-bar'>
                <li className='nav-item'>
                  <Link className='App-link' to="/">Home</Link>
                </li>
                <li className='nav-item'>
                  <Link className='App-link' to="/exercise">Exercise</Link>
                </li>
                <li className='nav-item'>
                  <Link className='App-link' to="/workouts">Workouts</Link>
                </li>
                <li className='nav-item'>
                  <Link className='App-link' to="/achievements">Achievements</Link>
                </li>
                <li className='nav-item'>
                  <Link className='App-link' to="/profile">Profile</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;