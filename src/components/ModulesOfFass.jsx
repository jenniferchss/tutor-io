import React, { useState, useEffect } from "react";
import axios from "../axios";
import FASSTab from "./FASSTab";

function ModulesOfFass() {

  const [moduleList, setModuleList] = useState([]);

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

  function handleClick(moduleCode,faculty) {
    localStorage.setItem('request', moduleCode);
    localStorage.setItem('facreq', faculty);
    console.log('request: ' + localStorage.setItem('request', moduleCode))
    console.log('facreq: ' + localStorage.setItem('request', moduleCode))
  }
  
    return (<div className="well mods-list">
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
                    <a onClick={handleClick(mod.moduleCode, mod.faculty)} href="/tutorlisting">{mod.moduleCode}</a>
                  </td>
                  <td className="table-content">{mod.numOfTutors}</td>
                  </tr>)
              })}
            </tbody>
      </table>
    </div>
  </div>);
}

export default ModulesOfFass;