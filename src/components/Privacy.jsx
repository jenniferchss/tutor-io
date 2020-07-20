import React, { useState } from "react";
import SideNav from "./SideNav";
import axios from "../axios";
import Alert from "./Alert";
import GreenAlert from "./GreenAlert";

function Privacy() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [alert, setAlert] = useState("");
    const [message, setMessage] = useState("");

    function handleChangeOldPw(event) {
        const oldpw = event.target.value;
        setOldPassword(oldpw);
    }

    function handleChangeNewPw(event) {
        const newpw = event.target.value;
        setNewPassword(newpw);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem('usertoken');
        if (newPassword.length < 6) {
            setAlert('Password must be at least 6 characters long!');
        }
        else {
            axios().put('/user/changePassword', {
                oldPassword: oldPassword,
                newPassword: newPassword,
                headers: {
                    Authorization: token
                }
            })
            .then( res => {
                console.log(res);
                setMessage("Password is successfully changed!");
            })
            .catch( err => {
                console.log(err);
                if (err.response.data.message === "Incorrect Password !") {
                    setAlert("Incorrect old password!");
                }
            })
        }
    }
    
    return (<form onSubmit={handleSubmit} className="editprofile">
        <div className="row">
            <SideNav />
            
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <h3 className="page-title">Manage My Account</h3>
                <hr/>
                

                {/* <h5 className="module-code manage-title">Change Email Address</h5>
                <small className="deactivate-sm">A verification link will be sent to the new email
                once you click 'Save New Email'. The new email will be updated once you have clicked
                the verification link.</small>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" required />
                </div>
                <button type="submit" className="btn btn-info btn-sm">Save New Email</button>
                
                <hr/> */}
                {alert ? <Alert msg={alert}/> : null}
                {message ? <GreenAlert msg={message}/> : null}
                <h5 className="module-code manage-title">Change Password</h5>
                <div className="form-group">
                    <label id="password-title" htmlFor="signupForm">Old Password</label> 
                    <input 
                        type="password" 
                        className="form-control" 
                        id="passwordInput" 
                        onChange={handleChangeOldPw}
                        value={oldPassword}
                        required />
                </div>
                <div className="form-group">
                    <label id="password-title" htmlFor="signupForm">New Password</label> 
                    <input 
                        type="password" 
                        className="form-control" 
                        id="passwordInput" 
                        onChange={handleChangeNewPw}
                        value={newPassword}
                        required />
                </div>
                
                <button type="submit" className="btn btn-info btn-sm savepw-btn">Save New Password</button>
            </main>
        </div>
    </form>);
}

export default Privacy;