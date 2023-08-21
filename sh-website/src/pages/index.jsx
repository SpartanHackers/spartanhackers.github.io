import React from "react";
import Darkswitch from "../components/darkswitch";
import Greenback from "../components/greenbackground";
import logo from "../images/SH LOGO.png";
import "./index.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Index = () => {
    return (
        <body>
             <Greenback />
            
            <h1 id="header">SPARTAN HACKERS</h1>
            <h2 id="header2">Michigan State University</h2>
            <h3 id="header3">Computer Science & Engineering Club</h3>
            <img src={logo} id="home-logo"></img>
            <h3 id="information">Exploring the world of computer science to solve problems and expand our creativity</h3>
            <p id = "join-text">Join our community today!</p>
            <div id="icons">
                <a href="https://discord.gg/qtUJYu6xNe" target="_blank"><FontAwesomeIcon icon={faDiscord} /></a>
                <a href="https://instagram.com/spartan_hackers?igshid=MzRlODBiNWFlZA==" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
         
            <Darkswitch />
        </body>
    );
}

export default Index;