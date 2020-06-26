import React from "react";

function ModulesOfSci() {
    return (<div className="well mods-list">
    <ul className="nav nav-tabs mods-tabs">
      <li><a className="link-tab" href="/fassmods">FASS</a></li>
      <li><a className="link-tab" href="/enginmods">FOE</a></li>
      <li className="active"><a className="active-link" href="#">Faculty of Science</a></li>
      <li><a className="link-tab" href="/bizmods">Business</a></li>
      <li><a className="link-tab" href="/socmods">SOC</a></li>
      <li><a className="link-tab" href="/sdemods">SDE</a></li>
      
    </ul>
    <div class="card tab-content">
    <table class="table mod-list">
            <thead>
                <tr>
                <th className="table-title" scope="col">MODULE CODE</th>
                <th className="table-title" scope="col">No of Tutors</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="table-content">...</td>
                <td className="table-content">-</td>
                </tr>
                <tr>
                <td className="table-content">...</td>
                <td className="table-content">-</td>
                </tr>
                <tr>
                <td className="table-content">...</td>
                <td className="table-content">-</td>
                </tr>
            </tbody>
        </table>
      
    </div>
  </div>);
}

export default ModulesOfSci;