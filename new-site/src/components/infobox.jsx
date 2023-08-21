import React from "react";
import "./infobox.css"

const Infobox = (props) => {
    return (
        <div class="outline">
            <h3>{props.header}</h3>
            <p>{props.subtext}</p>
            <p>{props.subtext2}</p>
        </div>
    );
}

export default Infobox;