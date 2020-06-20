import React from "react";
import SubNavbar from "./SubNavbar.jsx";
import Profile from "./Profile.jsx";
import MySchedule from "./MySchedule.jsx";

function Dashboard() {
    return (<div className="dashboard">
        <SubNavbar />
        <h3 className="welcomeback">Welcome back, #name#! </h3>
        <div className="row">
            <div className="col-lg-6">
                <Profile/>
            </div>

            <div className="col-lg-6">
                <MySchedule/>
            </div>

        </div>
    </div>);
}

export default Dashboard;