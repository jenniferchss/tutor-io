import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

function Header() {
return (<div className="heading">
    <img className="background-img" src={require("../images/background@2x.png")} alt="background-img" loading="lazy" fluid="true"></img>
    <img className="big-logo" src={require("../images/big-logo.png")} width="35%" alt="big-logo"></img>
    <h1 className="tagline">Connect, learn, excel.</h1>
    <h2 className="tagline2">Join the big family now!</h2>
    <FontAwesomeIcon icon={faChevronDown} className="chevrondown"/>
</div>);
}

export default Header;