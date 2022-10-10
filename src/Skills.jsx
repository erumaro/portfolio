import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faWordpress, faJs, faHtml5, faCss3, faSass, faPhp, faNodeJs, faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import './Skills.scss';

import SkillsFilter from './Skills/SkillsFilter';
import SkillsList from './Skills/SkillsList';

class Skills extends React.Component {
    render() {
        return(
            <div className="skills-wrapper">                      
                <div className="filter" role="group" aria-label="Buttons that filter the list">
                    <button id="allskills" className="filter-button active-filter-button">
                        All skills
                    </button>
                    <button id="design" className="filter-button">
                        Design
                    </button>
                    <button id="fullstack" className="filter-button">
                        Full stack
                    </button>
                    <button id="frontend" className="filter-button">
                        Front-end
                    </button>
                    <button id="backend" className="filter-button">
                        Back-end
                    </button>
                </div>
                <ul className="skills-list" aria-live="polite">
                    <li className="frontend fullstack"><FontAwesomeIcon icon={faHtml5} /> HTML5</li>
                    <li className="frontend fullstack"><FontAwesomeIcon icon={faCss3} /> CSS</li>
                    <li className="frontend fullstack"><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                    <li className="frontend"><FontAwesomeIcon icon={faReact} /> React</li>
                    <li className="frontend"><FontAwesomeIcon icon={faCode} /> jQuery</li>
                    <li className="frontend"><FontAwesomeIcon icon={faSass} /> SCSS</li>
                    <li className="fullstack backend"><FontAwesomeIcon icon={faCode} /> Composer</li>
                    <li className="frontend backend fullstack"><FontAwesomeIcon icon={faNodeJs} /> Node.js</li>
                    <li className="frontend fullstack backend"><FontAwesomeIcon icon={faWordpress} /> Wordpress</li>
                    <li className="fullstack backend"><FontAwesomeIcon icon={faDatabase} /> MySQL</li>
                    <li className="fullstack backend"><FontAwesomeIcon icon={faPhp} /> PHP</li>
                    <li className="design frontend"><FontAwesomeIcon icon={faAccessibleIcon} /> Accessibility</li>
                    <li className="design frontend"><FontAwesomeIcon icon={faLaptopCode} /> Responsive design</li>
                </ul>
                <p>For more info on each skill or tool checkout my Wordpress site at <a href="https://eruma.se">Eruma.se</a></p>
            </div>
        );
    };
};

export {Skills};