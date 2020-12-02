import React from 'react';
import Profile from "./Containers/Profile";
import Information from './Containers/Information'
import Skills from "./Skills";
function AboutMe(){
    return (
        <>
        <section>
           <Profile/>
           <Information/>
        </section>
        <Skills/></>
    );
}
export default AboutMe;