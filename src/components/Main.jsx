import React from "react";
import Header from "./Header";
import Whitecomp from "./Whitecomp";
import Whytutee from "./Whytutee";
import Bluecomp from "./Bluecomp";
import Whytutor from "./Whytutor";
import Testimony from "./Testimony";

var isLoggedIn = false;

function Main() {
    return (<div>
        
        <Header />
        <Whitecomp />
        <Whytutee />
        <Bluecomp />
        <Whytutor />
        <Testimony />
        
    </div>);
}

export default Main;