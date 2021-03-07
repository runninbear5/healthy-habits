import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import '../css/home.css';

function Home(){
    const [redirect, setredirect] = useState(null);

    return(
        <div>
            <div className="home title">Healthy Habits</div>
        </div>
    )
}

export default Home;