import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import Comments from "./Comments";
import axios from "../axios";

function TutorProfile() {
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [major, setMajor] = useState("")
    const [faculty, setFaculty] = useState("")
    const [year, setYear] = useState("")
    const [telegram, setTelegram] = useState("")
    const [bio, setBiography] = useState("")
    const [qualif, setQualifications] = useState("")
    
    useEffect(() => {
        const userid = localStorage.getItem('userid');
        console.log("userid: " + userid);

        axios().get('/user/tutorProfile/'+userid)
        .then (res => {
            // const fname = res.data[0].firstName;
            // const lname = res.data[0].lastName;
            // const major = res.data[0].major;
            // const faculty = res.data[0].faculty;
            // const year = res.data[0].year;
            // const telegram = res.data[0].telegram;
            // const bio = res.data[0].biography;
            // const qualif = res.data[0].qualifications;

            // setFName(fname);
            // setLName(lname);
            // setMajor(major);
            // setFaculty(faculty);
            // setYear(year);
            // setTelegram(telegram);
            // setBiography(bio);
            // setQualifications(qualif);
            
        })
        .catch (err => {
            console.log(err);
        })
    }, []);

    return (<div className="tutor-profile">
    <div className="row">
        <SideNav />

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 mods-pg profile-pg">
            
        <div className="profile card">
        <h4 className="profile-title card-header">PROFILE</h4>
        <div class="row card-body">
            <div class="col-6 col-md-4 avatar-col">
                <img src={require("../images/profile@2x.png")} className="profpict" alt="profpict" />
            </div>
            <div class="col-sm-6 col-md-8 right-profile">
                    <h3 className="name-dashboard">{fName} {lName}</h3>
                    <div className="info-row">
                    <img src={require("../images/correct.svg")} className="smallIcon" alt="smallIcon"></img>
                    <h5 className="smallInfo text-muted">
                        Tutor/Tutee
                    </h5>
                    <img src={require("../images/study.svg")} className="smallIcon" alt="smallIcon"></img>
                    <h5 className="smallInfo text-muted">{major}, {faculty}</h5>
                    <img src={require("../images/mortarboard.svg")} className="smallIcon" alt="smallIcon"></img>
                    <h5 className="smallInfo text-muted">Year {year}</h5>
                    <img src={require("../images/telegram.svg")} className="smallIcon" alt="smallIcon"></img>
                    <h5 className="smallInfo text-muted">{telegram}</h5>
                    </div>
                    <hr />
                    <h6 className="profile-header">Biography</h6>
                    <p className="biography">{bio}</p>
                    <hr />
                    <h6 className="profile-header">Qualifications</h6>
                    <p className="biography"> {qualif}</p>
            </div>
        </div>
        </div>

            <Comments/>
        
        </main>
    </div>
</div>);
}

export default TutorProfile;