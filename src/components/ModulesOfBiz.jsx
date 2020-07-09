import React, { useState, useEffect } from "react";
import axios from "../axios";
import BizTab from "./BizTab";
import SideNav from "./SideNav";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

function ModulesOfBiz(props) {
  const [moduleList, setModuleList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios().get('/user/findSpecificModules/School_Of_Business')
    .then(res => {
      console.log(res.data);
      setModuleList(res.data);
      // console.log(moduleList)
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
    // localStorage.removeItem('request', moduleCode);
    // localStorage.removeItem('facreq', faculty);
    // console.log('request b4: ' + localStorage.getItem('request'));
    localStorage.setItem('request', moduleCode);
    localStorage.setItem('facreq', faculty);
    // console.log('request aft: ' + localStorage.getItem('request'));
  }

    return (<div>
      {props.isLoggedIn === 'false' ?
      <div className="well mods-list">
      <BizTab />
      <div className="card tab-content">
        <table className="table mod-list">
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
                    </tr>
                    )
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
        <BizTab />
          <div className="card tab-content">
            <table className="table mod-list">
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

export default ModulesOfBiz;