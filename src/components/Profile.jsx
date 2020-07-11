import React, { useState, useEffect } from "react";


function Profile(props) {
    
    return (<div className="profile card">
        <h4 className="profile-title card-header">PROFILE</h4>
        <div className="row card-body">
            <div className="col-6 col-md-4 avatar-col">
                <img src={require("../images/profile@2x.png")} className="profpict" alt="profpict" />
            </div>
            <div className="col-sm-6 col-md-8 right-profile">
                    <h3 className="name-dashboard">{props.fName} {props.lName}</h3>
                    <div className="info-row">
                    <img src={require("../images/correct.svg")} className="smallIcon" alt="smallIcon"></img>
                    {props.isTutor === true ? <h5 className="smallInfo text-muted">
                        Tutor/Tutee
                    </h5> : <h5 className="smallInfo text-muted">
                        Tutee
                    </h5>}
                    <img src={require("../images/study.svg")} className="smallIcon" alt="smallIcon"></img>
                    <h5 className="smallInfo text-muted">{props.major}, {props.faculty}</h5>
                    <img src={require("../images/mortarboard.svg")} className="smallIcon" alt="smallIcon"></img>
                    <h5 className="smallInfo text-muted">Year {props.year}</h5>
                    <img src={require("../images/telegram.svg")} className="smallIcon" alt="smallIcon"></img>
                    <h5 className="smallInfo text-muted">{props.telegram}</h5>
                    </div>
                    <hr />
                    <h6 className="profile-header">Biography</h6>
                    <p className="biography">{props.bio}</p>
                    <hr />
                    {props.isTutor === true ? <div>
                        <h6 className="profile-header">Modules Taught</h6>
                        <p className="biography">{props.modsTaught.map(mod => {
                            return (<li key={mod}>{mod}</li>
                            )
                        })}</p>
                        <hr />
                    </div> : null}
                    <h6 className="profile-header">Qualifications</h6>
                    <p className="biography"> {props.qualif}</p>
            </div>
        </div>
        
        
    </div>);
}

export default Profile;