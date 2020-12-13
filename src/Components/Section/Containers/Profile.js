import React from 'react';
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/all";
import perf from "../../../ide/img/prof.jpg"
function Profile(){
    return(
        <div className="profile">
            <div className="photo" style={{backgroundImage: `url(${perf})`}}>

            </div>
            <h2>Raul Guillen</h2>
            <h3>BEng Student in Computer Science Engineering</h3>
            <h3>Universidad Centroamericana Jose Simeon Cañas</h3>
            <ul className="contacts">
                <li><a href="#" className="link"><FaGithub/></a></li>
                <li><a href="#" className="link"><FaLinkedin/></a></li>
                <li><a href="#" className="link"><FaEnvelope/></a></li>
            </ul>
        </div>
    );
}
export default Profile;