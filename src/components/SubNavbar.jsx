import React from "react";

function SubNavbar() {
    return (<nav className="navbar navbar-expand navbar-light fixed-top subnavbar">
        <ul className="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/mymodules">My Modules</a>
                </li>
            </ul>

    </nav>);
}

export default SubNavbar;