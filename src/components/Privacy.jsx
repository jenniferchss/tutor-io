import React from "react";
import SideNav from "./SideNav";

function Privacy() {
    return (<form className="editprofile">
        <div className="row">
            <SideNav />
            
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <h5 className="editprofile-title">Manage My Account</h5>
                <div className="form-group">
                    <label for="signupForm">Username</label>
                    <input type="text" className="form-control" id="inputUsername" required />
                </div>
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
            </main>
        </div>
    </form>);
}

export default Privacy;