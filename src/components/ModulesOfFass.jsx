import React, { useState, useEffect } from "react";
import axios from "../axios";
import FASSTab from "./FASSTab";
import SideNav from "./SideNav";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

function ModulesOfFass(props) {
  const [moduleList, setModuleList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios().get('/user/findSpecificModules/Arts_&_Social_Sciences', {
      // params: {
      //   faculty: 'Arts_&_Social_Sciences'
      // }
      
    })
    .then(res => {
      console.log(res);
      setModuleList(res.data);
    })
    .catch (err => {
      console.log(err);
    });
  }, [])

  function redirectLogIn() {
    history.push('/signin');
  }

  function redirectSignUp() {
    history.push('/signup');
  }

  function handleClick(moduleCode,faculty) {
    localStorage.setItem('request', moduleCode);
    localStorage.setItem('facreq', faculty);
    console.log('request: ' + localStorage.setItem('request', moduleCode))
    console.log('facreq: ' + localStorage.setItem('request', moduleCode))
  }
  
    return (<div>
      {props.isLoggedIn === 'false' ?
      <div className="well mods-list">
      <FASSTab />
      <div class="card tab-content">
        <table class="table mod-list">
              <thead>
                  <tr>
                  <th className="table-title" scope="col">MODULE CODE</th>
                  <th className="table-title" scope="col">No of Tutors</th>
                  </tr>
              </thead>
              <tbody>
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
        <div class="modal fade" id="login-alert" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Hi there!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Please log in / register to explore the full list of the tutors available.
              </div>
              <div class="modal-footer">
                <button onClick={redirectLogIn} type="button" class="btn btn-secondary" data-dismiss="modal">Log In</button>
                <button onClick={redirectSignUp} type="button" class="btn btn-info" data-dismiss="modal">Sign Up</button>
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
          <div class="card tab-content">
            <table class="table mod-list">
                  <thead>
                      <tr>
                      <th className="table-title" scope="col">MODULE CODE</th>
                      <th className="table-title" scope="col">No of Tutors</th>
                      </tr>
                  </thead>
                  <tbody>
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