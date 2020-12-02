import React from "react";
import AlgoImg from "../../ide/img/algorithms.png"
import WebImg from "../../ide/img/web.png"
import {DiCss3, DiMongodb, FaBootstrap, FaHtml5, FaNodeJs, FaReact, FaSass, SiJavascript} from "react-icons/all";
import {IconContext} from "react-icons";
function Skills(){
    return(
        <section className="skills">

            <h1>Skills</h1>
            <div className="main">
                <div className="box">
                    <div className="box-img">
                        <div id="classImgSkill">
                            <h1>Web Development</h1>
                            <img id="webImg" src={WebImg} width="70%" height="70%"/>
                        </div>
                    </div>
                    <div className="content1 d-flex justify-content-around flex-wrap align-items-center">
                        <IconContext.Provider value={{ size: '110px' }}>
                        <FaHtml5 color="#ff5203"/>
                        <DiCss3 color="#039aff"/>
                        <SiJavascript color="#ffee00"/>
                        <FaReact color="#00e5ff"/>
                        <FaNodeJs color="#14d902"/>
                        <FaSass color="#eb00b0"/>
                        <FaBootstrap color="#570069"/>
                        <DiMongodb color="#048a04"/></IconContext.Provider>
                    </div>
                </div>
                <div className="box">
                    <div className="box-img">
                        <div>
                            <h1>Algorithms</h1>
                            <img src={AlgoImg} width="70%" height="70%"/>
                        </div>
                    </div>
                    <div className="content2 d-flex justify-content-around flex-wrap">
                            <div className="d-flex flex-column">
                                <img width="110" src="https://community-app-cdn.topcoder.com/static-assets/images/0134babc6283c1341219815cac4414cd.svg" alt="Brute Force Icon"/>
                                Brute Force
                            </div>
                            <div className="d-flex flex-column">
                                <svg width="110" height="110" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#058D4B" x="9" y="9" width="50" height="50" rx="4"></rect><rect fill="#05C14F" x="5" y="5" width="50" height="50" rx="4"></rect><g stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M29.267 45.467H17.533v-8.534h11.734v8.534zM28.884 19.403h11.045v3.487M30.174 41.62h9.822v-4.514M28.429 19.714A5.714 5.714 0 1 1 17 19.715a5.714 5.714 0 0 1 11.428 0z"></path><path d="M39.961 22.665l-7.325 7.324 7.325 7.325 7.325-7.325-7.325-7.324z"></path></g></g></svg>
                                Greedy
                            </div>
                            <div className="d-flex flex-column">
                                <img width="110" src="https://community-app-cdn.topcoder.com/static-assets/images/34977d0a3f559c5ee504fba9d836efc3.svg" alt="Dynamic Programming Icon"/>
                                Dynamic<br/> Programming
                            </div>
                            <div className="d-flex flex-column">
                                <img width="110" src="https://community-app-cdn.topcoder.com/static-assets/images/ca1fcebd7cec182a3af156c8df6ee0d1.svg" alt="Math Icon"/>
                                Number<br/> Theory
                            </div>
                            <div className="d-flex flex-column">
                                <img width="110" src="https://community-app-cdn.topcoder.com/static-assets/images/9c8e398e3569e26f0ef025938e56c7eb.svg" alt="Search Icon"/>
                                Search
                            </div>
                            <div className="d-flex flex-column">
                                <img width="110" src="https://community-app-cdn.topcoder.com/static-assets/images/725e25efa3e8db3bbe6d547d30af8bf9.svg" alt="Recursion Icon"/>
                                Recursion
                            </div>
                            <div className="d-flex flex-column">
                                <img width="110" src="https://community-app-cdn.topcoder.com/static-assets/images/8c4d5e251cf9fce747d4c89c3b2d738a.svg" alt="Sorting Icon"/>
                                Sorting
                            </div>
                            <div className="d-flex flex-column">
                                <img width="110" src="https://community-app-cdn.topcoder.com/static-assets/images/90838d75539678d6e0973f593b4fb61b.svg" alt="Simple Math Icon"/>
                                Math
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}
export default Skills;