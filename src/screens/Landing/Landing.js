import React from 'react'
import './Landing.css';
import me from '../../assets/profile.jpg';
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";

function Landing() {
     return (
          <div className="landing">
               <img src={me} alt="Kalyan Kumar Kanike" className="banner" />
               <p className="name">Kalyan Kumar K</p>
              <p className="rollname">Frontend Developer</p> 
              <div className="tech">
                   <p className="each-tech">Javascipt</p>
                   <p className="line each-tech">|</p>
                   <p className="each-tech">React JS</p>
                   <p className="line each-tech">|</p>
                   <p className="each-tech">Redux</p>   
              </div>
              <div className="social">
                   <p style={{color : '#aaa',fontSize : 13}}>Follow me on</p>
                   <div className="social-apps">
                        <img src={linkedin} alt="LinkedIn" className="social-icon"/>
                        <img src={instagram} alt="Instagram" className="social-icon"/>
                        <img src={github} alt="Github" className="social-icon"/>
                   </div>
              </div>
              <div className="bottom-nav">
                   <a href="/" className="bottom-nav-links">About</a>
                   <a href="/" className="bottom-nav-links">Projects</a>
                   <a href="/" className="bottom-nav-links">Experience</a>
                   <a href="/" className="bottom-nav-links">Resume</a>
              </div>
          </div>
     )
}

export default Landing
