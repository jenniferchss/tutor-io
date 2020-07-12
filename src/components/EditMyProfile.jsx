import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import axios from "../axios";
import { useHistory } from "react-router-dom";


function EditMyProfile() {
    
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [major, setMajor] = useState("")
    const [faculty, setFaculty] = useState("")
    const [year, setYear] = useState("")
    const [telegram, setTelegram] = useState("")
    const [bio, setBiography] = useState("")
    const [qualif, setQualifications] = useState("")
    const history = useHistory();
    

    function handleChangeFName(event) {
        const fname = event.target.value;
        setFName(fname);
        console.log(fname);
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
        console.log(year);
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
    

    useEffect(() => {
        const token = localStorage.getItem('usertoken');

        axios().get('/user/userProfile', {
            headers:{
              Authorization: token
            }
        })
        .then (res => {
            const fname = res.data[0].firstName;
            const lname = res.data[0].lastName;
            const major = res.data[0].major;
            const faculty = res.data[0].faculty;
            const year = res.data[0].year;
            const telegram = res.data[0].telegram;
            const bio = res.data[0].biography;
            const qualif = res.data[0].qualifications;
            console.log("LOAD DATA: " + JSON.stringify(res, null, 2));
            setFName(fname);
            setLName(lname);
            setMajor(major);
            setFaculty(faculty);
            setYear(year);
            setTelegram(telegram);
            setBiography(bio);
            setQualifications(qualif);
        })
        .catch (err => {
            console.log(err);
        })
    }, [])

    function handleSave(event) {
        event.preventDefault();
        const token = localStorage.getItem('usertoken');

        axios().patch('/user/editProfile', {
            firstName: fName,
            lastName: lName,
            major: major,
            faculty: faculty,
            year: year,
            telegram: telegram,
            biography: bio,
            qualifications: qualif,
            headers:{
                Authorization: token
            }
        })
        .then (res => {
            console.log("SAVE SUCCESS: " + JSON.stringify(res, null, 2));
            alert("Changes saved!");
            history.push('/dashboard');
        })
        .catch (err => {
            console.log("ERROR SAVE: " + err);
        })
    }


    return (<div className="editprofile">
        <div className="row">
            <SideNav />
            
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <h3 className="page-title">Edit My Profile</h3>
                <hr></hr>
                <form onSubmit={handleSave}>
                <p><a href="#" className="profile-pic">Change profile picture</a></p>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">First Name</label>
                        <input 
                            onChange={handleChangeFName} 
                            type="text" 
                            className="form-control" 
                            id="inputFirstName" 
                            value={fName} 
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputLastName">Last Name</label>
                        <input 
                            onChange={handleChangeLName}
                            type="text" 
                            className="form-control" 
                            id="inputLastName" 
                            value={lName} 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputMajor">Major</label>
                    <input 
                        onChange={handleChangeMajor}
                        type="text" 
                        className="form-control" 
                        id="inputMajor" 
                        value={major} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputFaculty">Faculty</label>
                    <input 
                        onChange={handleChangeFaculty}
                        type="text" 
                        className="form-control" 
                        id="inputFaculty" 
                        value={faculty}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="signupForm">Year</label>
                    <select 
                    onChange={handleChangeYear}
                    className="form-control" id="exampleFormControlSelect1"
                    value={year}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="inputTele">Telegram</label>
                    <input 
                        onChange={handleChangeTelegram}
                        type="text" 
                        className="form-control" 
                        id="inputTele" 
                        value={telegram}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="inputBio">Biography</label>
                    <textarea onChange={handleChangeBiography} className="form-control" id="inputBio" rows="3" value={bio}> </textarea>
                    <small id="bioHelp" className="form-text text-muted">Tell us something interesting about yourself! (e.g. your personality, teaching style, hobbies, etc.)</small>
                </div>

                <div className="form-group">
                    <label htmlFor="inputQual">Qualifications</label>
                    <textarea onChange={handleChangeQualif} className="form-control" id="inputBio" rows="3" value={qualif}> </textarea>
                    <small id="qualHelp" className="form-text text-muted">*to be edited later* (integrate with backend)</small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Upload File</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </div>

                <button type="submit" className="btn btn-info save-btn">Save Changes</button>
                
                </form>
            </main>
        </div>
    </div>);
}

export default EditMyProfile;