import React from "react";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
import autocomplete from "./AutoComplete.jsx";


function LoggedInNav(props) {
    const history = useHistory();

    function handleClickLogout() {
        props.handleLogout();
        localStorage.clear();
        history.push("/signin");
    }

    var dropdownList = ["Modules", "Tutor Names"];
    function dropdownFunction() {
      autocomplete(document.getElementById("myInput"), dropdownList);
    }

    return (<nav className="navbar navbar-dark fixed-top flex-nowrap p-0 shadow">
    <a className="navbar-brand navbar-loggedin col-sm-3 col-md-2 mr-0" href="/dashboard">
        <img src={logo} width="120" alt="tutorio-logo" loading="lazy" />
    </a>
    

    <form className="form-control form-control-light w-100 outer" autocomplete="off" action="/action_page.php">
      <div class="autocomplete form-control form-control-light w-100 inner">
      <input onClick={dropdownFunction} id="myInput" className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
      </div>
    </form>
      
    <ul className="navbar-nav px-3">
      <li onClick={handleClickLogout} className="nav-item text-nowrap">
        <a className="nav-link sign-out" href="/signin">Sign Out</a>
      </li>
    </ul>
  </nav>)
}

export default LoggedInNav;