import React from "react";
import 'normalize.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlasses, faDisplay, faTimeline, faAddressCard, faPencil, faBookJournalWhills, faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import './App.scss';
import logo from '../public/images/logo.png';
import herolarge from '../public/images/hero1080.jpg';
import tobiastext from '../public/images/tobias.png';
import portraitoriginal from '../public/images/tobias.jpg';
import portraitsmall from '../public/images/tobias375.jpg';
import portraitmedium from '../public/images/tobias768.jpg';
import portraitlarge from '../public/images/tobias1080.jpg';

class App extends React.Component {
    render() {
        return(
            <div className="page">
                <header className="app-header">
                    <div className="container">
                        <div className="flex">
                            <div className="app-branding">
                                <img className="logo" src={logo} alt="Eruma" />
                            </div>
                            <nav>
                                <ul>
                                    <li><a href="#sectionAbout">
                                        <FontAwesomeIcon icon={faGlasses} />
                                        About me
                                    </a></li>
                                    <li><a href="#sectionSkills">
                                        <FontAwesomeIcon icon={faDisplay} />
                                        Skills
                                    </a></li>
                                    <li><a href="#sectionXp">
                                        <FontAwesomeIcon icon={faTimeline} />
                                        Experience
                                    </a></li>
                                    <li><a href="#sectionContact">
                                        <FontAwesomeIcon icon={faAddressCard} />
                                        Contact
                                    </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <main className="app-main content">
                    <div id="hero" className="app-intro" style={{ backgroundImage: `url(${herolarge})` }}>
                        <div className="flex">
                            <h1>Hi I'm <img className="tobiastext" src={tobiastext} alt="Tobias" />!</h1>
                            <p>I handle code from both back-end and front-end.</p>
                            <p><a href="https://github.com/erumaro">Check my repos at Erumaro on Github <FontAwesomeIcon icon={faGithubAlt} /></a> or <a href="#contact">contact me</a> to here more!</p>
                        </div>
                    </div>
                    <section id="sectionAbout" className="app-about">
                        <div className="container">
                            <div className="grid">
                                <div className="column">
                                    <h2>About me</h2>
                                    <p>I'm coming from a background of Interaction design and front-end development and work prominently with Wordpress both in back-end and front-end.</p>
                                    <p>Besides great knowledge in Wordpress development I'm also knowledgable in accessibility and strive to build my websites with the users 
                                    experience in mind.</p>
                                    <h3>Short facts</h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faHeadphones} /> Eclective music taste, ranging from pop to Melodic Death Metal.</li>
                                        <li><FontAwesomeIcon icon={faBookJournalWhills} /> Nerdy interest in Fantasy literature and Sci-fi like Star Wars</li>
                                        <li><FontAwesomeIcon icon={faPencil} /> Like improving my drawing skills as a hobby.</li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <img className="portrait" src={portraitsmall} alt="Tobias" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="sectionSkills">
                        <div className="container">
                            <h2>Fullstack skills with Front-end focus</h2>
                            <p>As a developer I like exploring new languages, design patterns and tools to become even better at what I know.</p>
                            <div className="skills">
                                <div>
                                    <button id="frontend" className="filter-button">
                                        Front-end
                                    </button>
                                    <button id="backend" className="filter-button">
                                        Back-end
                                    </button>
                                    <button id="fullstack" className="filter-button">
                                        Full stack
                                    </button>
                                    <button id="design" className="filter-button">
                                        Design
                                    </button>
                                </div>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React (JS Library)</li>
                                    <li>jQuery (JS Library)</li>
                                    <li>SCSS</li>
                                    <li>Composer</li>
                                    <li>Node.js</li>
                                    <li>Wordpress</li>
                                    <li>MySQL</li>
                                    <li>PHP</li>
                                </ul>
                                <p>For more info on each skill or tool checkout my Wordpress site at <a href="https://eruma.se">Eruma.se</a></p>
                            </div>
                        </div>
                    </section>
                    <section id="sectionXp">
                        <div className="container">
                            <h2>I gained my experience at several great places</h2>
                            <p>Every place I have been at have been helping grow as developer and colleague and I hope you will be my next step!</p>
                            <div className="grid">
                                <div className="column">
                                    <div className="xp-card">
                                        <h3>Company/School</h3>
                                        <ul>
                                            <li>Made coffee</li>
                                            <li>Commuted</li>
                                            <li>Slept well/badly</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="xp-card">
                                        <h3>Company/School</h3>
                                        <ul>
                                            <li>Made coffee</li>
                                            <li>Commuted</li>
                                            <li>Slept well/badly</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="xp-card">
                                        <h3>Company/School</h3>
                                        <ul>
                                            <li>Made coffee</li>
                                            <li>Commuted</li>
                                            <li>Slept well/badly</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="app-footer">
                    <div className="container">
                        <p>
                            &copy; Tobias Årud <span>|</span> <a href="https://github.com/erumaro/portfolio">Portfolio at Github</a>
                        </p>
                    </div>
                </footer>
            </div>
        );
    };
};

export default App;