import React from "react";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {} from '@fortawesome/free-solid-svg-icons';

function Footer() {
return (<footer className="pt-4 pt-md-5 footer">
    <div className="row">
      
      <div className="col-6 col-md border-right">
        <ul className="list-unstyled text-small">
          <li><a className="footer-item" href="/">Home</a></li>
          <li><a className="footer-item" href="/#white-comp">About Us</a></li>
          <li><a className="footer-item" href="/#howitworks">How It Works</a></li>
          <li><a className="footer-item" href="#">Modules</a></li>
          <li><a className="footer-item" href="/#testimonies">Testimony</a></li>
        </ul>
      </div>

      <div className="col-6 col-md border-right">
        <ul className="list-unstyled text-small">
          {/* <li className="footer-info">Our Founders</li> */}
          <li className="footer-info">Contact Us :</li>
          <li className="footer-info"><img src={require("../images/phone.svg")} alt="phone" height="16"/>  +65 6123 4567</li>
          <li className="footer-info"><img src={require("../images/email.svg")} alt="phone" height="13"/>  tutorio@gmail.com</li>
        </ul>
      </div>

      <div className="col-6 col-md">
        <img className="mb-2" src={require("../images/big-logo.png")} alt="logo" height="30" />
        <small className="d-block mb-3 text-muted">© 2020-</small>
      </div>

    </div>


</footer>);
}

export default Footer;