import React from "react";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";


function LoggedInNav(props) {
    const history = useHistory();

    function handleClickLogout() {
        props.handleLogout();
        localStorage.clear();
        history.push("/signin");
    }

    return (<nav className="navbar navbar-dark fixed-top flex-nowrap p-0 shadow">
    <a className="navbar-brand navbar-loggedin col-sm-3 col-md-2 mr-0" href="/dashboard">
        <img src={logo} width="120" alt="tutorio-logo" loading="lazy" />
    </a>
    <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
    <ul class="navbar-nav px-3">
      <li onClick={handleClickLogout} class="nav-item text-nowrap">
        <a class="nav-link sign-out" href="/signin">Sign Out</a>
      </li>
    </ul>
  </nav>)
}

export default LoggedInNav;