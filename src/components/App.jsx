import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Main from "./Main.jsx";
import Signup from "./Signup.jsx";

/**
 * TODO: Move this component somewhere else and make it nicer haha
 */
const NotFoundPage = () => (
  <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <div className="text-white">Go home, you're drunk</div>
  </div>
);

function App() {
    return (<Router>
    <div>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="*" component={NotFoundPage}/>
            
            
      </Switch>
    </div>
    </Router>);
}

export default App;