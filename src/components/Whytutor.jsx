import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function Whytutor() {
return (<div className="blue-container">
    <h3 className="why">
        Why should you join as a <span class="tutor">Tutor</span>?
    </h3>

    <CardDeck>
        <Card>
            <Card.Img variant="top" src={require("../images/signup@2x.png")} />
            <Card.Body>
            <Card.Title className="tutorcard" >Sign Up & Help</Card.Title>
            <Card.Text>
                Did you do exceptionally well in certain modules? Sign up as a tutor and help your fellow NUS friends in those modules that you are excelling in!
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={require("../images/business@2x.png")} />
            <Card.Body>
            <Card.Title className="tutorcard">Build Up Your Portfolio</Card.Title>
            <Card.Text>
                You can build your portfolio by filling in your qualifications such as grades and modules that you have taken. Don’t forget to put up your telegram handle so that prospective students can contact you.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={require("../images/earn@2x.png")} />
            <Card.Body>
            <Card.Title className="tutorcard">Earn Extra Pocket Money</Card.Title>
            <Card.Text>
                You can earn extra pocket money easily just by helping your fellow university friends in studying for their modules!
            </Card.Text>
            </Card.Body>
        </Card>
    </CardDeck>
</div>
);
}

export default Whytutor;