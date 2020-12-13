import React from 'react';
import {Router, Link, BrowserRouter} from "react-router-dom";
import  {Navbar,Nav} from "react-bootstrap";
function nav(){
    return(
        <Navbar className="navegation" expand="lg">
            <Navbar.Brand><Link to="/"><div className="pl-5">Raul Guillen</div></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto pr-5">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/post">Post</Link></Nav.Link>
                    <Nav.Link ><Link to="/portfolio">Portfolio</Link></Nav.Link>
                    <Nav.Link> <Link to="/contact">Contact</Link> </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default nav;