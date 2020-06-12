import React from "react";
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
                <li class="nav-item active">
                    <a class="nav-link" href="/#white-comp">About Us<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#howitworks">How It Works</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Modules
                    </a>
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
                <li class="nav-item">
                    <a class="nav-link" href="/#testimonies">Testimony</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/signin">Sign In</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/signup">Join Us</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navibar;
