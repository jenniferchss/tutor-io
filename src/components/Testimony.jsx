import React from "react";
//import Carousel from "react-bootstrap/Carousel";

function Testimony() {return(

    <div id="testimonies" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#testimonies" data-slide-to="0" class="active"></li>
            <li data-target="#testimonies" data-slide-to="1"></li>
            <li data-target="#testimonies" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={require("../images/testimony@2x.png")} className="d-block pict" width="150px" height="150" alt="testimonies" />
                <div className="carousel-caption d-md-block">
                    <h3 className="capt-title">Testimony</h3>
                    <p className="capt-text">tutor.io has helped several students in improving their academic grades by finding them the suitable and professional tutor. 
    These are some of their experiences and stories in using tutor.io</p>
                </div>
            </div>

            <div className="carousel-item">
                <img src={require("../images/robin@2x.png")} className="d-block pict" width="200px" height="200" alt="first testimony" />
                <div className="carousel-caption d-md-block">
                    <h3 className="capt-title">Christopher Robin Ong</h3>
                    <p className="capt-text">I used tutor.io to find myself a tutor for some of CS modules. Tutor.io helps me to find a suitable tutor
that matches with my schedule. Thankyou tutor.io.</p>
                </div>
            </div>

            <div className="carousel-item">
                <img src={require("../images/chessa@2x.png")} className="d-block pict" width="200px" height="200" alt="second testimony" />
                <div className="carousel-caption d-md-block">
                    <h3 className="capt-title">Jennifer Chessa</h3>
                    <p className="capt-text">I used tutor.io to find myself a tutor for some of CS modules. Tutor.io helps me to find a suitable tutor
that matches with my schedule. Thankyou tutor.io.</p>
                </div>
            </div>
        </div>

        <a className="carousel-control-prev" href="#testimonies" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#testimonies" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>

    </div>);
}

export default Testimony;