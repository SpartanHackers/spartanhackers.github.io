import React from "react";
import "./darkswitch.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';


const Darkswitch = () => {
    return (
        <div class="toggle-container">
            <input type="checkbox" checked="true" id="dark-toggle"></input>
            <FontAwesomeIcon icon={faMoon} />
        </div>
        
    );
}

export default Darkswitch;


