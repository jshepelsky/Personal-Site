import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
        <React.Fragment>
            <section id="resume">
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Assured Performance Network</h3>
                                <p className="info">Software Developer<span>•</span> <em className="date">January 2020 - Present</em></p>
                                <p>
                                    Promoted to Software Developer in January 2020. Maintained responsibilities held under Front-End Developer role. Additionally, created new features such as payment systems, data visualizations, knowledge bases and forums for client and consumer applications. Collaborated with project manager, marketing team, and CEO to invent cutting-edge, informative and profitable web applications, mobile applications and software.
                                </p>
                                <p className="info">Front-End Developer <span>•</span> <em className="date">June 2018 - January 2020</em></p>
                                <p>
                                    Constructed enterprise-level applications with complex features, currently being utilized by thousands of clients. Implemented attractive, creative designs and features in existing applications to increase aesthetics and usability. Fixed JavaScript, PHP and UI errors with detecting bugs, testing, and deploying solutions. Created, altered and optimized complex SQL queries. Developed UI and functions with PHP and JavaScript using an MVC framework (CodeIgniter). Produced mobile and responsive versions of existing applications. Created mockup user interfaces and transformed them into live, working applications. Collaborated with a team of developers to ensure clean and precise coding practices to create reusable code. Wrote legible and complete documentation for new and existing coding procedures. Used Github for version control, development testing, and weekly live releases.
                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Partie</h3>
                                <p className="info">Software Developer <span>•</span> <em className="date">July 2020 - June 2021</em></p>
                                <p>
                                    Worked on an Angular 10 application for a startup as a software developer with front-end focus. Built and enhanced components such as admin portals, chats, tutorials, feeds and forms. Cloned an existing, problematic WordPress site into a simple and bug-free PHP framework. Collaborated with CEOs and designers to create logic, flow and UI for new features. Produced documents to outline versioning processes, testing techniques and developer practices.
                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Design By Flora</h3>
                                <p className="info">Web Developer <span>•</span> <em className="date">January 2015 - June 2018</em></p>
                                <p>
                                    Developed a mobile-responsive, eCommerce website for Design By Flora using WordPress and WooCommerce. Worked with Product and business owners to create their vision of the website features. Improved site availability by immediately address any observable defects via daily maintenance releases.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Redwood Code Academy</h3>
                                <p className="info">Full Stack Developement Certificate <span>•</span> <em className="date">January 2018</em></p>
                                <p>
                                    Technologies learned: HTML, CSS, JavaScript, AngularJS, C#, .NET, SQL, MongoDB, Node, React, API’s, Git, Agile/Scrum, Bootstrap, jQuery. Created desktop and mobile applications utilizing Scrum/Agile methods. Worked individually and in teams to build responsive web-based apps. Utilized GitHub to upload projects and ensure version control. Created complex, highly usable functions using JavaScript and AngularJS. Styled and enhanced web applications and made them beautiful with CSS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
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
                        
                        <li><span className="bar-expand html-skill" /><em>HTML</em></li>
                        <li><span className="bar-expand css-skill" /><em>CSS</em></li>
                        <li><span className="bar-expand javascript-skill" /><em>JavaScript</em></li>
                        <li><span className="bar-expand angular-skill" /><em>Angular</em></li>
                        <li><span className="bar-expand php-skill" /><em>PHP</em></li>
                        <li><span className="bar-expand sql-skill" /><em>SQL</em></li>
                        <li><span className="bar-expand jquery-skill" /><em>jQuery</em></li>
                        <li><span className="bar-expand bootstrap-skill" /><em>Bootstrap</em></li>
                        {/* <li><span className="bar-expand angular-skill" /><em>Angular</em></li> */}
                        <li><span className="bar-expand react-skill" /><em>React</em></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    );
  }
}