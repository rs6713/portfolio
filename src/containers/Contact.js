import React from 'react';
import "./Contact.css"

const Contact = (props)=> {
    return (
      <div id="contact">
        
        <div id="main-content"> 
          <h1>Msg Me.</h1>
          <div>
            <h1>
              <a href="mailto:becks.simpson@outlook.com">
                becks.simpson @outlook.com
              </a>
            </h1>
            <div id="breaker"></div>
            <p>
              I'm passionate about design, web apps, futurism and AI, and seeking employment from September 2018. Feel free to take a look at my CV and drop me a line concerning potential job opportunities.
            </p>
            <div>
              <a href="https://github.com/rs6713" target="blank">
                <img src="./images/githubblack.png"/>
              </a>
              <a href="https://www.linkedin.com/in/becks-simpson-037096107/" target="blank">
                <img src="./images/linkedinblack.png"/>
              </a>
            </div>
          </div>
          <div>
            <img src="./images/happy.jpg"/>
          </div>
        </div>
      </div>
    )
}

export default Contact;