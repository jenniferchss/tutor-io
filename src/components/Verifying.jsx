import React, { useEffect } from "react";
import axios from "../axios";
import { useHistory } from "react-router-dom";

function Verifying(props) {
    const history = useHistory();
    const token = props.match.params.token;
    console.log('params.token: ' + token);

    useEffect(() => {
    axios().post('/user/verifyUser', {
        token : token
    })
    .then ( res => {
        console.log(res);
        if (res.data.user.isVerified) {
            localStorage.setItem('usertoken', res.data.token);
            props.handleLogin();
            history.push('/editprofile');
        }
        else {
            history.push('/failedverify');
        }
    })
    .catch (console.error)
}, []);


    return (<div>

    </div>)
}

export default Verifying;