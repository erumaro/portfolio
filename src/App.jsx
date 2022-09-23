import React from "react";
import 'normalize.css';
import './App.css';
import logo from './logo.png';

class App extends React.Component {
    render() {
        return(
            <div className="page">
                <header className="app-header">
                    <a className="app-logo" href="https://www.eruma.se"><img className="logo" src={logo} alt="Eruma logo" /></a>
                </header>
                <main className="app-main content">
                    <h1 className="sr-only">Tobias Årud portfolio</h1>
                    <section id="sectionIntro" className="section section-intro">
                        <h2>This is for hero and short intro.</h2>
                    </section>
                    <section id="sectionAbout" className="section section-about">
                        <h2>This is for longer text about me.</h2>
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