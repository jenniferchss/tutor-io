import React from "react";
import PropTypes from "prop-types";


function Alert(props) {
    return(
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Oops!</strong> {props.msg}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

)}

// Alert.PropTypes = {
//     msg: PropTypes.string.isRequired
// }

export default Alert;