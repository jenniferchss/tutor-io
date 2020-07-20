import React from "react";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import axios from "../axios";


function LoggedInNav(props) {
    // const modulesList = ["CS1010", "CS1101S", "CS2030"]
    const history = useHistory();
    // const [searchBar, setSearchBar] = useState("")
    const [options, setOptions] = useState([])
    const [moduleCode, setModuleCode] = useState(options[0])
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

  useEffect(() => {
    axios().get('/user/getAllModules')
    .then ( res => {
        // console.log("GET MODULES: " + JSON.stringify(res.data, null, 2))
        setOptions(res.data);
    })
    .catch (err => {
        console.log(err);
    });
  }, [])


    const groupedOptions = options.map((option) => {
      const firstLetter = option.name[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        ...option,
      };
  });

    return (<nav className="sidenav navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
    <a className="navbar-brand navbar-loggedin col-md-3 col-lg-2 mr-0 px-3" href="/dashboard">
        <img src={logo} width="120" alt="tutorio-logo" loading="lazy" />
    </a>
    
    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <form className="form-control form-control-dark w-100 outer" autoComplete="off" action="/action_page.php">
      
      {/* <input id="myInput" className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
      <Autocomplete
        value={moduleCode}
        onChange={(event, newValue) => {
        setModuleCode(newValue.name);
        }}
        inputValue={inputCode}
        onInputChange={(event, newInputValue) => {
        setInputCode(newInputValue);
        }}
        id="controllable-states-demo"
        // options={groupedOptions.map((option) => option.name)}
        options={groupedOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.name}
        // style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search Module Code / Tutor Name" variant="filled" size="small" fullWidth />}
        // renderInput={(params) => <Paper component="form" >
        //   <InputBase
        //     placeholder="Search Google Maps"
        //     inputProps={{ 'aria-label': 'search google maps' }}
        //   />
        //   <IconButton type="submit" aria-label="search">
        //     <SearchIcon />
        //   </IconButton>
        // </Paper>}
      />
      
      {/* <Autocomplete
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
          style={{ width: 100 }}
          renderInput={(params) => <TextField {...params} label="Search Module" variant="outlined" />}
      /> */}
    </form>
      
    <ul className="navbar-nav px-3">
      <li onClick={handleClickLogout} className="nav-item text-nowrap">
        <a className="nav-link sign-out" href="/signin">Sign Out</a>
      </li>
    </ul>
  </nav>)
}

export default LoggedInNav;