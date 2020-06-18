import React from 'react';
import SubNavbar from "./SubNavbar.jsx";
import TutorModules from './TutorModules.jsx';
import TuteeModules from './TuteeModules.jsx';

function MyModules() {
    return (<div className="dashboard">
        <SubNavbar/>
        <div className="row">
            <div className="col-lg-6">
                <TutorModules/>
            </div>

            <div className="col-lg-6">
                <TuteeModules/>
            </div>

        </div>
    </div>);
}

export default MyModules;
