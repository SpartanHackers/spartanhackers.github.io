import React from "react";
import Darkswitch from "../components/darkswitch";
import Infobox from "../components/infobox";
import Navbar from "../components/navbar";
import Pageheader from "../components/pageheader";
import Reversegreenback from "../components/reversegreenbackground";
import "./questions.css"

const FAQ = () => {
    return (
        <body>
    <Navbar/>
    <Reversegreenback />
    <div id="header-container">
        <Pageheader header="Frequently Asked Questions" subtext="// Didn't find your question? Email us at: contact.spartanhackers@gmail.com"/>
    </div>

        <div id="left-container">
            <Infobox header="What is hacking?" subtext="Your probably thinking cyber security, sorry to confuse you but we our hacking is a little different. A computer hacker is any skilled computer expert who uses their technical knowledge to overcome a problem. In this case we build cool tech projects for fun and to develop more skills. Check out devpost. It will give you a better understanding of what kind of projects we're talking about."/>
        </div>
        <div id="middle-container">
            <Infobox header="What if I can't code?" subtext="No problem! As long as you're passionate about how technology can shape the future and want to grow your technical skills, you'll fit right in. We offer lots of events to help teach coding skills! No prior experience is needed."/>
        </div>
        <div id="right-container">
            <Infobox header="What if I missded the first meeting, can I still join?" subtext="Absolutely! You can find all of our events in the Spartan Hackers Instagram and Discord. No prior knowledge or experience is needed, so come say hi!"/>
        </div>
    <Darkswitch />
</body>
    );
}

export default FAQ;