import React from "react";
import axios from "../axios";

function VerifyEmail() {

    function handleClick() {
        axios().post('/user/resendEmail', {
            email: localStorage.getItem('useremail')
        })
        .then (res => {
            alert('Verification link has been sent to ' + localStorage.getItem('useremail'));
        })
        .catch(function(err) {
            console.error(err);
            alert('Username / Email is already registered')});
        }


    return (<div className="verify-pg">
         {/* <img className="verify-background" src={require("../images/background-logo-sm.png")} alt="background-img" loading="lazy"></img> */}
         
         <div class="card text-center failed-verify">
            <div class="card-header">
                Email Verification
            </div>
            <div class="card-body">
                <img src={require("../images/mail.png")} className="mail" alt="mail" />

                <h5 class="card-title pls-verify-title">Please Verify Your Email Address</h5>

                <p class="card-text pls-verify-text">A link has been sent to your email.
                Please click on the link to proceed with your registration or click on the link below if you do not receive any links in your inbox.</p>
                <a onClick={handleClick} href="#" className="btn btn-primary">Re-send Verification Link</a>
            </div>
            
        </div>
    </div>)
}

export default VerifyEmail;