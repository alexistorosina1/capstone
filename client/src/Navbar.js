import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({user, handleLogOut}){
    return (
        <nav class="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="http://localhost:4000/" class="flex items-center">
        <img src="https://pbs.twimg.com/card_img/1608964395492671488/AviZ5NIu?format=png&name=360x360" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-white font-semibold whitespace-nowrap dark:text-white">REPS</span>
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/tracker">
            Tracker
        </NavLink>
        <NavLink to="/exercises">
            Exercises
        </NavLink>
        <li>
        {user ? <button onClick={handleLogOut}>Log out</button> : null}
        </li>
        <li>
{user ? 
<h1 class="text-right text-sky-400">Welcome back {user.username}</h1>
: 
<></>
} 
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
};

//  <div className="logo">
//     REPS
// </div>
// <div className="navItem">
// <NavLink to="/">Home</NavLink>
// <NavLink to="/tracker">Tracker</NavLink>
// <NavLink to="/exercises">Exercises</NavLink>
// {user ? <button onClick={handleLogOut}>Log out</button> : null}
// </div>
// {user ? 
// <h1 class="text-right text-sky-400">Welcome back {user.username}</h1>
// : 
// <></>
// } 
export default Navbar;