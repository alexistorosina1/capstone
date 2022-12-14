import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function Login({ onLogin}){

    const [form, setForm] = useState({
        username: "",
        password: "",
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
            body: JSON.stringify(form),
        }) .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    onLogin(user)
                    setErrors(null)
                })
            } else {
                r.json().then(errors => setErrors(errors))
            }
        })

        setForm({
            username: "",
            password:""
        })

      }
    
    return(
        <div class="form-control">
            <form onSubmit={handleSubmit}>
            <label class="label">
                {/* <span class="label-text">Username</span> */}
            </label>
            <input
            class="input input-bordered"  
            type="text" 
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            name="username"
            />
            <label class="label">
                {/* <span class="label-text">Password</span> */}
            </label>
            <input
            class="input input-bordered" 
            type="password" 
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            name="password"/>
            <br/>
            <button type="submit" class="btn btn-primary">Log In</button>
            </form>
            <Link to="/signup">Create an account</Link>
        </div>
    )
}

export default Login
