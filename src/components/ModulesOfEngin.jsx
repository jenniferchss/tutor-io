import React, { useState, useEffect } from "react";
import axios from "../axios";
import EnginTab from "./EnginTab";
import SideNav from "./SideNav";
import Footer from "./Footer";

function ModulesOfEngin(props) {

  const [moduleList, setModuleList] = useState([]);

  useEffect(() => {
    axios().get('/user/findSpecificModules/Engineering')
    .then(res => {
      console.log(res);
      setModuleList(res.data);
    })
    .catch (err => {
      console.log(err);
    });
  }, [])

  function handleClick(moduleCode,faculty) {
    localStorage.setItem('request', moduleCode);
    localStorage.setItem('facreq', faculty);
  }


    return (<div>
      {props.isLoggedIn === 'false' ?
      <div className="well mods-list">
      <EnginTab />
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
                    <td className="table-content">{mod.moduleCode}</td>
                    <td className="table-content">{mod.numOfTutors}</td>
                    </tr>)
                })}
              </tbody>
        </table>
      </div>
    </div> :
    <div className="right-side-modlist">
    <div className="row">
      <SideNav />

      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 mods-pg">
        <div className="well mods-list">
        <EnginTab />
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

export default ModulesOfEngin;