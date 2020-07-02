import React, { useState } from "react";
import axios from "../axios";
import { useHistory } from "react-router-dom";

function Signup(props) {
    const [username, setUsername] = useState("")
    const [emailaddress, setEmailaddress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpass, setConfirmpass] = useState("")
    const history = useHistory();
    

    function handleChangeUser (event) {
        const username = event.target.value;
        setUsername(username);
    }

    function handleChangeEmail(event) {
        const emailaddress = event.target.value;
        setEmailaddress(emailaddress);
    }

    function handleChangePassword(event) {
        const password = event.target.value;
        setPassword(password);
    }

    function handleChangeConfirmpass(event) {
        const confirmpass = event.target.value;
        setConfirmpass(confirmpass);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (password.length < 6) {
            alert('Password must be at least 6 characters long!');
        }
        if (confirmpass !== password) {
            alert('Password do not match!');
        }
        else {
        axios().post ('/user/signup',{
            username: username,
            email: emailaddress,
            password: password
        })
        .then(function(res) {
            if (res.data.token) {
                localStorage.setItem('usertoken', res.data.token);
                props.handleLogin();
                history.push("/editprofile");
            }
        })
        .catch(function(err) {
            console.error(err);
            alert('Username / Email is already registered')});
        }
    }
    
    return (
        <div className="text-center joinus-page" data-gr-c-s-loaded="true">

            <form onSubmit={handleSubmit} className="login-form">
                
                <h1 className="joinus-title h3 mb-3 font-weight-normal">Join our Big Family!</h1>
                
                <label for="inputUsername" class="sr-only username-input">Username</label>
                <input 
                    onChange={handleChangeUser}
                    type="username" 
                    id="inputUsername" 
                    className="form-control" 
                    placeholder="username" 
                    value={username}
                    required autofocus
                />

                <label for="inputEmail" class="sr-only email-input">Email address</label>
                <input 
                    onChange={handleChangeEmail}
                    type="email" 
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Email address" 
                    value={emailaddress}
                    required 
                />
                
                <label for="inputPassword" class="sr-only password-input">Password</label>
                <input 
                    onChange={handleChangePassword}
                    type="password" 
                    id="inputPassword" 
                    className="form-control" 
                    placeholder="Password (min 6 characters)" 
                    value={password}
                    required 
                />
                
                <label for="inputPassword" class="sr-only password-input">Confirm Password</label>
                <input 
                    onChange={handleChangeConfirmpass}
                    type="password" 
                    id="inputConfirmPassword" 
                    className="form-control" 
                    placeholder="Confirm password"
                    value={confirmpass} 
                    required 
                />
                
                <button className="btn btn-lg btn-info btn-block" type="submit">Sign up</button>
                <p className="mt-5 mb-3 text-muted">Copyright © 2020</p>

            </form>
        </div>
    );
}

export default Signup;
