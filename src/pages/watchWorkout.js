import '../App.css';
import React, {useEffect, useContext, useState} from 'react'
import { Redirect,Link } from 'react-router-dom'
import ExcerciseTracker from "../components/ExcerciseTracker";
import {logOut} from '../database/firebase'

function WatchWorkout({user, options}) {

    // const user = useContext(UserContext)
    const [redirect, setRedirect] = useState(null)


    const handleLogoutClick = () => {
        
        <Redirect to="/"/>
    }

    useEffect(() => {
        console.log();
        if(!user) {
            console.log("redirect");
            <Redirect to={"/"}/>;
        }
    }, []);

    if (redirect) {
        <Redirect to={redirect}/>;
    }
    
    return (
        <div>
            <ExcerciseTracker user={user} options={options}/>
            <button onClick={handleLogoutClick()}></button>
        </div>
    )
}

export default WatchWorkout;


    