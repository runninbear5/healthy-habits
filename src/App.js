import logo from './logo.svg';
import React, {useEffect, useContext, useState} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/home';
import SignInPage, {Logout} from './pages/login';
import WatchWorkout from './pages/watchWorkout';
import Dashboard from './pages/Dashboard';
import FormPage from './pages/FormPage'
import NotFoundPage from './pages/404';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute'
import {getUser} from './database/firebase'
import './App.css';

function App() {
  const options = ["Push-ups","Squats", "Sit-ups", "Pull-ups"];
  const [user, setUser] = useState(null);
  let userTmp = localStorage.getItem("user");
  if(userTmp){
    userTmp = JSON.parse(userTmp)
  }

  return (
    <Router>
      <Navbar user={userTmp}></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={() => <SignInPage user={user} setUser={setUser}/>} />
        <Route exact path="/logout" component={() => <Logout setuser={setUser}/>} />
        {/* <Route exact path="/form" component={() => <FormPage options={options}/>} /> */}
        <PrivateRoute exact path="/doWorkout" user={userTmp} component={() => <WatchWorkout user={userTmp} options={options}/>} />
        <PrivateRoute exact path="/dashboard" user={userTmp} component={() => <Dashboard user={userTmp} options={options}/>} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" /> 
      </Switch>
    </Router>
  );
}

export default App;
