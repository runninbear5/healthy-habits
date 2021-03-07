import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { UserContext} from '../provider/UserProvider'
import '../css/home.css';

function Home(){
    const user = useContext(UserContext)
    const [redirect, setredirect] = useState(null);

    return(
        <div>
            <div className="home title">Healthy Habits</div>
        </div>
    )
}

export default Home;