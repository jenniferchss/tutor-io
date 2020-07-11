import React from "react";
import axios from "../axios";

function Verifying(props) {

    axios().post('/user/verifyUser', {
        headers: {
            Authorization: props.match.params.token
        }
    })
    .then ( res => {
        console.log(res)
    })
    .catch ( err => {
        console.log(err)
    })


    return (<div>

    </div>)
}

export default Verifying;