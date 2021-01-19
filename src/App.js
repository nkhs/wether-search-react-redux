import React, { useState, Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter,Link } from 'react-router-dom';
import Anime from 'react-anime';
class LandingPage extends Component {
  render() {
    return (
      <div className="landingContainer">
        <div className="logoContainer">
          {/* <Anime className="animeDiv" opacity={[0, 1]} duration={25000}>
            <img src={silentCareLogo} className="companyLogo" alt="logo" />
          </Anime> */}
          <Anime className="animeHmeBtnDiv" opacity={[0, 1]} duration={20000} delay={2000}>
            <Link to="/home" className="landingHomeBtn">home  </Link>
          </Anime>
        </div>
      </div>
    )
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="homeContainer">
          <h1>home page</h1>
        </div>
      </div>
    )
  }
}
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}