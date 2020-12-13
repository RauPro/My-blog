import React, {Fragment} from 'react';
import Nav from './Components/Header/Nav';
import AboutMe from './Components/Section/AboutMe';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Contact from "./Components/Section/Contact";
import Post from "./Components/Section/Post";
import Portfolio from "./Components/Section/Portfolio";

function App() {
  return (
      <Fragment>
          <Nav/>
          <Switch>
              <Route exact path='/' component={AboutMe}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/post' component={Post}/>
              <Route path='/portfolio' component={Portfolio}/>
          </Switch>
      </Fragment>
  );
}
export default App;
