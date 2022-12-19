import './App.css';
import { BrowserRouter, BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Login from './Login'
import { useState, useEffect } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Tracker from './Tracker';
import Exercises from './Exercises';
import Profile from './Profile';
import Signup from './Signup';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('/me')
          .then(r => {
            if (r.ok) {
              r.json().then(user => setUser(user))
            }
          })
      }, [])
    
      function handleLogOut() {
        fetch('/logout', {
          method: "DELETE"
        }).then(r => {
          if (r.ok) {
            setUser(null)
          }
        })
      }
    
      function onLogin(user) {
        setUser(user)
      }

    
    return(
        <div className='App'>
            <Router>
            <Navbar user={user} handleLogOut={handleLogOut}></Navbar>
                <Routes>
                    <Route exact path="/" element={<Home user={user} onLogin={onLogin}/>}></Route>
                    <Route exact path="/login" element={<Login setUser={setUser}/>}></Route>
                    <Route exact path="/tracker" element={<Tracker/>}></Route>
                    <Route exact path="/exercises" element={<Exercises/>}></Route>
                    <Route exact path="/profile" element={<Profile/>}></Route>
                    <Route exact path="/signup" element={<Signup setUser={setUser}/>}></Route>
                </Routes>
                {/* {user ? <button onClick={handleLogOut}>Log out</button> : null} */}
            </Router>
        </div>
    )
}


export default App;
