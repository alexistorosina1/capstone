import { useState } from "react";


function Signup({setUser}){
    const [form, setForm] = useState({
        username: "",
        password : "",
        passwordConfirmation: "",
    })

    function handleChange(e) {
        const value = e.target.value;
        const keyName = e.target.name;
        setForm({...form, [keyName]: value })
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })  .then((r) => {
            if (r.ok){
                r.json().then((user) => {
                    setUser(user)
                })
            }
        })
      };

    return(
        <div>
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
            <label class="label">
                {/* <span class="label-text">Password</span> */}
            </label>
            <input
            class="input input-bordered" 
            type="password" 
            placeholder="Password Confirmation"
            value={form.passwordConfirmation}
            onChange={handleChange}
            name="passwordConfirmation"/>
            <br/>
            <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}


export default Signup;