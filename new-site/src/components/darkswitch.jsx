import React from "react";
import "./darkswitch.css"


const Darkswitch = () => {
    return (
        <div class="toggle-container">
            <input type="checkbox" checked="true" id="dark-toggle"></input>
            <i class="fas fa-moon" id="toggle-dark-icon"></i>
        </div>
    );
}

export default Darkswitch;