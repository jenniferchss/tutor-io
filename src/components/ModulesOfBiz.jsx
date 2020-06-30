import React, { useState, useEffect } from "react";
import axios from "../axios";
import BizTab from "./BizTab";
import SideNav from "./SideNav";
import Footer from "./Footer";

function ModulesOfBiz(props) {
  const [moduleList, setModuleList] = useState([]);

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
        <BizTab />
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

export default ModulesOfBiz;