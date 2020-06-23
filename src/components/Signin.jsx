import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Signin() {
    const [emailaddress, setEmailaddress] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const history = useHistory();

    function handleChangeEmail(event) {
        const emailaddress = event.target.value;
        setEmailaddress(emailaddress);
    }

    function handleChangePassword(event) {
        const password = event.target.value;
        setPassword(password);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post ('/user/login',{
            email: emailaddress,
            password: password
        })
        .then(function(res){
            console.log(res);
            setLoggedIn(true);
            localStorage.setItem('token', res.data.token);
        })
        .catch(function(err) {
            console.error(err)
        });

        if (loggedIn) {
            history.push("/dashboard");
        }
    }


    return (<div className="text-center joinus-page" data-gr-c-s-loaded="true">

        <form onSubmit={handleSubmit} className="login-form">
            
            <h1 className="joinus-title h3 mb-3 font-weight-normal">Welcome back!</h1>

            <label for="inputEmail" class="sr-only email-input">Email address</label>
            <input 
                onChange={handleChangeEmail}
                type="email" 
                id="inputEmail" 
                class="form-control" 
                placeholder="Email address" 
                required autoFocus 
            />
            <label for="inputPassword" class="sr-only password-input">Password</label>
            <input 
                onChange={handleChangePassword}
                type="password" 
                id="inputPassword" 
                class="form-control" 
                placeholder="Password" 
                required 
            />
            <div className="checkbox mb-3">
                <label className="rememberme">
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-info btn-block" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">© 2020-</p>

        </form>
    </div>);
}

export default Signin;