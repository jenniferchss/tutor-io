import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import Alert from "./Alert";

function Signin(props) {    
    const [emailaddress, setEmailaddress] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");
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
        axios().post ('/user/login',{
            email: emailaddress,
            password: password
        })
        .then(function(res){
            if (res.data.token) {
                localStorage.setItem('usertoken', res.data.token);
                localStorage.setItem('loggedinuser', res.data.user._id);
                localStorage.setItem('userid', res.data.user._id);
                props.handleLogin();
                history.push("/dashboard");
                console.log(res);
            }
        })
        .catch(err => {
            console.log(err.response);
            if (err.response.data.message === "User Not Exist") {
                setMessage("User is not registered. Please make an account first.");
            }
            else if (err.response.data.message === "Incorrect Password !") {
                setMessage("Incorrect password!");
            }
            else if (err.response.data.message === "User is not verified") {
                setMessage("Account is not verified yet. Please confirm your email address first.")
                history.push('/failedverify')
            }
            else {
                setMessage("Error has occurred. Please refresh the page.");
            }
        });
        
    }


    return (<div>
        {message ? <Alert msg={message}/> : null}
    <div className="joinus-page" data-gr-c-s-loaded="true">
        
        <form onSubmit={handleSubmit} className="login-form">
            
            <h1 className="joinus-title h3 mb-3 font-weight-normal text-center">Welcome back!</h1>
            {/* <h5>Status: {props.isLoggedIn}</h5> */}

            <label htmlFor="inputEmail" className="sr-only email-input">Email address</label>
            <input 
                onChange={handleChangeEmail}
                type="text" 
                id="inputEmail" 
                className="form-control email-input" 
                placeholder="Email address" 
                value={emailaddress}
                required autoFocus
            />
            <label htmlFor="inputPassword" className="sr-only password-input">Password</label>
            <input 
                onChange={handleChangePassword}
                type="password"
                id="inputLoginPass"
                className="form-control password-input" 
                placeholder="Password" 
                value={password}
                required 
            />
            <small className="forgot-password"><a className="forgot-pw" href="/forgotpassword">Forgot your password?</a></small>
            <button className="btn btn-lg btn-info btn-block text-center signin-btn" type="submit">Sign in</button>
            <small className="link-sign text-center">Don't have an account yet? <a className="no-account" href="/signup">Create a new one</a></small>
            <p className="mt-5 mb-3 text-muted text-center">© 2020</p>

        </form>
    </div>
    </div>);
}

export default Signin;