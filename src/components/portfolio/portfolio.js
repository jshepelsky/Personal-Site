import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                <h1>HERE ARE SOME OF MY CREATIONS</h1>
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-01" title="true">
                            <img alt="" src="images/portfolio/apn-preview.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Assured Performance</h5>
                                <p>PHP Site</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                    </div>
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-02" title="true">
                            <img alt="" src="images/portfolio/abl-preview.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Autobody Locator</h5>
                                <p>Web App</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                    </div>
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-03" title="true">
                            <img alt="" src="images/portfolio/dbf-preview.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Design By Flora</h5>
                                <p>Wordpress Site</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                    </div>
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-04" title="true">
                            <img alt="" src="images/portfolio/cc-preview.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Collision Care</h5>
                                <p>PHP Site</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
                <div id="modal-01" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-apn-preview.jpg" alt="" />
                <hr></hr>
                <div className="description-box">
                    <h4>Assured Performance Network</h4>
                    <p>Created a responsive website for Assured Performance Network. Technologies utilized: HTML, CSS, JavaScipt, SemanticUI, jQuery, Bootstrap, PHP, and CodeIgniter.</p>
                </div>
                <div className="link-box">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.assuredperformance.net">Launch</a>
                    <button className="popup-modal-dismiss close-button-portfolio">Close</button>
                </div>
                </div>{/* modal-01 End */}
                <div id="modal-02" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-abl-preview.jpg" alt="" />
                <hr></hr>
                <div className="description-box">
                    <h4>Autobody Locator</h4>
                    <p>This is a responsive webapp that utlizes: HTML, CSS, JavaScript, Bootstrap, PHP, and CodeIgniter.</p>
                </div>
                <div className="link-box">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.autobodylocator.com">Launch</a>
                    <button className="popup-modal-dismiss close-button-portfolio">Close</button>
                </div>
                </div>{/* modal-02 End */}
                <div id="modal-03" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-dbf-preview.jpg" alt="" />
                <hr></hr>
                <div className="description-box">
                    <h4>Design By Flora</h4>
                    <p>Wordpress was used to create this fully responsive website.</p>
                </div>
                <div className="link-box">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.designbyflora.com">Launch</a>
                    <button className="popup-modal-dismiss close-button-portfolio">Close</button>
                </div>
                </div>{/* modal-03 End */}
                <div id="modal-04" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-cc-preview.jpg" alt="" />
                <hr></hr>
                <div className="description-box">
                    <h4>Collision Care</h4>
                    <p>This is an information only site, it was built using: HTML, CSS, PHP, and Javascript.</p>
                </div>
                <div className="link-box">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.collisioncare.org">Launch</a>
                    <button className="popup-modal-dismiss close-button-portfolio">Close</button>
                </div>
                </div>{/* modal-04 End */}
            </div>
        </section>
      </React.Fragment>
    );
  }
}