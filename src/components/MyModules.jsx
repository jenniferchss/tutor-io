import React from 'react';
//import SubNavbar from "./SubNavbar.jsx";
import SideNav from "./SideNav";
import TutorModules from './TutorModules.jsx';
import TuteeModules from './TuteeModules.jsx';

function MyModules() {
    return (<div className="dashboard">
        <div className="row">
            <SideNav />
            
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="row">
                    <div className="col-lg-6">
                        <TutorModules/>
                    </div>

                    <div className="col-lg-6">
                        <TuteeModules/>
                    </div>

                </div>
            </main>
        </div>
    </div>);
}

export default MyModules;
