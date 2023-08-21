import React, { useState } from "react";
import "./darkswitch.css"
import { useColorScheme } from "../useColorScheme";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const Darkswitch = () => {
    // const { isDark, setIsDark } = useColorScheme();
    const [isDark, setIsDark] = useState(true);
    return (
        <div class="toggle-container">
            <input type="checkbox" defaultChecked="true" id="dark-toggle">
                {/* {this.props.options.map(o => <option key={o}>{o}</option>)} */}
            </input>
            <FontAwesomeIcon icon={faMoon} />
        </div>
    );
}
export default Darkswitch;

