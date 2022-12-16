import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function Login({ setUser}){

    const [form, setForm] = useState({
        username: "",
        password: "",
        passwordConfirmation: "",
      });

      const [errors, setErrors] = useState(null);

      function handleChange(e) {
        const value = e.target.value;
        const keyName = e.target.name;
        setForm({...form, [keyName]: value })
      }

      const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(form)

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({form}),
        }) .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    
                })
            }
        })

      }
    
    return(
        <div className="Login">
            <form onSubmit={handleSubmit}>
            <label className="label"> Username </label>
            <input  
            type="text" 
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            name="username"
            />
            <label className="label"> Password </label>
            <input 
            type="password" 
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            name="password"/>
            <button class="btn">Log In</button>
            </form>
        </div>
    )
}

export default Login
