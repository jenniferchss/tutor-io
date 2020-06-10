import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png"; // ES6 way to import images (lazy loading)

//import Form from "react-bootstrap/Form";
//import FormControl from "react-bootstrap/FormControl";
//import Button from "react-bootstrap/Button";
//import logo from './images/logo.png';
//import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';


function Navibar() {

return (
    <Navbar variant="dark" expand="lg" fixed="top">
        <Navbar.Brand className="navbar-brand" href="./Header.jsx">
            <img src={logo} width="120" alt="tutorio-logo" loading="lazy"/>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav activeKey="/home">
                {/* TODO: Your href should not point to the .jsx file.
                        It should be as simple as href="/hello/#optionalhash" */}
                <Nav.Link href="#white-comp">About Us<span className="sr-only">(current)</span></Nav.Link>
                <Nav.Link href="#howitworks">How It Works</Nav.Link>
                <NavDropdown title="Modules" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Faculty of Arts and Social Sciences</NavDropdown.Item>
                    <NavDropdown.Item href="#">Faculty of Engineering</NavDropdown.Item>
                    <NavDropdown.Item href="#">Faculty of Law</NavDropdown.Item>
                    <NavDropdown.Item href="#">Faculty of Science</NavDropdown.Item>
                    <NavDropdown.Item href="#">School of Business</NavDropdown.Item>
                    <NavDropdown.Item href="#">School of Computing</NavDropdown.Item>
                    <NavDropdown.Item href="#">School of Design and Environment</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Faculty of Dentistry</NavDropdown.Item>
                    <NavDropdown.Item href="#">DUKE NUS Medical School</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#testimonies">Testimony</Nav.Link>
                <Nav.Link href="#signin">Sign In</Nav.Link>
                <Nav.Link href="/signup">Join Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default Navibar;
