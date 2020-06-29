import React, { useState, useEffect } from "react";
import SideNav from "./SideNav.jsx";
import Profile from "./Profile.jsx";
import MySchedule from "./MySchedule.jsx";
import axios from "../axios";


const currentTime = new Date().getHours();

function Dashboard(props) {

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")

    function handleLoad(event) {
        const token = localStorage.getItem('usertoken');

        axios().get('/user/userProfile', {
            headers:{
              Authorization: token
            }
        })
        .then (res => {
            const fname = res.data[0].firstName;
            const lname = res.data[0].lastName;
            // console.log("LOAD DATA: " + JSON.stringify(res, null, 2));
            setFName(fname);
            setLName(lname);
        })
        .catch (err => {
            console.log(err);
        })

    }
    

    return (<div className="dashboard container-fluid">
        {handleLoad()}
        <div className="row">
            <SideNav />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">    
                {currentTime < 12 && <h3 className="welcome-title">Good morning, <strong>{fName}</strong>! </h3>}
                {currentTime > 12 && currentTime < 18 ? <h3 className="welcome-title">Good afternoon, <strong>{fName}</strong>! </h3> : null}
                {currentTime > 18 && <h3 className="welcome-title">Good evening, <strong>{fName}</strong>! </h3>}
                {/* <h5>Status: {props.isLoggedIn} </h5> */}
                {/* <hr /> */}
                
                <Profile/>

                <MySchedule/>

            </main>
        </div>
    </div>);
}

export default Dashboard;