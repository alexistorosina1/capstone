import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({user, handleLogOut}){
    return (
        <nav>
            <div className="logo">
                REPS
            </div>
            <div className="navItem">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tracker">Tracker</NavLink>
            <NavLink to="/exercises">Exercises</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            {user ? <button onClick={handleLogOut}>Log out</button> : null}
            </div>
        </nav>
    )
};

export default Navbar;