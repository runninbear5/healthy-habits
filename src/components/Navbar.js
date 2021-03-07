import React, {useContext, useState} from 'react'
import { UserContext} from '../provider/UserProvider'
import '../css/nav.css';

const Navbar = ({user}) => {
    // const user = useContext(UserContext)
    const [redirect, setRedirect] = useState(null)
    console.log(user);
    return(
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Healthy Habits </a>
                <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="d-flex navbar-nav mr-auto">
                    <li className="p-2 nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="p-2 nav-item">
                    <a className="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                </ul>
                <ul className="d-flex nav navbar-nav ml-auto">
                        {user ?
                            <li className="ms-auto nav-item">
                                <span className="navbar-text">Welcome Back {user.displayName}</span>
                            </li>
                        : 
                            <div></div>}
                        {user ? 
                            <li className="nav-item">
                                    <a className="nav-link" href="/logout">Logout</a>
                            </li>
                        :
                            <li className="ms-auto p-2 nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        }
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;