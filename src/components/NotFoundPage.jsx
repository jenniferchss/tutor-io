import React from "react";
import Loader from 'react-loader-spinner';


const NotFoundPage = () => (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center error-page">
        <Loader type="ThreeDots" color="#66afbb" height="100" width="100" />
        <div className="text-black">Please click on the logo if the page is still loading after some time.</div>
    </div>
);

export default NotFoundPage;