import React, { useState, useEffect } from "react";

function Profile(props) {
    
    return (<div className="profile">
        <h5 className="profile-title">PROFILE</h5>
        <div class="row no-gutters">
            <div class="col-6 col-md-4">
                <img src={require("../images/profile@2x.png")} className="profpict" alt="profpict" />
            </div>
            <div class="col-sm-6 col-md-8">
                <ul className="list-title">
                    <li>Name: {props.firstName} {props.lastName}</li>
                    <li>Year:</li>
                    <li>Major, Faculty: {props.major}, {props.faculty}</li>
                    <li>Telegram: {props.telegram}</li>
                    <li>Registered as:</li>
                </ul>
            </div>
        </div>
        
        
    </div>);
}

export default Profile;