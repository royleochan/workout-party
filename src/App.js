import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "containers/HomeTab/Home";
import Exercise from "containers/ExerciseTab/Exercise";
import Workouts from "containers/WorkoutsTab/Workouts";
import Profile from "containers/ProfileTab/Profile";
import Achievements from "containers/AchievementsTab/Achievements";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/exercise">Exercise</Link>
                </li>
                <li>
                  <Link to="/workouts">Workouts</Link>
                </li>
                <li>
                  <Link to="/achievements">Achievements</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/exercise">
                <Exercise />
              </Route>
              <Route path="/workouts">
                <Workouts />
              </Route>
              <Route path="/achivements">
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
      </header>
    </div>
  );
}

export default App;
