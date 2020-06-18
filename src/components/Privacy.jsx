import React from "react";

function Privacy() {
    return (<form className="editprofile">
    <h5>Manage My Account</h5>
    <div className="form-group">
        <label for="signupForm">Email Address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" required />
    </div>
    <div className="form-group">
        <label for="signupForm">Old Password</label> 
        <input type="password" className="form-control" id="passwordInput" required />
    </div>
    <div className="form-group">
        <label for="signupForm">New Password</label> 
        <input type="password" className="form-control" id="passwordInput" required />
    </div>
    <div>
        <label>Authentication</label>
    </div>
    <button type="submit" className="btn btn-info save-btn">Save Changes</button>
    </form>);
}

export default Privacy;