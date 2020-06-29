import React from "react";

function ScienceTab() {
    return (
    <ul className="nav nav-tabs mods-tabs">
      <li><a className="link-tab" href="/fassmods">FASS</a></li>
      <li><a className="link-tab" href="/enginmods">FOE</a></li>
      <li className="active"><a className="active-link" href="#">Faculty of Science</a></li>
      <li><a className="link-tab" href="/bizmods">Business</a></li>
      <li><a className="link-tab" href="/socmods">SOC</a></li>
      <li><a className="link-tab" href="/sdemods">SDE</a></li>
    </ul>
    )
}

export default ScienceTab;