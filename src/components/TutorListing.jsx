import React, { useState, useEffect } from "react";
import axios from "../axios";
import SOCTab from "./SOCTab";
import FASSTab from "./FASSTab";
import BizTab from "./BizTab";
import ScienceTab from "./ScienceTab";
import SDETab from "./SDETab";
import EnginTab from "./EnginTab";


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
            console.log(tutorList)
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

    

    return (<div className="editprofile">
    <h5 className="tutorlist-title">Find the right <strong className="highlighted">tutor</strong> for you!</h5>

    {/* {(() => {
        switch (localStorage.getItem('facreq')) {
            case 'School Of Computing': return <SOCTab />;
            case 'Arts & Social Sciences': return <FASSTab />;
            case 'School Of Business': return <BizTab />;
            case 'Engineering': return <EnginTab />;
            case 
            case 'School Of Design And Environment': return <SDETab />;
            default:
                return null;
        }
    })} */}
    {selectTab(localStorage.getItem('facreq'))}
    
    <div class="card tab-content">

        <h4 className="tutlist-modcode">Module: <strong className="modcode-title">{localStorage.getItem('request')}</strong></h4>

        {/* <div className="card mb-3 search-card">
            <div className="row no-gutters">
                <div className="col-md-6">
                    <h3 className="search-title">FACULTY</h3>
                    <li class="nav-item dropdown">
                        <h3 class="nav-link dropdown-toggle fac-drop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose Faculty</h3>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Faculty of Arts and Social Sciences</a>
                            <a class="dropdown-item" href="#">Faculty of Engineering</a>
                            <a class="dropdown-item" href="#">Faculty of Law</a>
                            <a class="dropdown-item" href="#">Faculty of Science</a>
                            <a class="dropdown-item" href="#">School of Business</a>
                            <a class="dropdown-item" href="#">School of Computing</a>
                            <a class="dropdown-item" href="#">School of Design and Environment</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Faculty of Dentistry</a>
                            <a class="dropdown-item" href="#">DUKE NUS Medical School</a>
                        </div>
                    </li>
                </div>
                <div className="col-md-6">
                    <h3 className="search-title">MODULE CODE</h3>
                    <li class="nav-item dropdown">
                        <h3 class="nav-link dropdown-toggle fac-drop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose Module</h3>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">CS1010</a>
                            <a class="dropdown-item" href="#">CS1010C</a>
                            <a class="dropdown-item" href="#">CS1010S</a>
                            <a class="dropdown-item" href="#">CS1231</a>
                            <a class="dropdown-item" href="#">CS2030</a>
                            <a class="dropdown-item" href="#">CS2040</a>
                        </div>
                    </li>
                </div>
            </div>
        </div> */}
        {tutorList.map(tutor => {
        return (
            <div className="card mb-3 tutor-card">
                <div className="row no-gutters">
                <div className="col-md-3">
                <img src={require("../images/profile@2x.png")} className="card-img tutor-img" alt="tutor-img" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h4 class="tutor-name">{tutor[0].firstName} {tutor[0].lastName}</h4>
                        <h7 class="major">{tutor[0].major}</h7>
                        <p>{tutor[0].biography}</p>
                        <p className="text-muted">Teaching: CS1231</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className="pricetag">$10 - $20</h3>
                    <p className="text-muted">per hour</p>
                </div>
            </div>   
        </div>)
        })}

        <div className="card mb-3 tutor-card">
            
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
            </div>
            
        </div>

        </div>
    </div>)
}

export default TutorListing;