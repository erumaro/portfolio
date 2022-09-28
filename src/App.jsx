import React from "react";
import 'normalize.css';
import './App.css';
import logo from '../public/images/logo.png';
import herooriginal from '../public/images/hero.jpg';
import herosmall from '../public/images/hero375.jpg';
import heromedium from '../public/images/hero768.jpg';
import herolarge from '../public/images/hero1080.jpg';
import portraitoriginal from '../public/images/tobias.jpg';
import portraitsmall from '../public/images/tobias375.jpg';
import portraitmedium from '../public/images/tobias768.jpg';
import portraitlarge from '../public/images/tobias1080.jpg';

class App extends React.Component {
    render() {
        return(
            <div className="page">
                <header className="app-header">
                    <a className="app-logo" href="https://www.eruma.se"><img className="logo" src={logo} alt="Eruma" /></a>
                </header>
                <main className="app-main content">
                    <section id="sectionIntro" className="section section-intro" style={{ backgroundImage: `url(${herooriginal})` }}>
                        <div>
                            <h2>Hi, I'm Tobias!</h2>
                            <p>
                                I build Wordpress and Front-end websites with a strong foundation in semantic code and accessibility.
                            </p>
                        </div>
                    </section>
                    <section id="sectionAbout" className="section section-about">
                        <div>
                            <h2>Code Jedi by day, hobbyist artist by night</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim sodales augue, et dapibus est faucibus ut. 
                                Nam fermentum ut ante vitae tristique. Etiam malesuada libero euismod vehicula egestas. Nullam euismod faucibus est a vehicula. 
                                Mauris in augue ut metus laoreet pretium vitae et leo.
                            </p>
                        </div>
                        <div>
                            <img className="portrait" 
                                src={portraitsmall} 
                                srcSet={`${portraitsmall} 375w, ${portraitmedium} 768w, ${portraitlarge} 1080w, ${portraitoriginal} 1980w`} 
                                sizes="(max-width: 400px) 100vw"
                                alt="Tobias" />
                        </div>
                    </section>
                    <section id="sectionSkills" className="section section-skills">
                        <h2>Skills and Tools</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim sodales augue, et dapibus est faucibus ut. 
                            Nam fermentum ut ante vitae tristique. Etiam malesuada libero euismod vehicula egestas. Nullam euismod faucibus est a vehicula. 
                            Mauris in augue ut metus laoreet pretium vitae et leo.
                        </p>
                        <div className="columns">
                            <div className="column">
                                <div className="skill-card">
                                    <h3>Front-end</h3>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript
                                            <ul>
                                                <li>Vanilla</li>
                                                <li>jQuery</li>
                                                <li>ES2016+</li>
                                                <li>React</li>
                                                <li>Vue</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>Webpack</li>
                                        <li>Gulp</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="column">
                                <div className="skill-card">
                                    <h3>Back-end</h3>
                                    <ul>
                                        <li>php
                                            <ul>
                                                <li>Wordpress</li>
                                                <li>Drupal</li>
                                                <li>Symfony2 Twig</li>
                                            </ul>
                                        </li>
                                        <li>MySQL</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="column">
                                <div className="skill-card">
                                    <h3>?</h3>
                                    <ul>
                                        <li>Qué</li>
                                        <li>What</li>
                                        <li>Vad</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="sectionXp" className="section section-xp">
                        <h2>This is for portfolio and resumé content.</h2>
                    </section>
                    <section id="sectionContact" className="section section-contact">
                        <h2>This is for contact info. Name, Phonenumber etc.</h2>
                    </section>
                </main>
                <footer className="app-footer">
                    This is for social links and github repo link etc.
                </footer>
            </div>
        );
    };
};

export default App;