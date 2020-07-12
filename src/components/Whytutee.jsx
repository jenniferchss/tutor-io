import React from "react";
//import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";

function Whytutee() {
return (<div className="white-container" id="howitworks">
    
    <h4 className="description">
        <span className="title">tutor.io</span> is a trusted and helpful website that helps NUS students in finding the best tutor for effective peer teaching.
    </h4>
    <h3 className="why">
        Why should you join as a <span className="tutee">Tutee</span>?
    </h3>


    <div className="card-deck">
        <div className="card card-main find">
            <img src={require("../images/findyourtutor@2x.png")} className="card-img-top" alt="findyourtutor" />
            
            <div className="card-body">
            <h5 className="card-title subtitle">Find Your Tutor</h5>
            <p className="card-text">Click on the ‘Modules’ tab to find the modules you need a help in and you will be spoilt with choices of qualified tutors who are teaching the module you selected.</p>
            </div>
            
        </div>

        <div className="card card-main schedule">
            <img src={require("../images/schedule@2x.png")} className="card-img-top" alt="schedule" />
            
            <div className="card-body">
            <h5 className="card-title subtitle">Contact & Schedule</h5>
            <p className="card-text">After you have chosen the tutor of your choice, head up to his/her profile and contact him/her via telegram. You will then be able to negotiate the fee and make an appointment directly.</p>
            </div>
            
        </div>
        <div className="card card-main rate">
            <img src={require("../images/rate@2x.png")} className="card-img-top" alt="rate" />
            
            <div className="card-body">
            <h5 className="card-title subtitle">Rate & Give Feedbacks</h5>
            <p className="card-text">Once you are done with your consultations and lessons, you will be able to give feedbacks and rate your tutor accordingly!</p>
            </div>
            
        </div>
    </div>

    
</div>
);
}

export default Whytutee;