import React, { useState, useEffect } from 'react';
import SideNav from "./SideNav";
import axios from "../axios";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Alert from "./Alert";
import GreenAlert from "./GreenAlert";
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from "./LoadingIndicator";


function TutorRegistration() {
    const [options, setOptions] = useState([])
    const [isTutor, setIsTutor] = useState(false)
    const [moduleCode, setModuleCode] = useState(options[0])
    const [inputCode, setInputCode] = useState("")
    const [modulesTaught, setModulesTaught] = useState([])
    const [fee, setFee] = useState("")
    const [alert, setAlert] = useState("");
    const [message, setMessage] = useState("");
    // const history = useHistory();
    // const [toDelete, setToDelete] = useState("");

    // console.log("moduleCode: " + JSON.stringify(moduleCode, null, 2));
    // console.log("inputCode: " + JSON.stringify(inputCode, null, 2));
    useEffect(() => {
        const token = localStorage.getItem('usertoken');

        //GET USER TUTOR STATUS//
        trackPromise(axios().get('/user/userProfile', {
            headers:{
              Authorization: token
            }
        })
        .then (res => {
            const isTutor = res.data.tutor.tutorProfile.isTutor;
            console.log("GET PROFILE: " + JSON.stringify(res, null, 2));
            console.log("isTutor: " + isTutor);
            setIsTutor(isTutor);
        })
        .catch (err => {
            console.log(err);
        }));

        //GET ALL MODULE CODE LIST//
        axios().get('/user/getAllModules')
        .then ( res => {
            // console.log("GET MODULES: " + JSON.stringify(res.data, null, 2))
            setOptions(res.data);
        })
        .catch (err => {
            console.log(err);
        });

        //GET ALL TAUGHT MODULES//
        trackPromise(axios().get('/user/getTaughtModules', {
            headers:{
              Authorization: token
            }
        })
        .then ( res => {
            console.log("TAUGHT MODULES: " + res.data);
            setModulesTaught(res.data);
        })
        .catch (err => {
            console.log(err);
        }));

        //GET TUTOR FEES
        trackPromise(axios().get('/user/getFee', {
            headers:{
                Authorization: token
              }
        })
        .then ( res => {
            // console.log("FEE: " + res.data);
            setFee(res.data);
        })
        .catch (err => {
            console.log(err);
        }));

    }, [])

    const groupedOptions = options.map((option) => {
        const firstLetter = option.name[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
    });

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


    function handleSubmit(event) {
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

        axios().put ('/user/addModule',{
            name: moduleCode,
            moduleTitle: moduleTitle,
            faculty: faculty,
            headers:{
                Authorization: token
            }
        })
        .then(function(res) {
            console.log(res);
            if (res.data === 'Registered') {
                setAlert("You have registered this module before!")
            }
            else {
                setMessage("You have successfully registered!")
            }
        })
        .catch(function(err) {
            console.error(err);
        });
    }

    function deleteRegMod(item) {
        
        const token = localStorage.getItem('usertoken');
        const module = item;
        // console.log("Ini module yang dikirim " + module)
        axios().put('/user/deleteModule', {
            module: module,
            headers:{
                Authorization: token
            }
        })
        .then (res => {
            console.log("UPDATED TAUGHT MODULES: " + JSON.stringify(res.data, null, 2))
            deleteItem();
            // history.push('/tutorregis')
            
        })
        .catch (err => {
            console.log(err);
        });
        
    }

    function deleteItem() {
        /* Get all elements with class="delete-mod" */
        var closebtns = document.getElementsByClassName("delete-mod");
        var i;

        /* Loop through the elements, and hide the parent, when clicked on */
        for (i = 0; i < closebtns.length; i++) {
            closebtns[i].addEventListener("click", function() {
            this.parentElement.style.display = 'none';
            });
        }
    }

    function handleChangeFee(event) {
        const fee = event.target.value;
        setFee(fee);
    }

    function handleSaveFee(event) {
        event.preventDefault();
        const token = localStorage.getItem('usertoken');
        axios().put('/user/updateFee', {
            fee: fee,
            headers:{
                Authorization: token
            }
        })
        .then ( res => {
            console.log(res);
            setMessage("Change of fee saved!");
        })
        .catch (err => {
            console.log(err);
        })
    }

    function handleDeactivate() {
        const token = localStorage.getItem('usertoken');
        axios().put('/user/deleteTutor', {
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
                {alert ? <Alert msg={alert}/> : null}
                {message ? <GreenAlert msg={message}/> : null}
                <LoadingIndicator/>
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
                                    setModuleCode(newValue.name);
                                    }}
                                    inputValue={inputCode}
                                    onInputChange={(event, newInputValue) => {
                                    setInputCode(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    // options={groupedOptions.map((option) => option.name)}
                                    options={groupedOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                    groupBy={(option) => option.firstLetter}
                                    getOptionLabel={(option) => option.name}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Search Module" variant="outlined" />}
                                />

                            </div>
                            <div className="form-group col-md-6">
                                <button type="submit" className="btn btn-info mod-regis-btn">Submit</button>
                            </div>
                        </div>
                    </form>
                    

                    <label className="module-code">MODULES LISTED</label>
                    <table id="modules-listed" className="table mod-list">
                        <thead>
                            <tr>
                            <th id="mod-listed-title" className="table-title" scope="col">Module Code</th>
                            </tr>
                        </thead>
                        
                        <ul id="ul-regmod"className="mod-reg-ul">
                            <LoadingIndicator/>
                            {modulesTaught.map(module => {
                                // setToDelete(module);
                                return (
                                    <li className="mod-reg-li" key={module}>{module}<span onClick={() => deleteRegMod(module)} className="delete-mod">x</span></li>
                                )
                            })}
                        </ul>
                        
                    </table>


                    <label className="module-code">FEE OFFERED</label>
                    <small className="small-note-fee">This fee will be displayed on your profile, and this fee will be offered for all modules you are teaching. You can put in a range if you are offering different prices for different modules!</small>
                    <LoadingIndicator/>
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
                            <button onClick={handleSaveFee} type="submit" className="btn btn-info">Save</button>
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
