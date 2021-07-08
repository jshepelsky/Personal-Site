import React, { Component } from 'react';
import { Animated } from "react-animated-css";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="/#" title="Hide navigation">Hide navigation</a>
            {/* <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
              <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                {/* <li><a className="smoothscroll" href="#portfolio">Creations</a></li> */}
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
              </ul>
            {/* </Animated> */}
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <Animated animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration={1000} animationOutDuration={1500} isVisible={true} animationInDelay={300}>
                <h1 className="responsive-headline">Joshua Shepelsky, Developer.</h1>
              </Animated>
              <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1800} isVisible={true} animationInDelay={1000}>
                <h3>
                  I'm a motivated <span>developer</span> with experience in multiple programming languages and technologies. I love <span>fast-paced</span> environments, <span>collaborating</span> in teams and <span>learning</span> new technologies.
                  <a className="smoothscroll" href="#about"> Scroll down</a> to learn more about me.
                </h3>
              </Animated>
              <hr />
              <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={2000} isVisible={true} animationInDelay={1000}>
                <ul className="social">
                  <li><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/jshepelsky"><i className="fa fa-facebook" /></a></li>
                  <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/joshuashepelsky/"><i className="fa fa-linkedin" /></a></li>
                  <li><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/rideoc/"><i className="fa fa-instagram" /></a></li>
                </ul>
              </Animated>
            </div>
          </div>
          <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={2000} isVisible={true} animationInDelay={2300}>
            <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
          </Animated>
        </header>
      </React.Fragment>
    );
  }
}