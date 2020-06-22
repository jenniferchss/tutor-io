import React from "react";
//import SubNavbar from "./SubNavbar.jsx";
import SideNav from "./SideNav.jsx";
import Profile from "./Profile.jsx";
import MySchedule from "./MySchedule.jsx";

const currentTime = new Date().getHours();


function Dashboard() {
    return (<div className="dashboard container-fluid">
        <div className="row">
            <SideNav />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">    
                {currentTime < 12 && <h3 className="welcome-title">Good morning, Jennifer! </h3>}
                {currentTime > 12 && currentTime < 18 ? <h3 className="welcome-title">Good afternoon, Jennifer! </h3> : null}
                {currentTime > 18 && <h3 className="welcome-title">Good evening, Jennifer! </h3>}
                
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