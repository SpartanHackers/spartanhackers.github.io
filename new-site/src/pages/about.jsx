import React from "react";
import Darkswitch from "../components/darkswitch";
import Infobox from "../components/infobox";
import Navbar from "../components/navbar";
import Pageheader from "../components/pageheader";
import Reversegreenback from "../components/reversegreenbackground";
import "./about.css"

const About = () => {
    return (
        <body>
   
    <Reversegreenback />
    <div id="header-container">
        <Pageheader header="About Us & What We Do" subtext="// Short Answer: Basically an MSU CSE Club, We Code Projects to Get Money/Prizes/Experience"/>
    </div>

        <div id="left-container">
            <Infobox header="Hackathons" subtext="The majority of what we do is go to Hackathons! Hackathons are 24-48 hour coding competitions and the fastest way to build real projects. While you're hacking, you can get to know representatives from companies like Google, Facebook, Microsoft, and more! Plus, every hackathon is filled to the brim with free food. Another plus, all hackathons we go to hand out prizes for winning projects. The highest 1st prize we've seen so far $10,000 CASH, but usually its been a Nintendo Switch + $500 for each team member on average these days. Visit Devpost.com to see past Hackathons and projects!"/>
        </div>
        <div id="middle-container">
            <Infobox header="Workshops" subtext="Spartan Hackers hosts events where students hang out, work on projects, share ideas, and learn about cool new technologies. We strive to create an environment where it's easy to meet some of the students at the forefront of innovation at MSU." subtext2="Previous Workshop Topics: Flutter, Android Studio, Interviews 101, Machine Learning, HTML/CSS, and iOS."/>
        </div>
        <div id="right-container">
            <Infobox header="Company Speakers" subtext="Spartan Hackers invites companies in the industry to come and share their experiences with us. These are also a great way to network with those companies and possibly land a full-time or internship position with them."/>
        </div>
    
</body>
    );
}

export default About;