
/*
Is react only single page documents?
data reactive?
incorporate jade, angular?
multiple page links?
scss, sass?
*/

import React, { Component } from 'react';
//import logo from './logo.svg';
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
            <a href="./CV.pdf" download>
              <div>
                <span>CV</span>
                  <img src="./images/download.png" />
              </div>
            </a>
          </div>

          <div className="main">
            <div id="arrow-down">
                <i className="fas fa-angle-down"></i>
                <i className="fas fa-angle-down"></i>
                <i className="fas fa-angle-down"></i>
              </div>
            <div id="profile">
              <div>
                <img src="./images/becks.png" />
                <a href="mailto:becks.simpson@outlook.com">
                  <div>Contact</div>
                </a>
              </div>
              
              <div>
                <h3>Hello I am</h3>
                <div>
                  <h1>Becks Simpson<span></span></h1>
                  <p>Futurist • Full-Stack Developer • AI Enthusiast<span> </span></p>
                </div>
                <p>
                  I'm a recent Computer Science Graduate with a year of industry experience in a tech innovations role. 
                  Currently I’m looking for my next challenge, ideally it'd involve a mix of AI and full-stack web development responsibilities. 
                </p>
                <a href="mailto:becks.simpson@outlook.com">
                  <div>Contact</div>
                </a>
              </div>
            </div>
          </div>
          <img src="./images/cat.png" />
        </div>

        <div id="white-platform"> </div>
        <div id="cat-platform"> </div>

        <div id="who-am-i">
          <h1>Who am I?</h1>
          <canvas id="becks-chart"></canvas>
        </div>

        <div id="languages">
          <div id="lang-descrip">
            <div>
              <h2></h2>
              <br></br>
              <h5></h5>
            </div>
            <div></div>
          </div>
          <div id="circle"> 
          </div>
        </div>

        <div id="where-going">
          <h1 id="lang-title">Languages</h1>
          <div id="time-container">
            <div id="timeline">
              <div id="bar">
                <div id="timeline-handle">
                  <img src="./images/drag.png" />
                </div>
              </div>
            </div>
            <div id="time-description"></div>
          </div>
        </div>

        <div id="quotes">
          <i className="fas fa-quote-left"></i>
          <i className="fas fa-quote-right"></i>
          <h1></h1>
          <h3></h3>
          <div id="quotes-people"> </div>
        </div>
        <div id="skills-container">
          <h1>Skills &amp; Interests</h1>
          <div id="skills"></div>
        </div>
        <div id="i-am">
          <h1>I am a</h1>
          <div>
            <div>
              <h1>Designer</h1>
              <h1>Developer</h1>
              <h1>Futurist</h1>
              <h1>Programmer</h1>
              <h1>Designer</h1>
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

