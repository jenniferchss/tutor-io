import React, { useState } from "react";
import SideNav from "./SideNav";
import axios from "../axios";


function EditMyProfile() {
    
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [major, setMajor] = useState("")
    const [faculty, setFaculty] = useState("")
    const [year, setYear] = useState("")
    const [telegram, setTelegram] = useState("")
    const [bio, setBiography] = useState("")
    const [qualif, setQualifications] = useState("")
    const [isTutor, setIsTutor] = useState(false);
    const [isTutee, setIsTutee] = useState(false);

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
    function handleChangeYear(event) {
        const year = event.target.value;
        setYear(year);
    }
    function handleChangeTelegram(event) {
        const telegram = event.target.value;
        setTelegram(telegram);
    }
    function handleChangeBiography(event) {
        const bio = event.target.value;
        setBiography(bio);
    }
    function handleChangeQualif(event) {
        const qualif = event.target.value;
        setQualifications(qualif);
    }
    function handleChangeIsTutor(event) {
        const isTutor = event.target.value;
        setIsTutor(isTutor);
    }
    function handleChangeIsTutee(event) {
        const isTutee = event.target.value;
        setIsTutee(isTutee);
    }

    function handleLoad(event) {
        const token = localStorage.getItem('usertoken');

        axios().get('/user/userProfile', {
            headers:{
              Authorization: token
            }
        })
        .then (res => {
            const fname = res.data.firstName;
            const lname = res.data.lastName;
            const major = res.data.major;
            const faculty = res.data.faculty;
            const year = res.data.year;
            const telegram = res.data.telegram;
            const bio = res.data.biography;
            const qualif = res.data.qualifications;
            const isTutor = res.data.isTutor;
            const isTutee = res.data.isTutee;
            console.log("LOAD DATA: " + JSON.stringify(res, null, 2));
            setFName(fname);
            setLName(lname);
            setMajor(major);
            setFaculty(faculty);
            setYear(year);
            setTelegram(telegram);
            setBiography(bio);
            setQualifications(qualif);
            setIsTutor(isTutor);
            setIsTutee(isTutee);
        })
        .catch (err => {
            console.log(err);
        })

    }

    function handleSave(event) {
        event.preventDefault();
        const token = localStorage.getItem('usertoken');

        axios().put('/user/editProfile', {
            headers:{
                Authorization: token
            }
        })
        .then (res => {
            console.log("SAVE SUCCESS: " + res);
        })
        .catch (err => {
            console.log("ERROR SAVE: " + err);
        })
    }

    // function componentDidMount() {
    //     handleLoad();
    // }


    return (<div className="editprofile">
        {handleLoad()};
        <div className="row">
            <SideNav />
            
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <h5 className="editprofile-title">Edit My Profile</h5>
                <form onSubmit={handleSave}>
                <p><a href="#" class="profile-pic">Change profile picture</a></p>
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
                        value={faculty}
                    />
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
                    <input 
                        onChange={handleChangeTelegram}
                        type="text" 
                        className="form-control" 
                        id="inputTele" 
                        value={telegram}
                    />
                </div>

                <div className="form-group">
                    <label for="inputBio">Biography</label>
                    <textarea onChange={handleChangeBiography} className="form-control" id="inputBio" rows="3">
                        {bio}
                    </textarea>
                    <small id="bioHelp" className="form-text text-muted">Tell us something interesting about yourself! (e.g. your personality, teaching style, hobbies, etc.)</small>
                </div>

                <div className="form-group">
                    <label for="inputQual">Qualifications</label>
                    <textarea onChange={handleChangeQualif} className="form-control" id="inputBio" rows="3">
                        {qualif}
                    </textarea>
                    <small id="qualHelp" className="form-text text-muted">*to be edited later* (integrate with backend)</small>
                </div>

                <form>
                    <div className="form-group">
                        <label for="exampleFormControlFile1">Upload File</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                </form>

                <div className="form-group">
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
                <small className="form-text text-muted">You can be both!</small>
                </div>

                <div className="form-group">
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
                </div>

                <button type="submit" className="btn btn-info save-btn">Save Changes</button>
                </form>
            </main>
        </div>
    </div>);
}

export default EditMyProfile;