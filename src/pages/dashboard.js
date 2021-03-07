import { UserContext} from '../provider/UserProvider'
import '../App.css';
import React, {useEffect, useContext, useState} from 'react'
import { Redirect,Link } from 'react-router-dom'
import ExcerciseTracker from "../components/ExcerciseTracker";
import {logOut} from '../database/firebase'

function Dashboard({user, options}) {

    // const user = useContext(UserContext)
    const [redirect, setRedirect] = useState(null)


    const handleLogoutClick = () => {
        
        <Redirect to="/"/>
    }

    useEffect(() => {
        if(!user) {
            setRedirect("/")
        }
    }, [user]);
    if (redirect) {
        <Redirect to={redirect}/>;
    }
    
    return (
        <div>
            <ExcerciseTracker options={options}/>
            <button onClick={handleLogoutClick()}></button>
        </div>
    )
}

export default Dashboard;


    