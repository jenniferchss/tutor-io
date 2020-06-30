import React from "react";

function SOCTab() {
    return (
    <ul className="nav nav-tabs mods-tabs">
        <li><a className="link-tab" href="/fassmods">FASS</a></li>
        <li><a className="link-tab" href="/enginmods">FOE</a></li>
        <li><a className="link-tab" href="/fosmods">FOS</a></li>
        <li><a className="link-tab" href="/bizmods">Business</a></li>
        <li className="active"><a className="active-link" href="#">School of Computing</a></li>
        <li><a className="link-tab" href="/sdemods">SDE</a></li>
        
      </ul>)
}

export default SOCTab;