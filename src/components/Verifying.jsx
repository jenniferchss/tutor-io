import React, { useEffect } from "react";
import axios from "../axios";
import { useHistory } from "react-router-dom";

function Verifying(props) {
    const history = useHistory();
    console.log('params.token: ' + props.match.params.token);

    useEffect(() => {
    axios().post('/user/verifyUser', {
        headers: {
            Authorization: props.match.params.token
        }
    })
    .then ( res => {
        console.log(res);
        if (res.user.isVerified) {
            localStorage.setItem('usertoken', res.data.token);
            props.handleLogin();
            history.push('/editmyprofile');
        }
        else {
            history.push('/failedverify');
        }
    })
    .catch ( err => {
        console.log(err)
    })
}, []);


    return (<div>

    </div>)
}

export default Verifying;