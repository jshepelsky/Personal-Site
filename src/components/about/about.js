import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns about-me-images">
              <img className="profile-pic" alt="image1" src={process.env.PUBLIC_URL + '/images/reactimg1.jpeg'} /> 
              {/* <img className="additional-pic" alt="image4" src={process.env.PUBLIC_URL + '/images/reactimg4.jpg'} />  */}
              <img className="additional-pic" alt="image2" src={process.env.PUBLIC_URL + '/images/reactimg2.jpg'} /> 
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>Skilled and motivated Software Developer with 6 years of experience working with technologies such as PHP, JavaScript, MySQL, CodeIgniter, Angular, WordPress, REST APIs and more. In a constantly evolving industry, my hardworking and passionate spirit achieves positive results in an efficient and resourceful manner.
              </p>
              <p>I currently reside in Charlotte, North Carolina. When I'm not working or strengthening my skill set, you can find me actively exploring all that this beautiful state has to offer. From mountain biking to motorcycling (with some snowboarding in between), it’s easy to say I’m an outdoor enthusiast. I’ve also got a German Shepard- Broly- who occupies my time in the best way, whether I’m playing with him outside or training him. 
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Joshua Shepelsky</span><br />
                    <span>Charlotte, NC US
                    </span><br />
                    <span>jshepelsk@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    {/* <a target="_blank" href="https://drive.google.com/file/d/1YofNCaZW1t5M7BcBeyxKX1cifO-5yzBt/view?usp=sharing" className="button"><i className="fa fa-download" />Download Resume</a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}