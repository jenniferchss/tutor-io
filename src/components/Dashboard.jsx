import React, { useState, useEffect } from "react";
//import SubNavbar from "./SubNavbar.jsx";
import SideNav from "./SideNav.jsx";
import Profile from "./Profile.jsx";
import MySchedule from "./MySchedule.jsx";
import axios from "../axios";


const currentTime = new Date().getHours();

function Dashboard(props) {
    const [name, setName] = useState("")

    function handleChangeName() {
        axios().get("/user/me", { withCredentials: true })
        .then(res =>{
            setName(res.data.username)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        handleChangeName();
    })

    return (<div className="dashboard container-fluid">
        <div className="row">
            <SideNav />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">    
                {currentTime < 12 && <h3 className="welcome-title">Good morning, {name}! </h3>}
                {currentTime > 12 && currentTime < 18 ? <h3 className="welcome-title">Good afternoon, {name}! </h3> : null}
                {currentTime > 18 && <h3 className="welcome-title">Good evening, {name}! </h3>}
                <h1>Status: {props.isLoggedIn} </h1>
                
                <div className="row">
                    <div className="col-lg-6 col-left">
                        <Profile/>
                    </div>

                    <div className="col-lg-6 col-right">
                        <MySchedule/>
                    </div>

                </div>
            </main>
        </div>
    </div>);
}

export default Dashboard;