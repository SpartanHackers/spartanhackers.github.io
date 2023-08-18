import React from "react";
import navlogo from "../images/Copy of SH DARK.png";
import "./navbar.css"

/*import About from '../pages/about';
import Board from '../pages/board';
import Hackathons from '../pages/hackathons';
import Home from '../pages/index';
import Join from '../pages/join';
import FAQ from '../pages/questions';
import Schedule from '../pages/schedule';
import Workshop from '../pages/workshops';

import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';*/


const Navbar = () => {
    return (
        <nav>
            <a href="index.html">
                <img src={navlogo} class="logo"></img>
            </a>
            <ul>
                <li><a>About</a></li>
                <li><a>Join Us</a></li>
                <li><a>Schedule</a></li>
                <li><a>Hackathons</a></li>
                <li><a>Workshops</a></li>
                <li><a>EBoard</a></li>
                <li><a>FAQ</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;