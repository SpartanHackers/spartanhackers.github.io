import React from "react";
import Darkswitch from "../components/darkswitch";
import Navbar from "../components/navbar";
import Pageheader from "../components/pageheader";
import Reversegreenback from "../components/reversegreenbackground";
import flutter1 from "../images/workshops/flutterWorkshop1.jpg";
import "./workshops.css"

const Workshop = () => {
    return (
        <body>
    
    <Reversegreenback />
    <div id="header-container">
        <Pageheader header="Tentative Schedule" subtext="// Time & Dates are subject to change"/>
    </div>

    <div class="table-container">
            <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Gallery</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Flutter - Frontend</td>
                <td>Jan. 19th, 2023</td>
                <td><img src={flutter1} id="flutter1"></img></td>
                <td><a href="https://economic-bowler-f58.notion.site/Flutter-Workshop-I-Frontend-1d0c586fb40a4d7799f442358fe810df">Notion</a></td>
              </tr>
              <tr>
                <td>Discord Bot</td>
                <td>March 17th, 2021</td>
                <td></td>
                <td><a href="https://youtu.be/dewiKU5sIzs">YouTube</a></td>
              </tr>
              <tr>
                <td>Flask</td>
                <td>Feb. 24th, 2021</td>
                <td></td>
                <td><a href="https://youtu.be/dewiKU5sIzs">YouTube</a></td>
              </tr>
            </tbody>
            </table>
        </div>
    <Darkswitch />
</body>
    );
}

export default Workshop;