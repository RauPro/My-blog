import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import {IconContext} from "react-icons";
function Impormation(icon){
    return(
        <div className="information">
            <h3>About me</h3>
            <p>I'm a CS Engineering Student and IEEE's member. Currently i'm learning about advanced
                algorithms(Advanced
                dinamic programing, Np-Completeness and Linear Programming (LP)) I am focused on learning new skills
                and
                methods to become a good researcher...During my BEng i have participated on ICPC Regional contest
                and
                collaborated with other sofware developers after to finish my bachelor degree of engineering i want
                to
                study a PhD in Artificial Intelligence</p><br/>
            <p>Let’s build more robust and secure AI together! See my LinkedIn profile for more details about my
                skills
                and experience. Please reach out if you want to collaborate.</p>
            <div className="conteiner-columns">
                <div className="column">
                    <h3>Interest</h3>
                    <ul>
                        <li>Artificial intelligence</li>
                        <li>Computer Vision</li>
                        <li>Machine Vision</li>
                        <li>Agorithms NLP</li>
                        <li>Scalable inference</li>
                    </ul>
                </div>
                <div className="column-educations">
                    <h3>Education</h3>
                    <ul>
                        <li>
                            <div className="dataSet-education" >
                                <FaGraduationCap />
                                <div>
                                    <p>Computer Science Engineering, current</p>
                                    <p className="edu">Universidad centroamericana Jose Simeon Cañas, El
                                        Salvador</p>
                                </div>
                            </div>
                            <div className="dataSet-education">
                                <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjUuMTQzIDI1LjE0MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUuMTQzIDI1LjE0MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMzAxMDQ7IiBkPSJNMTguMzEzLDIxLjg1MmMwLjE4OCwwLjAzLDAuMzgtMC4wMTYsMC41MzQtMC4xMjljMC4xNTItMC4xMSwwLjI1OC0wLjI4LDAuMjg2LTAuNDY5bDAuMTY5LTEuMTIzDQoJCQljMC4wMzQtMC4yMjYsMC4xNzUtMC40MTgsMC4zNzktMC41MjFsMS4wMTctMC41MDhjMC4xNzItMC4wODcsMC4zMDEtMC4yMzYsMC4zNTktMC40MTdjMC4wNi0wLjE4MywwLjA0MS0wLjM3OS0wLjA0NS0wLjU0OQ0KCQkJbC0wLjUyNC0xLjAxM2MtMC4xMDMtMC4xOTgtMC4xMDMtMC40MzksMC0wLjYzOWwwLjUyNC0xLjAxMmMwLjA4Ni0wLjE3LDAuMTA0LTAuMzY2LDAuMDQ1LTAuNTQ5DQoJCQljLTAuMDU5LTAuMTgyLTAuMTg4LTAuMzMtMC4zNTktMC40MTdsLTEuMDE3LTAuNTA4Yy0wLjIwNC0wLjEwMy0wLjM0NS0wLjI5NS0wLjM3OS0wLjUyMWwtMC4xNjktMS4xMjMNCgkJCWMtMC4wMjgtMC4xODktMC4xMzQtMC4zNTgtMC4yODYtMC40NjhjLTAuMTU0LTAuMTE0LTAuMzQ2LTAuMTYtMC41MzQtMC4xMjlsLTEuMTI1LDAuMTg4Yy0wLjIyMywwLjAzNy0wLjQ0OS0wLjAzNy0wLjYwOS0wLjE5OA0KCQkJbC0wLjc5OS0wLjgxMmMtMC4xMzUtMC4xMzUtMC4zMTYtMC4yMTEtMC41MDgtMC4yMTFjLTAuMTg5LDAtMC4zNzQsMC4wNzctMC41MDgsMC4yMTFsLTAuNzk5LDAuODEyDQoJCQljLTAuMTU5LDAuMTYyLTAuMzg2LDAuMjM1LTAuNjA5LDAuMTk4bC0xLjEyMy0wLjE4NWMtMC4xODgtMC4wMzEtMC4zOCwwLjAxNS0wLjUzNSwwLjEyOWMtMC4xNTMsMC4xMS0wLjI1OCwwLjI3OS0wLjI4NiwwLjQ2OA0KCQkJbC0wLjE2OCwxLjEyM2MtMC4wMzUsMC4yMjYtMC4xNzUsMC40MTgtMC4zNzksMC41MjFsLTEuMDE4LDAuNTA4Yy0wLjE2OSwwLjA4Ny0wLjMsMC4yMzUtMC4zNTgsMC40MTcNCgkJCWMtMC4wNTksMC4xODMtMC4wNDIsMC4zNzksMC4wNDQsMC41NDlsMC41MjQsMS4wMTJjMC4xMDQsMC4xOTksMC4xMDQsMC40NCwwLDAuNjM5bC0wLjUyNCwxLjAxMw0KCQkJYy0wLjA4NiwwLjE3LTAuMTAzLDAuMzY2LTAuMDQ0LDAuNTQ5YzAuMDU5LDAuMTgxLDAuMTg4LDAuMzMsMC4zNTgsMC40MTdsMS4wMTgsMC41MDhjMC4yMDQsMC4xMDMsMC4zNDQsMC4yOTUsMC4zNzksMC41MjENCgkJCWwwLjE2OCwxLjEyM2MwLjAyOCwwLjE4OCwwLjEzMywwLjM1OCwwLjI4NiwwLjQ2OWMwLjE1NCwwLjExMywwLjM0NiwwLjE1OSwwLjUzNSwwLjEyOWwxLjEyMy0wLjE4NQ0KCQkJYzAuMjIzLTAuMDM5LDAuNDUsMC4wMzYsMC42MDksMC4xOTdsMC43OTksMC44MWMwLjEzNSwwLjEzOCwwLjMxOCwwLjIxNCwwLjUwOCwwLjIxNGMwLjE5MSwwLDAuMzc0LTAuMDc2LDAuNTA4LTAuMjE0bDAuNzk5LTAuODENCgkJCWMwLjE2LTAuMTYxLDAuMzg3LTAuMjM2LDAuNjA5LTAuMTk3TDE4LjMxMywyMS44NTJ6IE0xNS4yNzEsMjEuMDMyYy0yLjM5LDAtNC4zMzMtMS45NDMtNC4zMzMtNC4zMzJzMS45NDQtNC4zMzQsNC4zMzMtNC4zMzQNCgkJCWMyLjM5LDAsNC4zMzMsMS45NDYsNC4zMzMsNC4zMzRTMTcuNjYyLDIxLjAzMiwxNS4yNzEsMjEuMDMyeiIvPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDMwMTA0OyIgZD0iTTE1LjI3MiwxMi45OTFjLTIuMDQxLDAtMy43MDMsMS42Ni0zLjcwMywzLjcwMnMxLjY2MywzLjcwMiwzLjcwMywzLjcwMg0KCQkJYzIuMDQzLDAsMy43MDMtMS42NiwzLjcwMy0zLjcwMlMxNy4zMTUsMTIuOTkxLDE1LjI3MiwxMi45OTF6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMzAxMDQ7IiBkPSJNMjEuNzI1LDIyLjY2M2wtMi4wMTUtMi4wMTZsLTAuMTAyLDAuNjhjLTAuMDQ4LDAuMzEzLTAuMjIyLDAuNjAyLTAuNDc5LDAuNzg3DQoJCQljLTAuMjU1LDAuMTg2LTAuNTc0LDAuMjY1LTAuODkyLDAuMjEzbC0xLjEyNi0wLjE4NGMtMC4wOTMtMC4wMDYtMC4xNDksMC4wMi0wLjE5LDAuMDYybC0wLjE5MiwwLjE5M2wyLjYzMiwyLjYzMQ0KCQkJYzAuMTAyLDAuMTAyLDAuMjQ5LDAuMTM4LDAuMzg1LDAuMDk3YzAuMTM2LTAuMDQzLDAuMjM2LTAuMTU2LDAuMjY0LTAuMjk3bDAuMjM3LTEuMjc3bDEuMjgxLTAuMjQNCgkJCWMwLjE0LTAuMDI2LDAuMjUzLTAuMTI3LDAuMjk0LTAuMjY0QzIxLjg2NCwyMi45MTEsMjEuODI2LDIyLjc2MiwyMS43MjUsMjIuNjYzeiIvPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDMwMTA0OyIgZD0iTTEzLjQ2OSwyMi4xMzhsLTEuMTYsMC4xODljLTAuMzI1LDAuMDUtMC42NC0wLjAyOC0wLjg5Ni0wLjIxNg0KCQkJYy0wLjI1NS0wLjE4NC0wLjQyOS0wLjQ3Mi0wLjQ3Ny0wLjc4N2wtMC4xMDItMC42NzdMOC44MiwyMi42NjNjLTAuMSwwLjEtMC4xMzcsMC4yNDgtMC4wOTYsMC4zODQNCgkJCWMwLjA0MywwLjEzNywwLjE1NywwLjIzNiwwLjI5NSwwLjI2NGwxLjI4LDAuMjM5bDAuMjQsMS4yNzljMC4wMjYsMC4xNDEsMC4xMjcsMC4yNTQsMC4yNjMsMC4yOTcNCgkJCWMwLjEzNSwwLjA0MSwwLjI4MywwLjAwNSwwLjM4My0wLjA5NmwyLjYzMS0yLjYzMmwtMC4xOTItMC4xOTRDMTMuNTgyLDIyLjE2MSwxMy41MjYsMjIuMTM4LDEzLjQ2OSwyMi4xMzh6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMzAxMDQ7IiBkPSJNMTYuNDIsNC4yMTdINi45ODVjLTAuMzQsMC0wLjYxNSwwLjI3NS0wLjYxNSwwLjYxNUM2LjM2OSw1LjE3NCw2LjY0NCw1LjQ0OCw2Ljk4NSw1LjQ0OGg5LjQzNQ0KCQkJYzAuMzM5LDAsMC42MTUtMC4yNzQsMC42MTUtMC42MTRDMTcuMDM1LDQuNDk0LDE2Ljc1OCw0LjIxNywxNi40Miw0LjIxN3oiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzAzMDEwNDsiIGQ9Ik0xNi40Miw3LjM3MUg2Ljk4NWMtMC4zNCwwLTAuNjE1LDAuMjc1LTAuNjE1LDAuNjEzQzYuMzY5LDguMzI0LDYuNjQ0LDguNiw2Ljk4NSw4LjZoOS40MzUNCgkJCWMwLjMzOSwwLDAuNjE1LTAuMjc0LDAuNjE1LTAuNjE1QzE3LjAzNSw3LjY0NiwxNi43NTgsNy4zNzEsMTYuNDIsNy4zNzF6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMzAxMDQ7IiBkPSJNOS44NzIsMjAuMjE2bC0wLjQ2NS0wLjIzMmMtMC4xMTktMC4wNi0wLjIyNy0wLjEzNy0wLjMyNy0wLjIyM0g1LjEwOA0KCQkJYy0wLjI3MiwwLTAuNDkzLTAuMjIyLTAuNDkzLTAuNDkyVjEuODA0YzAtMC4yNzMsMC4yMjEtMC40OTQsMC40OTMtMC40OTRoMTMuMjE4YzAuMjcxLDAsMC40OTMsMC4yMjEsMC40OTMsMC40OTR2OS4wMDcNCgkJCWMwLjIyLDAuMDUyLDAuNDMsMC4xNDgsMC42MTQsMC4yODVjMC4zNiwwLjI1NywwLjYwOSwwLjY2OCwwLjY3NiwxLjExNmwwLjAyLTEwLjQwN0MyMC4xMzEsMC44MSwxOS4zMjEsMCwxOC4zMjYsMEg1LjEwOA0KCQkJQzQuMTEzLDAsMy4zMDMsMC44MTEsMy4zMDMsMS44MDV2MTcuNDY2YzAsMC45OTYsMC44MTEsMS44MDYsMS44MDUsMS44MDZoMy45MDVMOS44NzIsMjAuMjE2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                                    width="20px"/>
                                <div>

                                    <p>Data Structures and Algorithms Specialization, current</p>
                                    <p className="edu">University of California San Diego, Coursera</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
export default Impormation;