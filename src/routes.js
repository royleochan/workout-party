import React from 'react';
import { Route } from 'react-router-dom';
import Home from "containers/HomeTab/Home";
import Exercise from "containers/ExerciseTab/Exercise";
import Workouts from "containers/WorkoutsTab/Workouts";
import Profile from "containers/ProfileTab/Profile";
import Achievements from "containers/AchievementsTab/Achievements";
import Login from "containers/LoginPage/Login";
import Create from "containers/InvitePage/Create";
import VictoryPage from "containers/VictoryPage/VictoryPage";

const BaseRouter = () => (
    <div>
        <Route exact path = '/home' component = {Home}/>
        <Route exact path = '/exercise' component = {Exercise}/>
         <Route exact path="/workouts" component= {Workouts} />
        <Route exact path = '/profile' component = {Profile}/>
      <Route exact path = '/achievements' component = {Achievements}/>
      <Route exact path='/victory' component = {VictoryPage}/>
     <Route exact path = '/invite' component = {Create}/>
     <Route exact path = '/' component = {Login}/>
    </div>
)

export default BaseRouter;