import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import UserProvider from './provider/UserProvider'
import Home from './pages/home';
import SignInPage, {Logout} from './pages/login';
import Dashboard from './pages/dashboard';
import FormPage from './pages/FormPage'
import NotFoundPage from './pages/404';
import Navbar from './components/Navbar';
import {getUser} from './database/firebase'

const options = ["Push-ups","Squats", "Sit-ups", "Pull-ups"];

console.log(getUser);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
      <Navbar user={getUser}></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/logout" component={Logout} />
        {/* <Route exact path="/form" component={() => <FormPage options={options}/>} /> */}
        <Route exact path="/dashboard" component={() => <Dashboard user={getUser} options={options}/>} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" /> 
      </Switch>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
