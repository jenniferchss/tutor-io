import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function Whytutee() {
return (<div className="white-container" id="howitworks">
    
    <h4 className="description">
        <span class="title">tutor.io</span> is a trusted and helpful website that helps NUS students in finding the best tutor for effective peer teaching.
    </h4>
    <h3 className="why">
        Why should you join as a <span class="tutee">Tutee</span>?
    </h3>

    <CardDeck>
        <Card className="find">
            <Card.Img variant="top" src={require("../images/findyourtutor@2x.png")} />
            <Card.Body>
            <Card.Title className="subtitle">Find Your Tutor</Card.Title>
            <Card.Text>
                Click on the ‘Modules’ tab to find the modules you need a help in and you will be spoilt with choices of qualified tutors who are teaching the module you selected.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className="schedule">
            <Card.Img variant="top" src={require("../images/schedule@2x.png")} />
            <Card.Body>
            <Card.Title className="subtitle">Contact & Schedule</Card.Title>
            <Card.Text>
                After you have chosen the tutor of your choice, head up to his/her profile and contact him/her via telegram. You will then be able to negotiate the fee and make an appointment directly.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className="rate">
            <Card.Img variant="top" src={require("../images/rate@2x.png")} />
            <Card.Body>
            <Card.Title className="subtitle">Rate & Give Feedbacks</Card.Title>
            <Card.Text>
                Once you are done with your consultations and lessons, you will be able to give feedbacks and rate your tutor accordingly!
            </Card.Text>
            </Card.Body>
        </Card>
    </CardDeck>
</div>
);
}

export default Whytutee;