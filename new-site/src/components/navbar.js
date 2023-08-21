import React from "react";
import navlogo from "../images/Copy of SH DARK.png";
import "./navbar.css"
import { Link } from "react-router-dom";

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


export default class Navbar extends React.Component {
    render() { 
        return (
        <nav>
            <Link to="/">
                <img src={navlogo} class="logo"></img>
            </Link>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/join">Join Us</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/hackathons">Hackathons</Link></li>
                <li><Link to="/workshops">Workshops</Link></li>
                <li><Link to="/board">EBoard</Link></li>
                <li><Link to="/questions">FAQ</Link></li>
            </ul>
        </nav>
        );
    }
}