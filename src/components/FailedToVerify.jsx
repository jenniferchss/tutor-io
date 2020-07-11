import React from "react";


function FailedToVerify() {
    return (<div className="verify-pg">
         {/* <img className="verify-background" src={require("../images/background-logo-sm.png")} alt="background-img" loading="lazy"></img> */}
         
         <div class="card text-center failed-verify">
            <div class="card-header">
                Failed To Authenticate
            </div>
            <div class="card-body">
                <h5 class="card-title pls-verify-title">Please Verify Your Email Address</h5>
                <p class="card-text pls-verify-text">You need to verify your email address first to continue with your registration.
                Please click on the link sent to your registered email address or click the link below if you do not receive any links in your inbox.</p>
                <a href="#" class="btn btn-primary">Re-send Verification Link</a>
            </div>
            
        </div>
    </div>)
}

export default FailedToVerify;