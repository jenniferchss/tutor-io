import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Navibar from "./Navibar";
import Main from "./Main.jsx";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import Dashboard from "./Dashboard.jsx";
import MyModules from "./MyModules.jsx";
import EditMyProfile from "./EditMyProfile";
import Privacy from "./Privacy.jsx";
import TutorListing from "./TutorListing.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import Footer from "./Footer";


function App() {
    return (<Router>
    <div>
      <Navibar />
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/mymodules" exact component={MyModules}/>
        <Route path="/editprofile" exact component={EditMyProfile}/>
        <Route path="/manageaccount" exact component={Privacy}/>
        <Route path="/tutorlisting" exact component={TutorListing}/>
        <Route path="*" exact component={NotFoundPage}/>
            
      </Switch>
      <Footer />
    </div>
    </Router>);
}

export default App;