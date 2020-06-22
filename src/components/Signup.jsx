import React from "react";

function Signup() {
    return (<div className="text-center joinus-page" data-gr-c-s-loaded="true">

    <form className="login-form">
        
        <h1 className="joinus-title h3 mb-3 font-weight-normal">Join our Big Family!</h1>
        
        <label for="inputUsername" class="sr-only username-input">Username</label>
        <input type="username" id="inputUsername" class="form-control" placeholder="@username" required autofocus/>

        <label for="inputEmail" class="sr-only email-input">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required />
        
        <label for="inputPassword" class="sr-only password-input">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
        
        <label for="inputPassword" class="sr-only password-input">Confirm Password</label>
        <input type="confirmpassword" id="inputConfirmPassword" class="form-control" placeholder="Confirm Password" required />
        
        <button className="btn btn-lg btn-info btn-block" type="submit">Sign up</button>
        <p class="mt-5 mb-3 text-muted">Copyright © 2020</p>

    </form>
</div>);
}

export default Signup;