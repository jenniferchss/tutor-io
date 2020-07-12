import React from "react";
import SideNav from "./SideNav";

function Privacy() {
    return (<form className="editprofile">
        <div className="row">
            <SideNav />
            
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <h3 className="page-title">Manage My Account</h3>
                <hr/>
                {/* <div className="form-group">
                    <label for="signupForm">Username</label>
                    <input type="text" className="form-control" id="inputUsername" required />
                </div>
                
                <hr/> */}

                <h5 className="module-code manage-title">Change Email Address</h5>
                <small className="deactivate-sm">A verification link will be sent to the new email
                once you click 'Save New Email'. The new email will be updated once you have clicked
                the verification link.</small>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" required />
                </div>
                <button type="submit" className="btn btn-info btn-sm">Save New Email</button>
                
                <hr/>

                <h5 className="module-code manage-title">Change Password</h5>
                <div className="form-group">
                    <label id="password-title" htmlFor="signupForm">Old Password</label> 
                    <input type="password" className="form-control" id="passwordInput" required />
                </div>
                <div className="form-group">
                    <label id="password-title" htmlFor="signupForm">New Password</label> 
                    <input type="password" className="form-control" id="passwordInput" required />
                </div>
                {/* <div>
                    <label>Authentication</label>
                </div> */}
                <button type="submit" className="btn btn-info btn-sm">Save New Password</button>
            </main>
        </div>
    </form>);
}

export default Privacy;