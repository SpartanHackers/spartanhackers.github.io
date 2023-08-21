import React from "react";
import Darkswitch from "../components/darkswitch";
import Navbar from "../components/navbar";
import Pageheader from "../components/pageheader";
import Reversegreenback from "../components/reversegreenbackground";
import "./schedule.css"

const Schedule = () => {
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
                    <th>Date</th>
                    <th>Event</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jan. 17</td>
                    <td>Springticipation</td>
                    <td><a href=""></a></td>
                  </tr>
                  <tr>
                    <td>Jan. 19</td>
                    <td>First Meeting / Flutter Workshop I - Frontend + Code White Introduction</td>
                    <td><a href="https://economic-bowler-f58.notion.site/Flutter-Workshop-I-Frontend-1d0c586fb40a4d7799f442358fe810df">Flutter-Workshop-I-Frontend</a></td>
                  </tr>
                  <tr>
                    <td>Jan. 26</td>
                    <td>Flutter Workshop II - Backend</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Jan. 28-29</td>
                    <td>SpartaHack 8</td>
                    <td><a href="https://www.spartahack.com/">www.spartahack.com</a></td>
                  </tr>
                  <tr>
                    <td>Feb. 2</td>
                    <td>No workshop/ clubmeeting (take a break, Hackers)</td>
                    <td><a href=""></a></td>
                  </tr>
                  <tr>
                    <td>Feb. 9</td>
                    <td>Code White Official Launch and Team Building</td>
                    <td><a href=""></a></td>
                  </tr>
                  <tr>
                    <td>Feb. 16</td>
                    <td>No workshop/meeting</td>
                    <td><a href=""></a></td>
                  </tr>
                  <tr>
                    <td>Feb. 23</td>
                    <td>Code N Chat</td>
                    <td><a href=""></a></td>
                  </tr>
                  <tr>
                    <td>Mar. 2</td>
                    <td>Coding typing test and Social Night</td>
                    <td><a href></a></td>
                  </tr>
                  <tr>
                    <td>Mar. 9</td>
                    <td>Spring Break</td>
                    <td><a href></a></td>
                  </tr>
                  <tr>
                    <td>Mar. 16</td>
                    <td>Tesla Day</td>
                    <td><a href></a></td>
                  </tr>
                  <tr>
                    <td>Mar. 23</td>
                    <td>Interviews 101 Workshop</td>
                    <td><a href></a></td>
                  </tr>
                  <tr>
                    <td>Mar. 30</td>
                    <td>Andriod Studio Workshop</td>
                    <td><a href></a></td>
                  </tr>
                    <tr>
                    <td>Apr. 6</td>
                    <td>Machine Learning Model</td>
                    <td><a href></a></td>
                  </tr>
                  <tr>
                    <td>Apr. 13</td>
                    <td>Code N Chat</td>
                    <td><a href></a></td>
                  </tr>
                  <tr>
                    <td>Apr. 20</td>
                    <td>Code White Presentation Day! </td>
                    <td><a href></a></td>
                  </tr>
                </tbody>
            </table>
        </div>
    <Darkswitch />
</body>
    );
}

export default Schedule;