import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import axios from "../axios";
import { useHistory } from "react-router-dom";
import GreenAlert from "./GreenAlert";
import AvatarEditor from "react-avatar-editor";
import {Image} from "cloudinary-react";


function EditMyProfile() {
    const [fileInputState, setFileInputState] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [imageId, setImageId] = useState("");
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [major, setMajor] = useState("")
    const [faculty, setFaculty] = useState("")
    const [year, setYear] = useState("")
    const [telegram, setTelegram] = useState("")
    const [bio, setBiography] = useState("")
    const [qualif, setQualifications] = useState("")
    const [message, setMessage] = useState("");
    const history = useHistory();

    // const [state, setState] = useState({
    //     image: imageId,
    //     allowZoomOut: false,
    //     position: { x: 0.5, y: 0.5 },
    //     scale: 1,
    //     rotate: 0,
    //     borderRadius: 120,
    //     preview: null,
    //     width: 200,
    //     height: 200,
    //     editor: null
    // })
    
    function handleFileInputChange(event) {
        const file = event.target.files[0]
        previewFile(file);
    }
    function previewFile(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }
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
    // function handleScale(event) {
    //     const scale = parseFloat(event.target.value)
    //     setScale(scale)
    // }
    

    useEffect(() => {
        const token = localStorage.getItem('usertoken');

        axios().get('/user/userProfile', {
            headers:{
              Authorization: token
            }
        })
        .then (res => {
            if (res.data.tutor === undefined) {
                console.log("LOAD DATA no tutor: " + JSON.stringify(res, null, 2));
                console.log("res.data.tutor: " + res.data.tutor);
                const imageId = res.data.image;
                const fname = res.data.firstName;
                const lname = res.data.lastName;
                const major = res.data.major;
                const faculty = res.data.faculty;
                const year = res.data.year;
                const telegram = res.data.telegram;
                const bio = res.data.biography;
                const qualif = res.data.qualifications;
                setImageId(imageId);
                setFName(fname);
                setLName(lname);
                setMajor(major);
                setFaculty(faculty);
                setYear(year);
                setTelegram(telegram);
                setBiography(bio);
                setQualifications(qualif);
            }
            else {
                console.log("LOAD DATA tutor: " + JSON.stringify(res, null, 2));
                const imageId = res.data.tutor.tutorProfile.image;
                const fname = res.data.tutor.tutorProfile.firstName;
                const lname = res.data.tutor.tutorProfile.lastName;
                const major = res.data.tutor.tutorProfile.major;
                const faculty = res.data.tutor.tutorProfile.faculty;
                const year = res.data.tutor.tutorProfile.year;
                const telegram = res.data.tutor.tutorProfile.telegram;
                const bio = res.data.tutor.tutorProfile.biography;
                const qualif = res.data.tutor.tutorProfile.qualifications;
                setImageId(imageId);
                setFName(fname);
                setLName(lname);
                setMajor(major);
                setFaculty(faculty);
                setYear(year);
                setTelegram(telegram);
                setBiography(bio);
                setQualifications(qualif);
            }
        })
        .catch (err => {
            console.log(err);
        })
    }, [])

    function handleSubmitFile(event) {
        console.log("submitting");
        event.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource);
        setMessage("Profile picture is changed!");
    }

    async function uploadImage(base64EncodedImage) {
        console.log(base64EncodedImage);
        const token = localStorage.getItem('usertoken')
        try {
            await axios().post('/user/uploadImage', {
                fileString: base64EncodedImage,
                headers: {
                    Authorization: token
                }
            })
        }
        catch (error) {
            console.log(error);
        }
    }

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
            setMessage("Changes saved!");
            history.push('/dashboard');
        })
        .catch (err => {
            console.log("ERROR SAVE: " + err);
        })
    }

    // function handleScale(event) {
    //     const scale = event.target.value;
    //     setScale(scale);
    // }


    return (<div className="editprofile">
        <div className="row">
            <SideNav />
            
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                {message ? <GreenAlert msg={message}/> : null}
                <h3 className="page-title">Edit My Profile</h3>
                <hr></hr>
                <form onSubmit={handleSubmitFile}>
                    <p className="profile-pic">Change Profile Picture</p>
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileInputChange}
                        value={fileInputState}
                        className="form-input upload-file"
                    />
                    {previewSource && (<div>
                        <img
                        src={previewSource}
                        // width={250}
                        // height={250}
                        // border={50}
                        // color={[255, 255, 255, 0.6]}
                        // scale={1.2}
                        // rotate={0}
                        alt="chosen"
                        className="profpict-preview"
                        // crossOrigin="anonymous"
                        style={{height: '150px'}}
                        />
                        {/* <input type="range" onChange={handleScale}>Zoom</input> */}
                    
                    {/* <input 
                        name = "scale" 
                        type = "range" 
                        onChange = {handleScale}
                        min = "1"
                        max = "2"
                        step ="0.01"
                        defaultValue = "1"
                    > Zoom </input>   */}
                    </div>
                    )}
                    <button className="btn btn-sm btn-info" id="upload-btn" type="submit">Upload</button>
                </form>
                

                <form onSubmit={handleSave}>
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
                    <small id="qualHelp" className="form-text text-muted">Tell your prospective students your qualifications. (e.g. grades of taken modules)</small>
                </div>

                {/* <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Upload File</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </div> */}

                <button type="submit" className="btn btn-info save-btn">Save Changes</button>
                
                </form>
            </main>
        </div>
    </div>);
}

export default EditMyProfile;