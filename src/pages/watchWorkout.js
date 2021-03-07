import '../App.css';
import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import ExcerciseTracker from "../components/ExcerciseTracker";

function WatchWorkout({user, options}) {

    // const user = useContext(UserContext)

    useEffect(() => {
        if(!user) {
            <Redirect to={"/"}/>;
        }
    }, [user]);
    
    return (
        <div>
            <ExcerciseTracker user={user} options={options}/>
        </div>
    )
}

export default WatchWorkout;


    