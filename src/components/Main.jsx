import React from "react";
import Header from "./Header";
import Whitecomp from "./Whitecomp";
import Whytutee from "./Whytutee";
import Bluecomp from "./Bluecomp";
import Whytutor from "./Whytutor";
import Testimony from "./Testimony";


function Main() {
    return (<div className="main-body" data-spy="scroll" data-target="#scroll-example" data-offset="0">
        <Header />
        <Whitecomp />
        <Whytutee />
        <Bluecomp />
        <Whytutor />
        <Testimony />
        
    </div>);
}

export default Main;