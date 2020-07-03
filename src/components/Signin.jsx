import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";

function Signin(props) {
    // const [username, setUsername] = useState("")
    const [emailaddress, setEmailaddress] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    // function handleChangeUsername(event) {
    //     const username = event.target.value;
    //     setUsername(username);
    // } 

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
        axios().post ('/user/login',{
            // username: username,
            email: emailaddress,
            password: password
        })
        .then(function(res){
            if (res.data.token) {
                localStorage.setItem('usertoken', res.data.token);
                props.handleLogin();
                history.push("/dashboard");
                console.log(res);
            }
        })
        .catch(err => {
            console.log(err);
            alert("Have you connected to the database?");
          });
        
    }


    return (<div className="text-center joinus-page" data-gr-c-s-loaded="true">

        <form onSubmit={handleSubmit} className="login-form">
            
            <h1 className="joinus-title h3 mb-3 font-weight-normal">Welcome back!</h1>
            {/* <h5>Status: {props.isLoggedIn}</h5> */}

            <label for="inputEmail" className="sr-only email-input">Email address</label>
            <input 
                onChange={handleChangeEmail}
                type="text" 
                id="inputEmail" 
                className="form-control email-input" 
                placeholder="Email address" 
                value={emailaddress}
                required autoFocus
            />
            <label for="inputPassword" className="sr-only password-input">Password</label>
            <input 
                onChange={handleChangePassword}
                type="password"
                id="inputLoginPass"
                className="form-control password-input" 
                placeholder="Password" 
                value={password}
                required 
            />
            <div className="checkbox mb-3">
                <label className="rememberme">
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-info btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2020-</p>

        </form>
    </div>);
}

export default Signin;