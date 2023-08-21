import React from "react";
import "./pageheader.css"

const Pageheader = (props) => {
    return (
        <div id="container">
            <h2>{props.header}</h2>
            <h6>{props.subtext}</h6>
        </div>
    );
}

export default Pageheader;