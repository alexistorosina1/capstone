import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Login from './Login'
import { useState, useEffect } from 'react';
import Home from './Home';

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
                {user ?
                <button onClick={handleLogOut}>Log Out</button> 
                : null
                }
                <Routes>
                    <Route exact path="/" element={<Home user={user} onLogin={onLogin} />} />
                    <Route exact path="/login" element={<Login setUser={setUser} />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
