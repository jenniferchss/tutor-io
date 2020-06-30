import React from "react";
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
import TutorRegistration from "./TutorRegistration.jsx";
import EditMyProfile from "./EditMyProfile";
import Privacy from "./Privacy.jsx";
import TutorListing from "./TutorListing.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import Footer from "./Footer";
import axios from "../axios";
import ModulesOfFass from "./ModulesOfFass";
import ModulesOfEngin from "./ModulesOfEngin";
import ModulesOfSci from "./ModulesOfSci";
import ModulesOfBiz from "./ModulesOfBiz";
import ModulesOfComp from "./ModulesOfComp";
import ModulesOfSde from "./ModulesOfSde";
//import jwt from "jsonwebtoken";


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
    console.log(token);

    if (!token) {
      this.setIsLoggedIn('false');
    }
    else { 
    
      axios().get('/user/verifyToken', {
        headers:{
          Authorization: token
        }
      })
      .then(res => {
        if (res.data === 'true' && localStorage.getItem('usertoken')!== null) {
          this.setIsLoggedIn('true');
          // console.log(res);
        }
        else {
          this.setIsLoggedIn('false');
        }
        
      })
      .catch(err => {
        console.log(err);
        this.setIsLoggedIn('false');
      })

    }
    
    
    // if (token !== null) {
    //   this.setIsLoggedIn(true);
    //   //setUser(res.data.user) 
    // }
    // else {
    //   this.setIsLoggedIn(false);
    // }
    
  }

  componentDidMount() {
    this.checkLogInStatus();
  }
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }


  render() {
    const {isLoggedIn} = this.state;
    // this.checkLogInStatus();
    return (
      <Router>
    <div>
      {isLoggedIn === 'false' ? 
      <div>
      <Navibar />
        <Switch> 
          <Route path="/" exact component={Main}/>
          <Route path="/signin" exact render={props => (
            <Signin {...props} isLoggedIn={isLoggedIn} handleLogin={this.handleLogin} />
          )}/>
          <Route path="/signup" exact render={props => (
            <Signup {...props} isLoggedIn={isLoggedIn} handleLogin={this.handleLogin} />
          )}/>
          <Route path="/fassmods" exact render={props => (
            <ModulesOfFass {...props} isLoggedIn={isLoggedIn} />
          )}/>
          <Route path="/enginmods" exact render={props => (
            <ModulesOfEngin {...props} isLoggedIn={isLoggedIn} />
          )}/>
          <Route path="/fosmods" exact render={props => (
            <ModulesOfSci {...props} isLoggedIn={isLoggedIn} />
          )}/>
          <Route path="/bizmods" exact render={props => (
            <ModulesOfBiz {...props} isLoggedIn={isLoggedIn} />
          )}/>
          <Route path="/socmods" exact render={props => (
            <ModulesOfComp {...props} isLoggedIn={isLoggedIn} />
          )}/>
          <Route path="/sdemods" exact render={props => (
            <ModulesOfSde {...props} isLoggedIn={isLoggedIn} />
          )}/>
          <Route path="*" exact component={NotFoundPage}/>
        </Switch> 
      <Footer />
      </div>
       : <div> <LoggedInNav handleLogout={this.handleLogout}/> 
       <Switch>
        <Route path="/dashboard" exact render={props => (
          <Dashboard {...props} isLoggedIn={isLoggedIn} />
        )}/>
        <Route path="/tutorregis" exact component={TutorRegistration}/>
        <Route path="/editprofile" exact component={EditMyProfile}/>
        <Route path="/manageaccount" exact component={Privacy}/>
        <Route path="/tutorlisting" exact component={TutorListing}/>
        <Route path="/fassmods" exact render={props => (
            <ModulesOfFass {...props} isLoggedIn={isLoggedIn} />
          )}/>
          <Route path="/enginmods" exact render={props => (
            <ModulesOfEngin {...props} isLoggedIn={isLoggedIn} />
          )}/>
          <Route path="/fosmods" exact render={props => (
            <ModulesOfSci {...props} isLoggedIn={isLoggedIn} />
          )}/>
          <Route path="/bizmods" exact render={props => (
            <ModulesOfBiz {...props} isLoggedIn={isLoggedIn} />
          )}/>
          <Route path="/socmods" exact render={props => (
            <ModulesOfComp {...props} isLoggedIn={isLoggedIn} />
          )}/>
          <Route path="/sdemods" exact render={props => (
            <ModulesOfSde {...props} isLoggedIn={isLoggedIn} />
          )}/>
        <Route path="*" exact component={NotFoundPage}/>
       </Switch>
      </div>}
      {/* <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/signin" exact render={props => (
          <Signin {...props} isLoggedIn={isLoggedIn} handleLogin={this.handleLogin} />
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
      <Footer /> */}
    </div>
    </Router>
    );
  }
}

export default App;