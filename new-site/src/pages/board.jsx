import React from "react";
import Darkswitch from "../components/darkswitch";
import Infobox from "../components/infobox";
import Navbar from "../components/navbar";
import Pageheader from "../components/pageheader";
import Reversegreenback from "../components/reversegreenbackground";
import "./board.css"

const Board = () => {
    return (
        <body>
    <Navbar/>
    <Reversegreenback />
    <div id="header-container">
        <Pageheader header="Our EBoard" subtext="// This is our current 2023 executive board! These are the students that organize meetings and events. If you are interested, a new executive board is made every winter, so be ready to apply when the time comes!"/>
    </div>

    <div id="left-top">
        <Infobox header="President" subtext="Rajmeet"/>
    </div>
    <div id="middle-top">
        <Infobox header="Hackathon Chair" subtext="Aarham"/>
    </div>
    <div id="right-top">
        <Infobox header="Treasurer" subtext="Mehtab"/>
    </div>

    <div id="left-bottom">
        <Infobox header="Graphic Designer" subtext="Anuj"/>
    </div>
    <div id="middle-bottom">
        <Infobox header="Outreach Chair" subtext="Divyalakshmi"/>
    </div>
    <div id="right-bottom">
        <Infobox header="Graphic Designer" subtext="Rachel"/>
    </div>
    <Darkswitch />
</body>
    );
}

export default Board;