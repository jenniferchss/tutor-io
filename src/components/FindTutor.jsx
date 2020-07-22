import React, { useState, useEffect } from "react";
import axios from "../axios";
import SideNav from "./SideNav";
import {Image} from "cloudinary-react";

function FindTutor() {
    const [tutorList, setTutorList] = useState([]);
    
    useEffect(() => {
        const tutorname = localStorage.getItem('tutorname');

        axios().get('/user/findTutor', {
            tutorName: tutorname
          })
          .then ( res => {
            console.log("tutor list: " + JSON.stringify(res, null, 2))
            setTutorList(res);
          })
          .catch (err => {
            console.log(err);
          });
    }, []);

    function handleClick(userid) {
        localStorage.setItem('userid', userid);
        console.log('saved userid: ' + localStorage.getItem('userid'));
    }

    return (<div className="tutor-listing">
    <div className="row">
        <SideNav />

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 mods-pg">
            <div className="editprofile">
                <div className="card tab-content">

                    <h4 className="tutlist-modcode"><strong>{tutorList.length} </strong>results found</h4>

                    {tutorList.map(tutor => {
                    return (
                        <div className="card mb-3 tutor-card" key={tutor}>
                            <div className="row no-gutters">
                            <div className="col-md-3">
                            {tutor.tutorProfile.image === "" ? <img src={require("../images/profile@2x.png")} className="card-img tutor-img" alt="tutor-img" />
                            : <Image 
                                    key={tutor.tutorProfile.image}
                                    cloudName="dahuvufbf"
                                    publicId={tutor.tutorProfile.image}
                                    className="tutor-img"
                                    width="100%"
                                    crop="scale"
                            />} 
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h4 className="tutor-name">
                                    <a onClick={() => handleClick(tutor.tutorProfile.userID)} href="/profile">{tutor.tutorProfile.firstName} {tutor.tutorProfile.lastName}</a>
                                    </h4>
                                    <h6 className="major">{tutor.tutorProfile.major}</h6>
                                    {tutor.tutorProfile.biography.length > 100 ? <p>{tutor.tutorProfile.biography.slice(0,100)} ...</p>
                                    : <p>{tutor.tutorProfile.biography}</p>}
                                    <p className="text-muted">Teaching: {tutor.taughtModules.map((mod) => {return mod + ", "})}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 className="pricetag">${tutor.fee}</h3>
                                <p className="text-muted">per hour</p>
                            </div>
                        </div>   
                    </div>)
                    })}

                </div>
            </div>
        </main>
    </div>
</div>)
}

export default FindTutor;