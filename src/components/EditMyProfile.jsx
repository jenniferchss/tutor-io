import React, { useState } from "react";
import SideNav from "./SideNav";


function EditMyProfile() {
    
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [major, setMajor] = useState("")
    const [faculty, setFaculty] = useState("")

    function handleChangeFName(event) {
        const fname = event.target.value;
        setFName(fname);
    }
    function handleChangeLName(event) {
        const lname = event.target.value;
        setLName(lname);
    }
    function handleChangeMajor(event) {
        const major = event.target.value;
        setMajor(major);
    }
    function handleChangeFaculty(event) {
        const faculty = event.target.value;
        setFaculty(faculty);
    }

    function handleSave(event) {
        event.preventDefault();
        //axios.get();

    }


    return (<div className="editprofile">
        <div className="row">
            <SideNav />
            
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <h5 className="editprofile-title">Edit My Profile</h5>
                <form onSubmit={handleSave}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputFirstName">First Name</label>
                        <input 
                            onChange={handleChangeFName} 
                            type="text" 
                            className="form-control" 
                            id="inputFirstName" 
                            value={fName} 
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputLastName">Last Name</label>
                        <input 
                            onChange={handleChangeLName}
                            type="password" 
                            className="form-control" 
                            id="inputLastName" 
                            value={lName} 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputMajor">Major</label>
                    <input 
                        onChange={handleChangeMajor}
                        type="text" 
                        className="form-control" 
                        id="inputMajor" 
                        value={major} 
                    />
                </div>
                <div className="form-group">
                    <label for="inputFaculty">Faculty</label>
                    <input 
                        onChange={handleChangeFaculty}
                        type="text" 
                        className="form-control" 
                        id="inputFaculty" 
                        value={faculty} />
                </div>
                <div className="form-group">
                    <label for="signupForm">Year</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="inputTele">Telegram</label>
                    <input type="text" className="form-control" id="inputTele" placeholder="@telehandle"/>
                </div>

                <div className="form-group">
                    <label for="inputBio">Biography</label>
                    <textarea className="form-control" id="inputBio" rows="3"></textarea>
                    <small id="bioHelp" className="form-text text-muted">Tell us something interesting about yourself! (e.g. your personality, teaching style, hobbies, etc.)</small>
                </div>

                <div className="form-group">
                    <label for="inputQual">Qualifications</label>
                    <textarea className="form-control" id="inputBio" rows="3"></textarea>
                    <small id="qualHelp" className="form-text text-muted">*to be edited later* (integrate with backend)</small>
                </div>

                <form>
                    <div className="form-group">
                        <label for="exampleFormControlFile1">Upload File</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                </form>
                
                <label for="signupForm">Availability:</label>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                        Online
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                        Offline
                    </label>
                </div>

                <button type="submit" className="btn btn-info save-btn">Save Changes</button>
                </form>
            </main>
        </div>
    </div>);
}

export default EditMyProfile;