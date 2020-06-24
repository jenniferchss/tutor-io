import React, { useState, useEffect }from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Navibar from "./Navibar";
import LoggedInNav from "./LoggedInNav.jsx";
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
import axios from "../axios";

class App extends React.Component {
  state = {
    isLoggedIn: 'false',
  }

  setIsLoggedIn = (isLoggedIn) => this.setState({isLoggedIn})

  handleLogin = (data) => {
    this.setIsLoggedIn('true');
  }

  handleLogout = () => {
    this.setIsLoggedIn('false');
    //setUser({});
  }

  checkLogInStatus = () => {
    const token = localStorage.getItem('usertoken');
    axios().get('/user/me', {
      headers: {
        Authorization: token
      }
    })
    .then(res =>{
      if (!this.state.isLoggedIn && localStorage.getItem('usertoken') !== null) {
        this.setIsLoggedIn(true);
        //setUser(res.data.user)
        console.log(res);  
      }
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
  }

  render() {
    const {isLoggedIn} = this.state;
    this.checkLogInStatus();
    return (
      <Router>
    <div>
      {isLoggedIn === false ? <Navibar /> : <LoggedInNav handleLogout={this.handleLogout}/>}
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/signin" exact render={props => (
          <Signin {...props} handleLogin={this.handleLogin} />
        )}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/dashboard" exact render={props => (
          <Dashboard {...props} isLoggedIn={isLoggedIn} />
        )}/>
        <Route path="/mymodules" exact component={MyModules}/>
        <Route path="/editprofile" exact component={EditMyProfile}/>
        <Route path="/manageaccount" exact component={Privacy}/>
        <Route path="/tutorlisting" exact component={TutorListing}/>
        <Route path="*" exact component={NotFoundPage}/>
            
      </Switch>
      <Footer />
    </div>
    </Router>
    );
  }
}

export default App;