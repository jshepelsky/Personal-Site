import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                {/* <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jshepelsky"><i className="fa fa-facebook" /></a></li> */}
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joshuashepelsky/"><i className="fa fa-linkedin" /></a></li>
                {/* <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rideoc/"><i className="fa fa-instagram" /></a></li> */}
              </ul>
              <ul className="copyright">
                <li>© Copyright 2023 Joshua Shepelsky</li>
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}