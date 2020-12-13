import React from 'react';
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/all";
import perf from "../../../ide/img/prof.jpg"
import resume from "../../../ide/Resume.pdf";
function Profile(){
    return(
        <div className="profile">
            <div className="photo" style={{backgroundImage: `url(${perf})`}}>

            </div>
            <h2>Raul Guillen</h2>
            <h3>BEng Student in Computer Science Engineering</h3>
            <h3>Universidad Centroamericana Jose Simeon Cañas</h3>
            <a href={resume} target="_blank" style={{color:"#0095eb"}} className="mb-3">Resume</a>
            <ul className="contacts">
                <li><a href="https://github.com/RauPro/" target="_blank" className="link"><FaGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/RauPro" target="_blank" className="link"><FaLinkedin/></a></li>
                <li><a href="mailto:00012119@uca.edu.sv" target="_blank" className="link"><FaEnvelope/></a></li>
            </ul>
        </div>
    );
}
export default Profile;