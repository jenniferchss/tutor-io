import React, { useState, useEffect } from "react";

function Profile(props) {
    
    return (<div className="profile card">
        <h4 className="profile-title card-header">PROFILE</h4>
        <div class="row card-body">
            <div class="col-6 col-md-4">
                <img src={require("../images/profile@2x.png")} className="profpict" alt="profpict" />
            </div>
            <div class="col-sm-6 col-md-8 right-profile">
                    <h3 className="name-dashboard">Fname Lname{props.firstName}{props.lastName}</h3>
                    <img src={require("../images/correct.svg")} className="smallIcon" alt="smallIcon"></img>
                    <h5 className="smallInfo text-muted">Tutor/Tutee</h5>
                    <img src={require("../images/study.svg")} className="smallIcon" alt="smallIcon"></img>
                    <h5 className="smallInfo text-muted">Major, Faculty{props.major}{props.faculty}</h5>
                    <img src={require("../images/mortarboard.svg")} className="smallIcon" alt="smallIcon"></img>
                    <h5 className="smallInfo text-muted">Year</h5>
                    <img src={require("../images/telegram.svg")} className="smallIcon" alt="smallIcon"></img>
                    <h5 className="smallInfo text-muted">@teleHandle {props.telegram}</h5>
                    <p className="biography">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra 
                    adipiscing at in tellus integer feugiat. Condimentum mattis pellentesque id nibh 
                    tortor id aliquet lectus proin. Gravida in fermentum et sollicitudin ac orci. Vel 
                    risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Curabitur 
                    gravida arcu ac tortor dignissim convallis. Commodo ullamcorper a lacus vestibulum 
                    sed. Id eu nisl nunc mi ipsum. Purus sit amet luctus venenatis lectus magna fringilla. 
                    Amet justo donec enim diam vulputate ut pharetra.
                    </p>
            </div>
        </div>
        
        
    </div>);
}

export default Profile;