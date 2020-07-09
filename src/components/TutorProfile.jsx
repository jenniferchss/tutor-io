import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import Rating from "./Rating";
import Comments from "./Comments";
import axios from "../axios";

function TutorProfile() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [major, setMajor] = useState("");
    const [faculty, setFaculty] = useState("");
    const [year, setYear] = useState("");
    const [telegram, setTelegram] = useState("");
    const [bio, setBiography] = useState("");
    const [modsTaught, setModsTaught] = useState([]);
    const [qualif, setQualifications] = useState("");
    const [rate, setRate] = useState("");
    const [aveRate, setAveRate] = useState("");
    const [rateList, setRateList] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [isTutor, setIsTutor] = useState(false);
    
    useEffect(() => {
        const userid = localStorage.getItem('userid');
        console.log("userid: " + userid);

        axios().get('/user/tutorProfile/'+userid)
        .then (res => {
            const fname = res.data.tutor.tutorProfile.firstName;
            const lname = res.data.tutor.tutorProfile.lastName;
            const major = res.data.tutor.tutorProfile.major;
            const faculty = res.data.tutor.tutorProfile.faculty;
            const year = res.data.tutor.tutorProfile.year;
            const telegram = res.data.tutor.tutorProfile.telegram;
            const bio = res.data.tutor.tutorProfile.biography;
            const modsTaught = res.data.tutor.taughtModules;
            const qualif = res.data.tutor.tutorProfile.qualifications;
            const rate = res.data.yourRate;
            const aveRate = res.data.tutor.totalRating;
            const rateList = res.data.tutor.ratings;
            const comments = res.data.Comments;
            const isTutor = res.data.tutor.tutorProfile.isTutor;
            console.log("LOAD DATA: " + JSON.stringify(res, null, 2));
            setFName(fname);
            setLName(lname);
            setMajor(major);
            setFaculty(faculty);
            setYear(year);
            setTelegram(telegram);
            setBiography(bio);
            setModsTaught(modsTaught);
            setQualifications(qualif);
            setRate(rate);
            setAveRate(aveRate);
            setRateList(rateList);
            setCommentList(comments);
            setIsTutor(isTutor);
            localStorage.setItem('yourRateID', res.data.yourRateID);
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
        <div className="row card-body">
            <div className="col-6 col-md-4 avatar-col">
                <img src={require("../images/profile@2x.png")} className="profpict" alt="profpict" />
            </div>
            <div className="col-sm-6 col-md-8 right-profile">
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
                    {isTutor === true ? <div>
                        <h6 className="profile-header">Modules Taught</h6>
                        <p className="biography">{modsTaught.map(mod => {
                            return (<li key={mod}>{mod}</li>
                            )
                        })}</p>
                        <hr />
                    </div> : null}
                    <h6 className="profile-header">Qualifications</h6>
                    <p className="biography">{qualif}</p>
            </div>
        </div>
        </div>
        
        {isTutor === true ? <Rating rate={rate} aveRate={aveRate} rateList={rateList}/> : null}

        {isTutor === true ? <Comments commentList={commentList}/> : null}
        
        </main>
    </div>
</div>);
}

export default TutorProfile;