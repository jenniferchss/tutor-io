import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Testimony() { return (
    <Carousel id="testimonies">
        <Carousel.Item>
        <img className="d-block pict" src={require("../images/testimony@2x.png")} width="200px" height="200" alt="first testimony"/>

            <Carousel.Caption>
            <h3>Testimony</h3>
            <p>tutor.io has helped several students in improving their academic grades by finding them the suitable and professional tutor. 
These are some of their experiences and stories in using tutor.io</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block pict" src={require("../images/robin@2x.png")} width="200px" height="200" alt="first testimony"/>

            <Carousel.Caption className="caption">
            <h3>Christopher Robin Ong</h3>
            <p>I used tutor.io to find myself a tutor for some of CS modules. Tutor.io helps me to find a suitable tutor
that matches with my schedule. Thankyou tutor.io.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block pict" src={require("../images/chessa@2x.png")} width="200px" height="200" alt="second testimony"/>

            <Carousel.Caption className="caption">
            <h3>Jennifer Chessa</h3>
            <p>I used tutor.io to find myself a tutor for some of CS modules. Tutor.io helps me to find a suitable tutor
that matches with my schedule. Thankyou tutor.io.</p>
            </Carousel.Caption>
        </Carousel.Item>
</Carousel>);
}

export default Testimony;