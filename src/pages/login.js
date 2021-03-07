import React, {useEffect, useState, useContext} from 'react' 
import { Redirect } from 'react-router-dom'
import { signInWithGoogle, logOut } from '../database/firebase'

function Login({user, setUser}){
    // const user = useContext(UserContext)
    const [redirect, setredirect] = useState(null)

    // useEffect(() => {
    //     if (user) {
    //         setredirect('/dashboard')
    //     }
    // }, [user])
    console.log(user);
    if(user){
        return <Redirect to="/"/>    }
    if (redirect) {
        return <Redirect to={redirect}/>
    }
    return (
        <div className="home-page">
            <div className="logobox">
            </div>
            <div className="row">
                <div className="col-md-12"> <button onClick={() => {signInWithGoogle(setUser)}} className="btn btn-lg btn-google btn-block text-uppercase btn-outline"><img src="https://img.icons8.com/color/16/000000/google-logo.png"></img> Signup Using Google</button> </div>
            </div>
        </div>
    );
}

export function Logout({setuser}){
    // const user = useContext(UserContext)
    const [redirect, setredirect] = useState("/logout")

    useEffect(() => {
        logOut(setuser);
        // console.log(user);
        // // if (user) {
        //     logOut();
        //     // setredirect("/")
        // }else{
        //     // setredirect('/login')
        // }
    }, [])
    if (redirect) {
        return <Redirect to={redirect}/>
    }
    return (
        <div className="home-page">
            <div className="logobox">
            </div>
            <div className="row">
                Logging Out
            </div>
        </div>
    );
}

export default Login;