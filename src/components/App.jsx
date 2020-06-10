import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Main from "./Main.jsx";
import Signup from "./Signup.jsx";

function App() {
    return (<Router>
    <div>
    <Switch>
          <Route path="/">
            <Main />
          </Route>
          
          <Route path="/signup">
            <Signup />
          
          </Route>
        </Switch>
    </div>
    </Router>);
}

export default Main;