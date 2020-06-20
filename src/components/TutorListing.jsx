import React from "react";

function TutorListing() {
    return (<div className="editprofile">
    <h5>Find the right tutor for you!</h5>
        <div className="card mb-3 search-card">
            <div className="row no-gutters">
                <div className="col-md-6">
                    <h3 className="search-title">FACULTY</h3>
                    <li class="nav-item dropdown">
                        <h3 class="nav-link dropdown-toggle fac-drop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose Faculty</h3>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Faculty of Arts and Social Sciences</a>
                            <a class="dropdown-item" href="#">Faculty of Engineering</a>
                            <a class="dropdown-item" href="#">Faculty of Law</a>
                            <a class="dropdown-item" href="#">Faculty of Science</a>
                            <a class="dropdown-item" href="#">School of Business</a>
                            <a class="dropdown-item" href="#">School of Computing</a>
                            <a class="dropdown-item" href="#">School of Design and Environment</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Faculty of Dentistry</a>
                            <a class="dropdown-item" href="#">DUKE NUS Medical School</a>
                        </div>
                    </li>
                </div>
                <div className="col-md-6">
                    <h3 className="search-title">MODULE CODE</h3>
                    <li class="nav-item dropdown">
                        <h3 class="nav-link dropdown-toggle fac-drop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose Module</h3>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">CS1010</a>
                            <a class="dropdown-item" href="#">CS1010C</a>
                            <a class="dropdown-item" href="#">CS1010S</a>
                            <a class="dropdown-item" href="#">CS1231</a>
                            <a class="dropdown-item" href="#">CS2030</a>
                            <a class="dropdown-item" href="#">CS2040</a>
                        </div>
                    </li>
                </div>
            </div>
        </div>
        
        <div className="card mb-3 tutor-card">
            <div className="row no-gutters">
                <div className="col-md-3">
                <img src={require("../images/chessa@2x.png")} className="card-img tutor-img" alt="tutor-img" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h4 class="tutor-name">Jennifer Chessa</h4>
                        <h7 class="major">Data Science & Analytics</h7>
                        <p>I'm very passionate in teaching and eager to meet you guys and share my knowledge and experiences.</p>
                        <p className="text-muted">Teaching: CS2030, CS2040, ST2334</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className="pricetag">$20 - $25</h3>
                    <p className="text-muted">per hour</p>
                </div>
            </div>
        </div>

        <div className="card mb-3 tutor-card">
            <div className="row no-gutters">
                <div className="col-md-3">
                <img src={require("../images/chessa@2x.png")} className="card-img tutor-img" alt="tutor-img" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h4 class="tutor-name">Jennifer Chessa</h4>
                        <h7 class="major">Data Science & Analytics</h7>
                        <p>I'm very passionate in teaching and eager to meet you guys and share my knowledge and experiences.</p>
                        <p className="text-muted">Teaching: CS2030, CS2040, ST2334</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className="pricetag">$20 - $25</h3>
                    <p className="text-muted">per hour</p>
                </div>
            </div>
        </div>


    </div>)
}

export default TutorListing;