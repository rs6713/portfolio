
/*
Is react only single page documents?
data reactive?
incorporate jade, angular?
multiple page links?
scss, sass?


*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  render() {
    return (
      <div id="App">
        
        <div id="front-page">
          <div id="alert">
            <img src="./images/watch.png" />
            <span>For a limited time only accepting Job offers. <span>Get your Becks today.</span></span>
            <div>
              <span>&times;</span>
            </div>
          </div>
          <div className="header">
            <div id="nav-bar"></div>

            <span>About</span>         
            <span>Projects</span>
            <span>Experience</span>
            <span>Contact</span>
            <div>
              <span>CV</span>
              <img src="./images/download.png" />

            </div>
          </div>

          <div className="main">
            <div>
              <img src="./images/becks.png" />
              <a href="mailto:becks.simpson@outlook.com">
                <div>Contact</div>
              </a>
            </div>
            <div id="arrow-down">
              <i className="fas fa-angle-down"></i>
              <i className="fas fa-angle-down"></i>
              <i className="fas fa-angle-down"></i>
            </div>

            
          </div>
          
        </div>



        <div id="front-page-footer">
          <img src="./images/github.png" />
          <img src="./images/linkedin.png" />
          <img src="./images/email.png" />
          <span>© Becks Simpson 2018</span>
        </div>
      </div>

      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      */
    );
  }
}

export default App;

