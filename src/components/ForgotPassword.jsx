import React, { useState } from "react";
import axios from "../axios";

function ForgotPassword() {

    const [email, setEmail] = useState("")

    function handleChangeEmail(event) {
        const email = event.target.value;
        setEmail(email);
    }

    function handleSend() {
        axios().post('/user/resendEmail', {
            email: email
        })
        .then (res => {
            alert('Password reset link has been sent to ' + email);
        })
        .catch(function(err) {
            console.error(err);
            alert('Error!')
        });
    }


    return (<div className="verify-pg">
    
    <div className="card text-center failed-verify">
       <div className="card-header">
           Forgot Password
       </div>
       <div className="card-body">

           <h5 className="card-title pls-verify-title">Reset Your Password</h5>

           <p className="card-text pls-verify-text">Please enter your email address and click 
           on the link sent to reset your password.</p>
           <input
                onChange={handleChangeEmail}
                type="text" 
                className="form-control text-center email-box" 
                id="inputUrEmail" 
                value={email}
           />
           <a onClick={handleSend} href="#" className="btn btn-info">Send Link</a>
       </div>
       
   </div>
</div>)
}

export default ForgotPassword;