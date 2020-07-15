import React, { useState } from "react";
import axios from "../axios";

function UpdatePassword(props) {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const token = props.match.params.token;

    function handleChangeNewPw(event) {
        const newPw = event.target.value;
        setNewPassword(newPw);
    }

    function handleChangeConfirmPw(event) {
        const confirmPw = event.target.value;
        setConfirmPassword(confirmPw);
    }

    function handleChangePw() {
        axios().post('/user/updateForgotPassword', {
            token : token,
            newPassword: newPassword
        })
        .then (res => {
            console.log(res);
            
        })
        .catch (err => {
            console.log(err);
        })
    }

    return (<div className="verify-pg">
    
    <div className="card text-center failed-verify">
       <div className="card-header">
           Change Password
       </div>
       <div className="card-body">

           <h5 className="card-title pls-verify-title">Reset Your Password</h5>

           <p className="card-text pls-verify-text">Please enter your new password.</p>
           <label>New Password</label>
           <input
                onChange={handleChangeNewPw}
                type="password" 
                className="form-control text-center email-box" 
                id="inputUrOldPw" 
                value={newPassword}
           />
           <label>Confirm New Password</label>
           <input
                onChange={handleChangeConfirmPw}
                type="password" 
                className="form-control text-center email-box" 
                id="inputUrNewPw" 
                value={confirmPassword}
           />
           <a onClick={handleChangePw} href="#" className="btn btn-info">Change Password</a>
       </div>
       
   </div>
</div>)
}

export default UpdatePassword;