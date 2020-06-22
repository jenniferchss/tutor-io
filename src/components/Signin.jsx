import React from "react";

function Signin() {
    return (<div className="text-center joinus-page" data-gr-c-s-loaded="true">

        <form className="login-form">
            
            <h1 className="joinus-title h3 mb-3 font-weight-normal">Welcome back!</h1>

            <label for="inputEmail" class="sr-only email-input">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" class="sr-only password-input">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
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