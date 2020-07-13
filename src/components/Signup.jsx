import React, { useState } from "react";
import axios from "../axios";
import { useHistory } from "react-router-dom";

function Signup(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailaddress, setEmailaddress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpass, setConfirmpass] = useState("")
    const history = useHistory();
    

    function handleChangeFName (event) {
        const firstName = event.target.value;
        setFirstName(firstName);
    }

    function handleChangeLName (event) {
        const lastName = event.target.value;
        setLastName(lastName);
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
            firstName: firstName,
            lastName: lastName,
            email: emailaddress,
            password: password
        })
        .then(function(res) {
            localStorage.clear();
            localStorage.setItem('useremail', emailaddress);
            history.push("/verifyemail");
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
                
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputFName" className="sr-only username-input">First Name</label>
                        <input 
                            onChange={handleChangeFName}
                            type="firstName" 
                            id="inputFName" 
                            className="form-control" 
                            placeholder="First name" 
                            value={firstName}
                            required autoFocus
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputLName" className="sr-only username-input">Last Name</label>
                        <input 
                            onChange={handleChangeLName}
                            type="lastName" 
                            id="inputLName" 
                            className="form-control" 
                            placeholder="Last name" 
                            value={lastName}
                            required
                        />
                    </div>
                </div>

                <label htmlFor="inputEmail" className="sr-only email-input">Email address</label>
                <input 
                    onChange={handleChangeEmail}
                    type="email" 
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Email address" 
                    value={emailaddress}
                    required 
                />
                
                <label htmlFor="inputPassword" className="sr-only password-input">Password</label>
                <input 
                    onChange={handleChangePassword}
                    type="password" 
                    id="inputPassword" 
                    className="form-control" 
                    placeholder="Password (min 6 characters)" 
                    value={password}
                    required 
                />
                
                <label htmlFor="inputPassword" className="sr-only password-input">Confirm Password</label>
                <input 
                    onChange={handleChangeConfirmpass}
                    type="password" 
                    id="inputConfirmPassword" 
                    className="form-control" 
                    placeholder="Confirm password"
                    value={confirmpass} 
                    required 
                />
                
                <button className="btn btn-lg btn-info btn-block signin-btn" type="submit">Sign up</button>
                <small className="link-sign text-center">Already have an account? <a className="no-account" href="/signin">Sign in</a></small>

                <p className="mt-5 mb-3 text-muted">Copyright © 2020</p>

            </form>
        </div>
    );
}

export default Signup;
