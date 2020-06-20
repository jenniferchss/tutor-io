import React from "react";

function Profile() {
    return (<div className="profile">
        <h5>Profile</h5>
        <div class="row no-gutters">
            <div class="col-6 col-md-4">
                <img src={require("../images/profile@2x.png")} className="profpict" alt="profpict" />
            </div>
            <div class="col-sm-6 col-md-8">
                <ul className="list-title">
                    <li>Name:</li>
                    <li>Year:</li>
                    <li>Major, Faculty:</li>
                    <li>Telegram:</li>
                    <li>Registered as:</li>
                </ul>
            </div>
        </div>
        
        
    </div>);
}

export default Profile;