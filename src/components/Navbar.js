import React from 'react'
import '../css/nav.css';

const Navbar = ({user, setUser}) => {
    // const user = useContext(UserContext)
    return(
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom ">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Healthy Habits </a>
                </div>
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
                    <li className="p-2 nav-item active-custom">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    {user ?
                        <li className="p-2 nav-item active-custom">
                        <a className="nav-link" href="/doWorkout">Do Workout</a>
                        </li>
                    :
                        <div></div>
                    }
                    {user ?
                        <li className="p-2 nav-item active-custom">
                        <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                    :
                        <div></div>
                    }
                </ul>
                <ul className="d-flex nav navbar-nav ml-auto">
                        {user ?
                            <li className="nav-item dropdown center">
                                <a className="nav-link dropdown-toggle noPad" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="navbar-text active-custom">Welcome Back, <span style={{color: "white"}}>{user.displayName}</span></span>
                                    <img alt="user profile" className="propic" src={user.photoURL}/>
                                </a>
                                <div className="dropdown-menu click-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/logout">Logout</a>
                                </div>
                          </li>
                        : 
                            <div></div>}
                        {user ? 
                            <></>
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


{/* <li className="ms-auto nav-item nav-custom-flex">
                                <Dropdown>
                                    <Dropdown.Toggle as="a" className="navbar-text logout-drop">
                                        <span className="navbar-text">Welcome Back, {user.displayName}</span>
                                        <img alt="user profile" className="propic" src={user.photoURL}/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropMenu">
                                        <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>  */}