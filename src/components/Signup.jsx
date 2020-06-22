import React, { useState } from "react";
import axios from "axios";

function Signup() {
    const [username, setUsername] = useState("")
    const [emailaddress, setEmailaddress] = useState("")
    const [password, setPassword] = useState("")
    

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

    function handleSubmit(event) {
        axios.post ('http://localhost:5000/user/signup',{
            username: username,
            email: emailaddress,
            password: password
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
        event.preventDefault();
    }
    
    return (<div className="text-center joinus-page" data-gr-c-s-loaded="true">

    <form className="login-form">
        
        <h1 className="joinus-title h3 mb-3 font-weight-normal">Join our Big Family!</h1>
        
        <label for="inputUsername" class="sr-only username-input">Username</label>
        <input 
            onChange={handleChangeUser}
            type="username" 
            id="inputUsername" 
            class="form-control" 
            placeholder="@username" 
            value={username}
            required autofocus
        />

        <label for="inputEmail" class="sr-only email-input">Email address</label>
        <input 
            onChange={handleChangeEmail}
            type="email" 
            id="inputEmail" 
            class="form-control" 
            placeholder="Email address" 
            value={emailaddress}
            required 
        />
        
        <label for="inputPassword" class="sr-only password-input">Password</label>
        <input 
            onChange={handleChangePassword}
            type="password" 
            id="inputPassword" 
            class="form-control" 
            placeholder="Password" 
            value={password}
            required 
        />
        
        <label for="inputPassword" class="sr-only password-input">Confirm Password</label>
        <input 
            type="password" 
            id="inputConfirmPassword" 
            class="form-control" 
            placeholder="Confirm password" 
            required 
        />
        
        <button onSubmit={handleSubmit} className="btn btn-lg btn-info btn-block" type="submit">Sign up</button>
        <p class="mt-5 mb-3 text-muted">Copyright © 2020</p>

    </form>
</div>);
}

export default Signup;