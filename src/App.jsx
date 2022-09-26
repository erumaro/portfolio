import React from "react";
import 'normalize.css';
import './App.css';
import logo from '../public/images/logo.png';
import hero from '../public/images/hero.jpg';
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
                    <section id="sectionIntro" className="section section-intro" style={{ backgroundImage: `url(${hero})` }}>
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
                                sizes="(max-width: 400px) 100vw, (max-width: 700px) 50vw, (max-width: 900px) 33vw, 225px"
                                alt="Tobias" />
                        </div>
                    </section>
                    <section id="sectionSkills" className="section section-skills">
                        <h2>This is for listing skills and tools.</h2>
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