import React from "react";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {} from '@fortawesome/free-solid-svg-icons';

function Footer() {
return (<div className="footer">

    <div class="grid-container">
    
        <div class="lgrid-container">
            <p className="grid-item footer-item">Home</p>
            <p className="grid-item footer-item">About Us</p>
            <p className="grid-item footer-item">How It Works</p>
            <p className="grid-item footer-item">Modules</p>
            <p className="grid-item footer-item">Testimony</p>
            
        </div>

        <div class="lgrid-container">

            <p className="grid-item footer-info">Our Founders</p>
            <p className="grid-item footer-info">Contact Us</p>
            <p className="grid-item footer-info">   +65 6123 4567</p>
            <p className="grid-item footer-info">   tutorio@gmail.com</p>
            <img></img>

        </div>

        <div>
            <img src={require("../images/big-logo.png")} height="75" alt="logo"></img>
        </div>

    </div>



    <img className="line1" src={require('../images/line@2x.png')} height="170" alt="line"></img>
    <img className="line2" src={require('../images/line@2x.png')} height="170" alt="line"></img>

    

</div>);
}

export default Footer;