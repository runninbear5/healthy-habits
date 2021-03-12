import React, {useEffect, useState} from 'react' 
import { Redirect } from 'react-router-dom'
import { signInWithGoogle, logOut } from '../database/firebase'

function Login({user, setUser}){
    if(user){
        return <Redirect to="/"/>    }

    return (
        <div className="home-page">
            <div className="logobox">
            </div>
            <div className="row">
                <div className="col-md-12"> <button onClick={() => {signInWithGoogle(setUser)}} className="btn btn-lg btn-google btn-block text-uppercase btn-outline"><img alt="google" src="https://img.icons8.com/color/16/000000/google-logo.png"></img> Signup Using Google</button> </div>
            </div>
        </div>
    );
}

export function Logout({setuser}){
    // const user = useContext(UserContext)
    

    useEffect(() => {
        logOut(setuser);
    }, [setuser])
    
    return <Redirect to="/"/>
    
}

export default Login;