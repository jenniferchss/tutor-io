import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
// import { usePromiseTracker } from "react-promise-tracker";
// import Loader from 'react-loader-spinner';

// const LoadingIndicator = props => {
//     const { promiseInProgress } = usePromiseTracker();
//     return (
//         promiseInProgress &&
//         <div style={{
//             width: "100%",
//             height: "100",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: "99"
//         }}>
//             <Loader type="ThreeDots" color="#66afbb" height="100" width="100" />
//         </div>
//     );
// }

ReactDOM.render(
    <div>
        {/* <LoadingIndicator /> */}
        <App />
        
    </div>,
    document.getElementById("root"));
