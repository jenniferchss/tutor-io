import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Testimony() { return (
    <Carousel>
        <Carousel.Item>
            <Carousel.Caption>
            <h3>Testimony</h3>
            <p>tutor.io has helped several students in improving their academic grades by finding them the suitable and professional tutor. 
These are some of their experiences and stories in using tutor.io</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block robin" src={require("../images/robin@2x.png")} width="100px" height="100" alt="first testimony"/>

            <Carousel.Caption>
            <h3>Christopher Robin Ong</h3>
            <p>I used tutor.io to find myself a tutor for some of CS modules. Tutor.io helps me to find a suitable tutor
that matches with my schedule. Thankyou tutor.io.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block chessa" src={require("../images/chessa@2x.png")} width="100px" height="100" alt="second testimony"/>

            <Carousel.Caption>
            <h3>Jennifer Chessa</h3>
            <p>I used tutor.io to find myself a tutor for some of CS modules. Tutor.io helps me to find a suitable tutor
that matches with my schedule. Thankyou tutor.io.</p>
            </Carousel.Caption>
        </Carousel.Item>
</Carousel>);
}

export default Testimony;