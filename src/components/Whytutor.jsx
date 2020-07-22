import React from "react";
//import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";

function Whytutor() {
return (<div className="blue-container">
    <h3 className="why">
        Why should you join as a <span className="tutor">Tutor</span>?
    </h3>

    <div className="card-deck">
        <div className="card card-main">
            <img src={require("../images/signup@2x.png")} className="card-img-top" alt="signup" />
            
            <div className="card-body">
            <h5 className="card-title tutorcard">Sign Up & Help</h5>
            <p className="card-text why-tutee">Did you do exceptionally well in certain modules? Sign up as a tutor and help your fellow NUS friends in those modules that you are excelling in!</p>
            </div>
            
        </div>

        <div className="card card-main">
            <img src={require("../images/business@2x.png")} className="card-img-top" alt="buildup" />
            
            <div className="card-body">
            <h5 className="card-title tutorcard">Build Up Your Portfolio</h5>
            <p className="card-text why-tutee">You can build your portfolio by filling in your qualifications such as grades and modules that you have taken. Don’t forget to put up your telegram handle so that prospective students can contact you.</p>
            </div>
            
        </div>
        <div className="card card-main">
            <img src={require("../images/earn@2x.png")} className="card-img-top" alt="earnextra" />
            
            <div className="card-body">
            <h5 className="card-title tutorcard">Earn Extra Pocket Money</h5>
            <p className="card-text why-tutee">You can earn extra pocket money easily just by helping your fellow university friends in studying for their modules!</p>
            </div>
            
        </div>
    </div>

</div>
);
}

export default Whytutor;