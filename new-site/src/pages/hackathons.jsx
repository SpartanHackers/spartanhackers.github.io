import React from "react";
import Darkswitch from "../components/darkswitch";
import Navbar from "../components/navbar";
import Pageheader from "../components/pageheader";
import Reversegreenback from "../components/reversegreenbackground";
import "./hackathons.css"

const Hackathons = () => {
    return (
        <body>
    <Navbar/>
    <Reversegreenback />
    <div id="header-container">
        <Pageheader header="Hackathons" subtext="// Below is a list of upcoming hackathons that we encourage you to participate in!"/>
    </div>

    <div class="table-container">
            <table>
                <thead>
                  <tr>
                    <th>Hackathon</th>
                    <th>Date</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pennapps</td>
                    <td>Sept. 8</td>
                    <td><a href="https://2023f.pennapps.com/">https://2023.hackduke.org/</a></td>
                  </tr>
                  <tr>
                    <td>Hackduke</td>
                    <td>Sept. 8</td>
                    <td><a href="https://2023.hackduke.org/">https://2023.hackduke.org/</a></td>
                  </tr>
                  <tr>
                    <td>Shellhacks</td>
                    <td>Sept. 15</td>
                    <td><a href="https://hackmit.org/">https://hackmit.org/</a></td>
                  </tr>
                  <tr>
                    <td>HackMIT</td>
                    <td>Sept. 16</td>
                    <td><a href="https://www.spartahack.com/">www.spartahack.com</a></td>
                  </tr>
                  <tr>
                    <td>Hackrice</td>
                    <td>Sept. 22</td>
                    <td><a href="https://hack.rice.edu/">https://hack.rice.edu/</a></td>
                  </tr>
                  <tr>
                    <td>Hackuiowa</td>
                    <td>Sept. 23</td>
                    <td><a href="https://hack.uiowa.edu/">https://hack.uiowa.edu/</a></td>
                  </tr>
                  <tr>
                    <td>NASA Space Apps</td>
                    <td>Oct. 7</td>
                    <td><a href="https://www.spaceappschallenge.org/">https://www.spaceappschallenge.org/</a></td>
                  </tr>
                  <tr>
                    <td>Hackgt</td>
                    <td>Oct. 13</td>
                    <td><a href="https://hack.gt/">https://hack.gt/</a></td>
                  </tr>
                  <tr>
                    <td>dubhacks</td>
                    <td>Oct. 14</td>
                    <td><a href="https://dubhacks.co/">https://dubhacks.co/</a></td>
                  </tr>
                  <tr>
                    <td>Hackharvard</td>
                    <td>Oct. 20</td>
                    <td><a href="https://hackharvard.io/">https://hackharvard.io/</a></td>
                  </tr>
                  <tr>
                    <td>Hacktx</td>
                    <td>Oct. 21</td>
                    <td><a href="https://hacktx.com/">https://hacktx.com/</a></td>
                  </tr>
                  <tr>
                    <td>Calhacks</td>
                    <td>Oct. 27</td>
                    <td><a href="https://www.calhacks.io/">https://www.calhacks.io/</a></td>
                  </tr>
                  <tr>
                    <td>Hackohio</td>
                    <td>Oct. 28</td>
                    <td><a href="https://hack.osu.edu/">https://hack.osu.edu/</a></td>
                  </tr>
                    <tr>
                    <td>Hackprinceton</td>
                    <td>Nov. 10</td>
                    <td><a href="https://www.hackprinceton.com/">https://www.hackprinceton.com/</a></td>
                  </tr>
                </tbody>
              </table>
        </div>
    <Darkswitch />
</body>
    );
}

export default Hackathons;