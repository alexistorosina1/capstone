import Login from "./Login"
import { Link } from "react-router-dom";

function Home ({ user, onLogin }){
    return(
        <div>
            {user ? 
            <h1>Welcome Back {user.username}</h1> 
            :
            <Login onLogin={onLogin}/> }
            {/* <Link to="/signup">Create an account</Link> */}
        </div>
    )
}

export default Home;