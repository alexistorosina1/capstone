import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function Login(){
    return(
        <form>
            <label className="label"> Username </label>
            <input type="text" placeholder="Username"/>
            <label className="label"> Password </label>
            <input type="password" placeholder="Password"/>

        </form>
    )
}

export default Login
