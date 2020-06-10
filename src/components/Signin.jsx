import React from "react";

function Signin() {
    return (<div className="joinus-page">
        <h1 className="joinus-title">Welcome!</h1>

        <form className="loginform">
            <div className="form-group">
                <input type="email" className="form-control" placeholder="email address" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="password" />
            </div>
            
            <button type="submit" className="btn btn-info login">log in</button>
        </form>
    </div>);
}

export default Signin;