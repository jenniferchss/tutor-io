import React, { useState } from "react";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png"; // ES6 way to import images (lazy loading)

//import Form from "react-bootstrap/Form";
//import FormControl from "react-bootstrap/FormControl";
//import Button from "react-bootstrap/Button";
//import logo from './images/logo.png';
//import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';


function Navibar() {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(prevValue => {
            return !prevValue;
        });
        
    }

return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <a className="navbar-brand" href="/">
            <img src={logo} width="120" alt="tutorio-logo" loading="lazy" />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li onClick={handleClick} className="nav-item beforelog-item active">
                    <a className="nav-link beforelog-link" href="/#white-comp">About Us<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item beforelog-item">
                    <a className="nav-link beforelog-link" href="/#howitworks">How It Works</a>
                </li>
                <li className="nav-item beforelog-item dropdown">
                    <a className="nav-link beforelog-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Modules
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Faculty of Arts and Social Sciences</a>
                        <a className="dropdown-item" href="#">Faculty of Engineering</a>
                        <a className="dropdown-item" href="#">Faculty of Law</a>
                        <a className="dropdown-item" href="#">Faculty of Science</a>
                        <a className="dropdown-item" href="#">School of Business</a>
                        <a className="dropdown-item" href="#">School of Computing</a>
                        <a className="dropdown-item" href="#">School of Design and Environment</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Faculty of Dentistry</a>
                        <a className="dropdown-item" href="#">DUKE NUS Medical School</a>
                    </div>
                </li>
                <li className="nav-item beforelog-item">
                    <a className="nav-link beforelog-link" href="/#testimonies">Testimony</a>
                </li>
                <li className="nav-item beforelog-item">
                    <a className="nav-link beforelog-link" href="/signin">Sign In</a>
                </li>
                <li className="nav-item beforelog-item">
                    <a className="nav-link beforelog-link" href="/signup">Join Us</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navibar;
