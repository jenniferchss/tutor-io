import React, { useState, useEffect } from "react";
import axios from "../axios";
import FASSTab from "./FASSTab";
import SideNav from "./SideNav";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from "./LoadingIndicator";

function ModulesOfFass(props) {
  const [options, setOptions] = useState([])
  const [moduleList, setModuleList] = useState([]);
  const [moduleCode, setModuleCode] = useState(options[0])
  const [inputCode, setInputCode] = useState("")
  const history = useHistory();

  useEffect(() => {
    trackPromise(axios().get('/user/findSpecificModules/Arts_&_Social_Sciences')
    .then(res => {
      console.log(res);
      setModuleList(res.data);
    })
    .catch (err => {
      console.log(err);
    }));

    //GET MODULE CODE LIST//
    axios().get('/user/findSpecificModules/Arts_&_Social_Sciences')
    .then ( res => {
        // console.log("GET MODULES: " + JSON.stringify(res.data, null, 2))
        setOptions(res.data);
    })
    .catch (err => {
        console.log(err);
    });
  }, [])

  const groupedOptions = options.map((option) => {
    console.log("firstletter: " + option.moduleCode);
    const firstLetter = option.moduleCode[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  function redirectLogIn() {
    history.push('/signin');
  }

  function redirectSignUp() {
    history.push('/signup');
  }

  function handleClick(moduleCode,faculty) {
    localStorage.setItem('request', moduleCode);
    localStorage.setItem('facreq', faculty);
    // console.log('request: ' + localStorage.setItem('request', moduleCode))
    // console.log('facreq: ' + localStorage.setItem('request', moduleCode))
  }
  
    return (<div>
      {props.isLoggedIn === 'false' ?
      <div className="well mods-list">
      <FASSTab />
      <div className="card tab-content">
        <Autocomplete
            className="list-of-mods"
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
            getOptionLabel={(option) => option.moduleCode}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search Module" size="small" />}
        />
        <table className="table mod-list">
              <thead>
                  <tr>
                  <th className="table-title" scope="col">MODULE CODE</th>
                  <th className="table-title" scope="col">No of Tutors</th>
                  </tr>
              </thead>
              <tbody>
                <LoadingIndicator/>
                {moduleList.map(mod => {return (
                    <tr key={mod.moduleCode}>
                    <td className="table-content">
                      <a data-toggle="modal" data-target="#login-alert" href="#">{mod.moduleCode}</a>
                    </td>
                    <td className="table-content">{mod.numOfTutors}</td>
                    </tr>)
                })}
              </tbody>
        </table>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="login-alert" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Hi there!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Please log in / register to explore the full list of the tutors available.
              </div>
              <div className="modal-footer">
                <button onClick={redirectLogIn} type="button" className="btn btn-secondary" data-dismiss="modal">Log In</button>
                <button onClick={redirectSignUp} type="button" className="btn btn-info" data-dismiss="modal">Sign Up</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div> :
    <div className="right-side-modlist">
    <div className="row">
      <SideNav />

      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 mods-pg">
        <div className="well mods-list">
        <FASSTab />
          <div className="card tab-content">
            <Autocomplete
              className="list-of-mods"
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
              getOptionLabel={(option) => option.moduleCode}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Search Module" size="small" />}
            />
            <table className="table mod-list">
                  <thead>
                      <tr>
                      <th className="table-title" scope="col">MODULE CODE</th>
                      <th className="table-title" scope="col">No of Tutors</th>
                      </tr>
                  </thead>
                  <tbody>
                    <LoadingIndicator/>
                    {moduleList.map(mod => {
                      return (
                        <tr key={mod.moduleCode}>
                        <td className="table-content">
                          <a onClick={() => handleClick(mod.moduleCode, mod.faculty)} href="/tutorlisting">{mod.moduleCode}</a>
                        </td>
                        <td className="table-content">{mod.numOfTutors}</td>
                        </tr>)
                    })}
                  </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </main>
    </div>
    </div>
  }  
  </div>);
}

export default ModulesOfFass;