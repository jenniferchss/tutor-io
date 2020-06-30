import React, { useState, useEffect } from 'react';
import SideNav from "./SideNav";
import axios from "../axios";
import DeleteRegMod from "./DeleteRegMod";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


function TutorRegistration() {
    const [options, setOptions] = useState([])
    const [isTutor, setIsTutor] = useState(false)
    const [moduleCode, setModuleCode] = useState(options[0])
    const [inputCode, setInputCode] = useState("")
    // const [moduleTitle, setModuleTitle] = useState("")
    // const [faculty, setFaculty] = useState("")
    const [fee, setFee] = useState("")


    useEffect(() => {
        const token = localStorage.getItem('usertoken');

        //GET USER TUTOR STATUS//
        axios().get('/user/userProfile', {
            headers:{
              Authorization: token
            }
        })
        .then (res => {
            const isTutor = res.data[0].isTutor;
            console.log("GET PROFILE: " + JSON.stringify(res, null, 2));
            console.log("isTutor: " + isTutor);
            setIsTutor(isTutor);
        })
        .catch (err => {
            console.log(err);
        });

        //GET ALL MODULE CODE LIST//
        axios().get('/user/getAllModules')
        .then ( res => {
                console.log(res.data)
                setOptions(res.data)

            })
        .catch (err => {
            console.log(err);
        });

    }, [])

    function handleClickYes() {
        const token = localStorage.getItem('usertoken');
        axios().patch('/user/createTutor', {
            headers:{
              Authorization: token
            }
        })
        .then (res => {
            const isTutor = true;
            console.log("UPDATE PROFILE: " + JSON.stringify(res, null, 2));
            console.log("isTutor: " + isTutor);
            setIsTutor(isTutor);
        })
        .catch (err => {
            console.log(err);
        })
        
    }

    // function handleChangeModule(value) {
    //     const module = value;
    //     console.log(module);
    //     // console.log(event.target.value);
    //     setModuleCode(module);
    // }

    function handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem('usertoken');
        let moduleTitle = "";
        let faculty = "";


        let i = 0;
        for (i = 0; i<2231; i++) {
            if (options[i].name === moduleCode) {
                // console.log("options: " + JSON.stringify(options[i], null, 2));
                // console.log("moduleTile: " + options[i].moduleTitle);
                // console.log("faculty: " + options[i].faculty);
                moduleTitle = options[i].moduleTitle;
                faculty = options[i].faculty;
                // console.log("KETEMU: " + moduleTitle + ", " + faculty);
            }
        }
        // setModuleTitle(options[i].moduleTitle);
        // setFaculty(options[i].faculty);
        // console.log("moduleCode: " + moduleCode);
        // console.log("moduleTitle: " + moduleTitle);
        // console.log("faculty: " + faculty);

        axios().put ('/user/addModule',{
            name: moduleCode,
            moduleTitle: moduleTitle,
            faculty: faculty,
            headers:{
                Authorization: token
            }
        })
        .then(function(res) {
            console.log(res)
            alert("You have successfully registered!")
        })
        .catch(function(err) {
            console.error(err);
        });
    }

    function handleChangeFee(event) {
        const fee = event.target.value;
        setFee(fee);
    }



    function handleDeactivate() {
        const token = localStorage.getItem('usertoken');
        axios().delete('/user/deleteTutor', {
            headers:{
              Authorization: token
            }
        })
        .then (res => {
            const isTutor = false;
            console.log("UPDATE PROFILE: " + JSON.stringify(res, null, 2));
            console.log("isTutor: " + isTutor);
            setIsTutor(isTutor);
        })
        .catch (err => {
            console.log(err);
        })

    }

    

    return (<div className="tutor-registration">
        <div className="row">
            <SideNav />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <h3 className="page-title" 
                    data-toggle="tooltip" 
                    data-placement="bottom" 
                    title="You are by default a tutee. You can be a tutor by simply registering the module you want to teach below.">
                    Tutor Registration</h3>
                <hr></hr>

                <div id="before-reg" className={`${isTutor ? "hide-div" : ""}`}>
                    <h5 className="tutor-reg">Do you want to register to be a tutor?</h5>
                    <button onClick={handleClickYes} type="submit" className="btn btn-info">Yes, I want to help my peers!</button>
                </div>

                <div id="after-reg" className={`${isTutor ? "" : "hide-div"}`}>
                    <form onSubmit={handleSubmit}>
                    
                        <label className="module-code">MODULE CODE</label>
                        <div className="form-row modcode-row">
                            <div className="form-group col-md-6">
                                <Autocomplete
                                    value={moduleCode}
                                    onChange={(event, newValue) => {
                                    setModuleCode(newValue);
                                    }}
                                    inputValue={inputCode}
                                    onInputChange={(event, newInputValue) => {
                                    setInputCode(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={options.map((option) => option.name)}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Search Module" variant="outlined" />}
                                />

                            </div>
                            <div className="form-group col-md-6">
                                <button type="submit" className="btn btn-info mod-regis-btn">Submit</button>
                            </div>
                        </div>
                    </form>
                    

                    {/* <label className="module-code">MODULES LISTED</label> */}
                    {/* <table id="modules-listed" class="table mod-list"> */}
                        {/* <thead>
                            <tr>
                            <th id="mod-listed-title" className="table-title" scope="col">Module Code</th>
                            </tr>
                        </thead> */}
                        {/* <tbody> */}
                        {/* <ul id="ul-regmod"className="mod-reg-ul">
                            <li className="mod-reg-li">CS1010<span onClick={DeleteRegMod} className="delete-mod">x</span></li>
                            <li className="mod-reg-li">CS1010S<span onClick={DeleteRegMod} className="delete-mod">x</span></li>
                            <li className="mod-reg-li">CS1101S<span onClick={DeleteRegMod} className="delete-mod">x</span></li>
                            <li className="mod-reg-li">CS2030<span onClick={DeleteRegMod} className="delete-mod">x</span></li>
                            <li className="mod-reg-li">CS2040<span onClick={DeleteRegMod} className="delete-mod">x</span></li>
                        </ul> */}
                        {/* </tbody> */}
                    {/* </table> */}
                    <label className="module-code">FEE OFFERED</label>
                    <div className="form-row fee-offered">
                        <div className="form-group col-md-6">
                            <input 
                                onChange={handleChangeFee} 
                                type="text" 
                                className="form-control" 
                                id="inputFee" 
                                value={fee} 
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <button type="submit" className="btn btn-info mod-regis-btn">Save</button>
                        </div>
                    </div>

                    <hr />
                    <h5 className="module-code deactivate-acc">Deactivate Tutor Account</h5>
                    <small className="deactivate-sm">Once you deactivate your tutor account, the list of your taught modules will be deleted. 
                        You can still register to be a tutor in the future, but the list of your modules taught in 
                        the past cannot be recovered.</small>
                    <button onClick={handleDeactivate} type="submit" className="btn btn-danger btn-sm deactivate-btn">Deactivate</button>

                </div>
                
            </main>
        </div>
    </div>);
}

export default TutorRegistration;
