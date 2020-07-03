import React from "react";

function SDETab() {
    return (
    <ul className="nav nav-tabs mods-tabs">
        <li><a className="link-tab" href="/fassmods">FASS</a></li>
        <li><a className="link-tab" href="/enginmods">FOE</a></li>
        <li><a className="link-tab" href="/fosmods">FOS</a></li>
        <li><a className="link-tab" href="/bizmods">Business</a></li>
        <li><a className="link-tab" href="/socmods">SOC</a></li>
        <li className="active"><a className="active-link" href="#">School of Design & Environment</a></li>
        
    </ul>)
}

export default SDETab;