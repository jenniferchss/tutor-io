import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import IconButton from '@material-ui/core/IconButton';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';


function LoggedInNav(props) {
    const [searchTutor, setSearchTutor] = useState("")
    const history = useHistory();

    function handleClickLogout() {
        props.handleLogout();
        localStorage.clear();
        history.push("/signin");
    }

    function handleSearchChange(event) {
      const search = event.target.value;
      setSearchTutor(search);
  }

    function handleSearch() {
      localStorage.setItem('tutorname', searchTutor);
      history.push('/findTutor');
    };


    return (<nav className="sidenav navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
    <a className="navbar-brand navbar-loggedin col-md-3 col-lg-2 mr-0 px-3" href="/dashboard">
        <img src={logo} width="120" alt="tutorio-logo" loading="lazy" />
    </a>
    
    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <form onSubmit={handleSearch} className="form-control form-control-dark w-100 outer" autoComplete="off" action="/action_page.php">
      
      <input 
        id="myInput" 
        className="form-control form-control-dark w-100" 
        type="text" 
        placeholder="Search Tutor Name" 
        aria-label="Search"
        onChange={handleSearchChange}
        value={searchTutor}
      />

      {/* <Autocomplete
        value={moduleCode}
        onChange={(event, newValue) => {
        setModuleCode(newValue.name);
        }}
        inputValue={inputCode}
        onInputChange={(event, newInputValue) => {
        setInputCode(newInputValue);
        }}
        id="controllable-states-demo"
        options={groupedOptions.map((option) => option.name)}
        options={groupedOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search Module Code / Tutor Name" variant="filled" size="small" fullWidth />}
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