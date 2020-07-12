import React, { useState, useEffect } from "react";
import axios from "../axios";
import SOCTab from "./SOCTab";
import FASSTab from "./FASSTab";
import BizTab from "./BizTab";
import ScienceTab from "./ScienceTab";
import SDETab from "./SDETab";
import EnginTab from "./EnginTab";
import SideNav from "./SideNav";


function TutorListing() {
    const [tutorList, setTutorList] = useState([])

    useEffect(() => {
        const moduleCode = localStorage.getItem('request');

        axios().get('/user/findSpecificTutor/'+moduleCode)
        // , {
        //     params: moduleCode
        // })
        .then (res => {
            console.log("LOAD PROFILES: " + JSON.stringify(res, null, 2));
            console.log(res.data)
            setTutorList(res.data);
            // console.log(tutorList)
        })
        .catch (err => {
            console.log(err);
        })
    }, []);
    
    function selectTab(item) {
        if (item === 'School Of Computing') {
            return <SOCTab />;
        }
        if (item === 'Arts & Social Sciences') {
            return <FASSTab />;
        }
        if (item === 'School Of Business') {
            return <BizTab />;
        }
        if (item === 'Engineering') {
            return <EnginTab />;
        }
        if (item === 'Science') {
            return <ScienceTab />;
        }
        if (item === 'School Of Design And Environment') {
            return <SDETab />;
        }
    }

    function handleClick(userid) {
        localStorage.setItem('userid', userid);
        console.log('saved userid: ' + localStorage.getItem('userid'));
    }

    

    return (<div className="tutor-listing">
    <div className="row">
        <SideNav />

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 mods-pg">
            <div className="editprofile">
    <h5 className="tutorlist-title">Find the right <strong className="highlighted">tutor</strong> for you!</h5>

    {selectTab(localStorage.getItem('facreq'))}
    
    <div className="card tab-content">

        <h4 className="tutlist-modcode">Module: <strong className="modcode-title">{localStorage.getItem('request')}</strong></h4>

        {tutorList.map(tutor => {
        return (
            <div className="card mb-3 tutor-card" key={tutor}>
                <div className="row no-gutters">
                <div className="col-md-3">
                <img src={require("../images/profile@2x.png")} className="card-img tutor-img" alt="tutor-img" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h4 className="tutor-name">
                        <a onClick={() => handleClick(tutor.tutorProfile.userID)} href="/profile">{tutor.tutorProfile.firstName} {tutor.tutorProfile.lastName}</a>
                        </h4>
                        <h6 className="major">{tutor.tutorProfile.major}</h6>
                        {tutor.tutorProfile.biography.length > 100 ? <p>{tutor.tutorProfile.biography.slice(0,100)} ...</p>
                        : <p>{tutor.tutorProfile.biography}</p>}
                        <p className="text-muted">Teaching: {tutor.taughtModules.map((mod) => {return mod + ", "})}</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className="pricetag">${tutor.fee}</h3>
                    <p className="text-muted">per hour</p>
                </div>
            </div>   
        </div>)
        })}

        {/* <div className="card mb-3 tutor-card">
            
                <div className="row no-gutters">
                <div className="col-md-3">
                <img src={require("../images/profile@2x.png")} className="card-img tutor-img" alt="tutor-img" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h4 class="tutor-name">Christopher Robin</h4>
                        <h7 class="major">Computer Science</h7>
                        <p>My name is Robin and I love playing games!</p>
                        <p className="text-muted">Teaching: CS1231, CS2010, CS2030, CS2040</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className="pricetag">$20 - $25</h3>
                    <p className="text-muted">per hour</p>
                </div>
            </div>
            
        </div>

        <div className="card mb-3 tutor-card">
            
                <div className="row no-gutters">
                <div className="col-md-3">
                <img src={require("../images/profile@2x.png")} className="card-img tutor-img" alt="tutor-img" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h4 class="tutor-name">Yap Li Shuen</h4>
                        <h7 class="major">Data Science & Analytics</h7>
                        <p>Hi! I really love cooking and teaching others :) </p>
                        <p className="text-muted">Teaching: CS1231, MA1101R</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className="pricetag">Free</h3>
                    <p className="text-muted">per hour</p>
                </div>
            </div>
            
        </div>

        <div className="card mb-3 tutor-card">
            
                <div className="row no-gutters">
                <div className="col-md-3">
                <img src={require("../images/profile@2x.png")} className="card-img tutor-img" alt="tutor-img" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h4 class="tutor-name">Edwin Zhang</h4>
                        <h7 class="major">Business Analytics</h7>
                        <p>Hi! You can hit me up anytime for questions related to modules I'm teaching!</p>
                        <p className="text-muted">Teaching: CS1231, MA1101R, CS2030, ...</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className="pricetag">$15 - $25</h3>
                    <p className="text-muted">per hour</p>
                </div>
            </div> */}
            
        {/* </div> */}

        </div>
    </div>
    </main>
    </div>
    </div>)
}

export default TutorListing;