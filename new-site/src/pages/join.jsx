import React from "react";
import Darkswitch from "../components/darkswitch";
import Infobox from "../components/infobox";
import Navbar from "../components/navbar";
import Pageheader from "../components/pageheader";
import Reversegreenback from "../components/reversegreenbackground";
import "./join.css"

const Join = () => {
    return (
        <body>
    <Navbar/>
    <Reversegreenback />
    <div id="header-container">
        <Pageheader header="Join Us" subtext="// Below are a few easy steps you can take to get involved with our club!"/>
    </div>

        <div id="left-container">
            <Infobox header="Discord and Instagram" subtext="Follow us on instagram to get pictures from events and hear about upcoming evens! Join our discord server to connect with other MSU CSE students and receive updates and reminders about upcoming workshops and events!"/>
        </div>
        <div id="middle-container">
            <Infobox header="Workshops and Meetings" subtext="Attend our weekly workshops and meetings where you can develop your existing technical skills, and gain new ones! Check out our schedule to see what's coming up!"/>
        </div>
        <div id="right-container">
            <Infobox header="Attend Hackathons" subtext="Apply to and attend hackathons! In our discord server we notify members of upcoming hackathons in the area. Or, you can look on devpost to find more hackathons!"/>
        </div>
    <Darkswitch />
</body>
    );
}

export default Join;