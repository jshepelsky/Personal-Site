import React, { Component } from 'react';
export default class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="resume">
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skill Set</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <p>
                                I am constantly improving my skill set by taking up-to-date courses about new languages and frameworks. I consider myself a fast learner and I truly enjoy spending my time coding.
                            </p>
                            <div className="bars">
                                <ul className="skills">
                                    <li>
                                        <span className="bar-expand php-skill" /><em>PHP</em>
                                    </li>
                                    <li>
                                        <span className="bar-expand javascript-skill" /><em>JavaScript</em>
                                    </li>
                                    <li>
                                        <span className="bar-expand sql-skill" /><em>MySQL</em>
                                    </li>
                                    <li>
                                        <span className="bar-expand codeigniter-skill" /><em>CodeIgniter</em>
                                    </li>
                                    <li>
                                        <span className="bar-expand wordpress-skill" /><em>WordPress</em>
                                    </li>
                                    <li>
                                        <span className="bar-expand angular-skill" /><em>Angular</em>
                                    </li>
                                    <li>
                                        <span className="bar-expand react-skill" /><em>React</em>
                                    </li>
                                    <li>
                                        <span className="bar-expand rest-skill" /><em>REST APIs</em>
                                    </li>
                                    <li>
                                        <span className="bar-expand html-skill" /><em>HTML</em>
                                    </li>
                                    <li>
                                        <span className="bar-expand css-skill" /><em>CSS</em>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}