import React from "react";

function MySchedule() {
    return (<div className='card'>
        <h4 className='profile-title card-header'>MY SCHEDULE</h4>
        <iframe 
            title="my-calendar"
            src="https://calendar.google.com/calendar/embed?src=ioqq7kppe5jbhg8crcqbut7r04%40group.calendar.google.com&ctz=Asia%2FSingapore" 
            style={{border:0}}
            width="100%" 
            height="600" 
            frameborder="0" 
            scrolling="yes">
        </iframe>
    </div>);
}

export default MySchedule;