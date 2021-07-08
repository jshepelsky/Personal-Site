import React, { Component } from 'react';
export default class ContactMe extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
              <div className="two columns header-col">
              <h1><span>Contact Me.</span></h1>
              </div>
              <div className="ten columns">
              <p className="lead">
                  Thank you for taking the time to explore my portfolio and learn a little about me. If you would like to contact me, please email <a href="mailto:jshepelsk@gmail.com?Subject=Portfolio%20Inquiry" target="_top">jshepelsk@gmail.com</a>.
              </p>
              <div className="widget widget_contact">
                  <h4>Contact Details</h4>
                  <p className="address">
                  Joshua Shepelsky<br />
                  Irvine, CA US<br />
                  jshepelsk@gmail.com<br />
                  </p>
              </div>
              </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}