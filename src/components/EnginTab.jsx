import React from "react";

function EnginTab() {
    return (
    <ul className="nav nav-tabs mods-tabs">
        <li><a className="link-tab" href="/fassmods">FASS</a></li>
        <li className="active"><a className="active-link" href="#">Faculty of Engineering</a></li>
        <li><a className="link-tab" href="/fosmods">FOS</a></li>
        <li><a className="link-tab" href="/bizmods">Business</a></li>
        <li><a className="link-tab" href="/socmods">SOC</a></li>
        <li><a className="link-tab" href="/sdemods">SDE</a></li>
        
      </ul>)
}

export default EnginTab;