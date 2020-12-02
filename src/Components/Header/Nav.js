import React from 'react';
import {Router, Link, BrowserRouter} from "react-router-dom";
function nav(){
    return(
        <div className="navegation">
            <div className="conteiner-nav">
                <header>
                    <h1>Raul Guillen</h1>
                </header>
                <nav>
                    <ul>
                        <BrowserRouter>
                        <li> <Link to="/">Home</Link>  </li>
                        <li><a href="">Post</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><Link to="/getintouch">Contact</Link></li>
                        </BrowserRouter>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default nav;