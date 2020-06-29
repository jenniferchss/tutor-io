import React from "react";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
// import autocomplete from "./AutoComplete.jsx";
// import { Dropdown } from 'semantic-ui-react';
// import Select from "react-dropdown-select";
import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


function LoggedInNav(props) {
    const modulesList = ["CS1010", "CS1101S", "CS2030"]
    const history = useHistory();
    // const [searchBar, setSearchBar] = useState("")
    const [moduleCode, setModuleCode] = useState(modulesList[0])
    const [inputCode, setInputCode] = useState("")

    function handleClickLogout() {
        props.handleLogout();
        localStorage.clear();
        history.push("/signin");
    }

    // var dropdownList = ["Modules", "Tutor Names"];
    // function dropdownFunction() {
    //   autocomplete(document.getElementById("myInput"), dropdownList);
    // }

    // const dropdownOptions = [
    //   { value: 1, text: 'Module Code'},
    //   { value: 2, text: 'Tutor Name'}]

  //   function handleChangeSearchBar(value) {
  //     const search = value[0].label;
  //       // console.log(event.target.value);
  //       setSearchBar(search);
  //   }

  //   const dropdownList = [
  //     {label: "Module Code", value: 1},
  //     {label: "Tutor Name", value: 2},
  //     {label: "CS1231", value: 3},
  //     {label: "CS2030", value: 4},
  // ];

    return (<nav className="navbar navbar-dark fixed-top flex-nowrap p-0 shadow">
    <a className="navbar-brand navbar-loggedin col-sm-3 col-md-2 mr-0" href="/dashboard">
        <img src={logo} width="120" alt="tutorio-logo" loading="lazy" />
    </a>
    

    <form className="form-control form-control-dark w-100 outer" autocomplete="off" action="/action_page.php">
      {/* <div class="autocomplete form-control form-control-light w-100 inner"> */}
      {/* <input onClick={} id="myInput" className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
      {/* <Dropdown
        placeholder='Search'
        
        search
        selection
        options={dropdownOptions}
      /> */}
      {/* <Select 
        className="search-bar form-control form-control-light w-100"
        options={dropdownList} 
        onChange={handleChangeSearchBar} 
        value={searchBar}
        placeholder="Search..."/> */}
      {/* </div> */}
      <Autocomplete
          className="search-bar form-control form-control-light w-100"
          value={moduleCode}
          onChange={(event, newValue) => {
          setModuleCode(newValue);
          }}
          inputValue={inputCode}
          onInputChange={(event, newInputValue) => {
          setInputCode(newInputValue);
          }}
          id="controllable-states-demo"
          options={modulesList}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Search Module" variant="outlined" />}
      />
    </form>
      
    <ul className="navbar-nav px-3">
      <li onClick={handleClickLogout} className="nav-item text-nowrap">
        <a className="nav-link sign-out" href="/signin">Sign Out</a>
      </li>
    </ul>
  </nav>)
}

export default LoggedInNav;