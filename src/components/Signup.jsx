import React from "react";

function Signup() {
    return (<div className="joinus-page">
        <h1 className="joinus-title">Join our Big Family!</h1>

        <form className="signupform">
            <div className="form-row">
                <div className="form-group col-md-6 left-side">
                    <label for="signupForm">First Name</label>
                    <input type="text" className="form-control" id="validationServer01" required />
                </div>
                <div className="form-group col-md-6 right-side">
                    <label for="signupForm">Last Name</label>
                    <input type="text" className="form-control" id="validationServer01" required />
                </div>
            </div>
            <div className="form-group">
                <label for="signupForm">Email Address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" required />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6 left-side">
                    <label for="signupForm">Major</label>
                    <input type="text" className="form-control" required />
                </div>
                <div className="form-group col-md-6 right-side">
                    <label for="signupForm">Faculty</label>
                    <input type="text" className="form-control" required />
                </div>
            </div>
            <div class="form-group">
                <label for="signupForm">Year</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                </select>
            </div>
            <div className="form-group">
                <label for="signupForm">Password</label> 
                <input type="password" className="form-control" id="passwordInput" required />
            </div>
            <label for="signupForm">Register as:</label>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                    Tutor
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                    Tutee
                </label>
            </div>
            <button type="submit" className="btn btn-info signup">Sign Up</button>


        </form>
    </div>);
}

export default Signup;