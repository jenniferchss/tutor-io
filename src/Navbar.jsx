import React from "react";
//import logo from './images/logo.png';

function Navbar() {

return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">
            <img src={require('./images/logo.png')} width="90" alt="tutorio-logo" loading="lazy"></img>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
                <ul className="navbar-nav navbar-center">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">About Us<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">How It Works</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Modules
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Faculty of Engineering</a>
                            <a className="dropdown-item" href="#">Faculty of Science</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">School of Computing</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Testimony</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Join Us</a>
                    </li>
                </ul>
            

            <form className="search-box form-inline my-2 my-lg-0">
                <input className="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light btn-sm my-2 my-sm-0" type="submit">Search</button>
            </form>
            
                
            <ul className="navbar-nav navbar-right justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="#">Sign In</a>
                </li>
            </ul>
        </div>
    </nav>
);
}

export default Navbar;
