import React, { useState, useEffect } from "react";
import SideNav from "./SideNav.jsx";
import Profile from "./Profile.jsx";
import MySchedule from "./MySchedule.jsx";
import Rating from "./Rating";
import Comments from "./Comments";
import axios from "../axios";
import { trackPromise } from 'react-promise-tracker';


const currentTime = new Date().getHours();

function Dashboard(props) {
    const [imageId, setImageId] = useState("");
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
    const [calendarURL, setCalendarURL] = useState("");
    // console.log("first render: " + calendarURL);
    

    useEffect(() => {
        const token = localStorage.getItem('usertoken');

        trackPromise(axios().get('/user/userProfile', {
            headers:{
              Authorization: token
            }
        })
        .then (res => {
            if (res.data.tutor === undefined) {
                console.log("LOAD DATA no tutor: " + JSON.stringify(res, null, 2));
                console.log("res.data.tutor: " + res.data.tutor);
                const imageId = res.data.image;
                const fname = res.data.firstName;
                const lname = res.data.lastName;
                const major = res.data.major;
                const faculty = res.data.faculty;
                const year = res.data.year;
                const telegram = res.data.telegram;
                const bio = res.data.biography;
                const qualif = res.data.qualifications;
                const isTutor = res.data.isTutor;
                const calendarURL = res.data.calendarLink;
                setImageId(imageId);
                setFName(fname);
                setLName(lname);
                setMajor(major);
                setFaculty(faculty);
                setYear(year);
                setTelegram(telegram);
                setBiography(bio);
                setQualifications(qualif);
                setIsTutor(isTutor);
                setCalendarURL(calendarURL);
                localStorage.setItem('calendarURL', calendarURL);
                localStorage.setItem('loggedinuser', res.data.userID);
            }
            else {
                console.log("LOAD DATA tutor: " + JSON.stringify(res, null, 2));
                const imageId = res.data.tutor.tutorProfile.image;
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
                const calendarURL = res.data.tutor.tutorProfile.calendarLink;
                setImageId(imageId);
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
                setCalendarURL(calendarURL);
                localStorage.setItem('calendarURL', calendarURL);
                localStorage.setItem('yourRateID', res.data.yourRateID);
                localStorage.setItem('loggedinuser', res.data.tutor.tutorProfile.userID);
                localStorage.setItem('userid', res.data.tutor.tutorProfile.userID);
                // console.log("loggedinuser 1: " + localStorage.getItem('loggedinuser'));
                // console.log("userid 1: " + localStorage.getItem('userid'));
            }
        })
        .catch (err => {
            console.log(err);
        }));
    }, []);

    return (<div className="dashboard container-fluid">
        <div className="row">
            <SideNav />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">    
                {currentTime < 12 && <h3 className="welcome-title">Good morning, <strong>{fName}</strong>! </h3>}
                {currentTime >= 12 && currentTime < 18 ? <h3 className="welcome-title">Good afternoon, <strong>{fName}</strong>! </h3> : null}
                {currentTime >= 18 && <h3 className="welcome-title">Good evening, <strong>{fName}</strong>! </h3>}
                
                
                <Profile
                    imageId={imageId}
                    fName={fName}
                    lName={lName}
                    major={major}
                    faculty={faculty}
                    year={year}
                    telegram={telegram}
                    bio={bio}
                    modsTaught={modsTaught}
                    qualif={qualif}
                    isTutor={isTutor}
                />

                <MySchedule calendarURL={calendarURL} setCalendarURL={setCalendarURL}/>

                {isTutor === true ? <Rating rate={rate} aveRate={aveRate} rateList={rateList}/> : null}
                {isTutor === true ? <Comments commentList={commentList}/> : null}

            </main>
        </div>
    </div>);
}

export default Dashboard;