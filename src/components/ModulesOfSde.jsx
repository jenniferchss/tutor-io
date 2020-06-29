import React, { useState, useEffect } from "react";
import axios from "../axios";
import SDETab from "./SDETab";

function ModulesOfSde() {

  const [moduleList, setModuleList] = useState([]);

  useEffect(() => {
    axios().get('/user/findSpecificModules/School_Of_Design_And_Environment')
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

    return (<div className="well mods-list">
    <SDETab />
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

export default ModulesOfSde;