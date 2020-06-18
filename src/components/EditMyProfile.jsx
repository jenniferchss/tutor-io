import React from "react";

function EditMyProfile() {
    return (<div className="editprofile">
        <h5>Edit My Profile</h5>
        <form>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label for="inputFirstName">First Name</label>
            <input type="text" className="form-control" id="inputFirstName"/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputLastName">Last Name</label>
            <input type="password" className="form-control" id="inputLastName"/>
            </div>
        </div>
        <div className="form-group">
            <label for="inputMajor">Major</label>
            <input type="text" className="form-control" id="inputMajor"/>
        </div>
        <div className="form-group">
            <label for="inputFaculty">Faculty</label>
            <input type="text" className="form-control" id="inputFaculty"/>
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
    </div>);
}

export default EditMyProfile;