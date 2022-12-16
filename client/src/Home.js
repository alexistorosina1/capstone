import Login from "./Login"

function Home ({ user, onLogin }){
    return(
        <div>
            {user ? 
            <h1>Welcome Back {user.username}</h1> 
            :
            <h1>Hello</h1> }
            <Login onLogin={onLogin}/>
        </div>
    )
}

export default Home;