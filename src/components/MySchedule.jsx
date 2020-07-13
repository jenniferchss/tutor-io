import React, { useState } from "react";
import axios from "../axios";

function MySchedule(props) {
    // const [calendarURL, setCalendarURL] = useState(props.calendarURL);
    const [URL, setURL] = useState("");
    // console.log("before input: " + calendarURL)
    // console.log("URL: " + URL)

    function handleChangeURL(event) {
        const URL = event.target.value;
        setURL(URL);
    }

    function handleSubmit() {
        const token = localStorage.getItem('usertoken');
        const store = URL;
        
        // console.log("after input: " + calendarURL);

        axios().post('/user/updateCalendarLink', {
            link: store,
            headers:{
                Authorization: token
            }
        })
        .then( res => {
            console.log("UPDATE CALENDAR: " + res)
        })
        .catch( err => {
            console.log(err)
        });
        // setCalendarURL(URL);
    }

    return (<div className='card'>
        <h4 className='profile-title card-header'>MY SCHEDULE</h4>
        {localStorage.getItem('calendarURL') === undefined ? 
        <div className="form-group sync-calendar">
            <label className="inputCalURL"
            htmlFor="inputURL">Sync Google Calendar</label>
            <small>Sync your google calendar here for effortless scheduling. 
                To do this:
            <ol>
                <li>Go to your Google Calendar > Settings.</li>
                <li>Select the calendar you want to sync at the left side of your screen.</li>
                <li>Under 'Integrate Calendar', copy the 'Public URL to this calendar' and paste it into the box below.</li>
                <li>And you're good to go!</li>
            </ol>
            </small>
            <input 
                onChange={handleChangeURL}
                type="text" 
                className="form-control calendarURL-box" 
                id="inputURL" 
                value={URL} 
            />
            <button onClick={handleSubmit} type="submit" className="btn btn-info sync-btn">Sync</button>
        </div> : 
    
    <iframe 
        title="my-calendar"
        src={localStorage.getItem('calendarURL')} 
        style={{border:0}}
        width="100%" 
        height="600" 
        frameborder="0" 
        scrolling="no">
    </iframe>}
</div>);
}

export default MySchedule;