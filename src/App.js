import React, {Fragment} from 'react';
import Nav from './Components/Header/Nav';
import AboutMe from './Components/Section/AboutMe';
import {Route,Switch} from "react-router-dom";

function App() {
  return (
      <Fragment>
          <Nav/>
          <Switch>
              <Route exact path='/' component={AboutMe}/>

          </Switch>
      </Fragment>
  );
}
export default App;
