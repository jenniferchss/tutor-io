import React from "react";
import PropTypes from "prop-types";


function GreenAlert(props) {
    return(
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Yay!</strong> {props.msg}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

)}

// Alert.PropTypes = {
//     msg: PropTypes.string.isRequired
// }

export default GreenAlert;