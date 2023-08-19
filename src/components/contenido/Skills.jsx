import React from 'react';
import './Skills.css';
import css from '../assets/skills/css.png';
import html from '../assets/skills/html.png';
import git from '../assets/skills/git.png';
import github from '../assets/skills/github.png';
import react from '../assets/skills/react.png';
import reactnat from '../assets/skills/react-native.png';
import bosp from '../assets/skills/bootstrap.png';
import js from '../assets/skills/js.png';
import { FormattedMessage } from 'react-intl';
//importando iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGitAlt, faGithub, faCss3Alt,
    faHtml5, faReact, faBootstrap,
    faJs, faJava
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className='cajapadreS' id='skills'>
            <svg className='efectoS' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#E6D5BB" d="M0,256L48,250.7C96,245,192,235,288,240C384,245,480,267,576,266.7C672,267,768,245,864,240C960,235,1056,245,1152,256C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className='cajapadre-skill'>
                <h1 className='letraTitulo pos' >
                    <FormattedMessage
                        id="Skills.Titulo"
                        defaultMessage="Habilidades"
                    />

                </h1>
                <div className='container-skills'>
                    <div className='caja'>
                        <FontAwesomeIcon className="img" icon={faHtml5}  style={{ color: "#b65520", }} />
                        <h1 className='texto'>HTML</h1>                        
                    </div>
                    <div className='caja'>
                        <FontAwesomeIcon className="img" icon={faCss3Alt}  style={{ color: "#1f3356", }} />
                        <h1 className='texto'>CSS</h1>
                    </div>
                    <div className='caja'>
                        <FontAwesomeIcon className="img" icon={faGitAlt} style={{ color: "#e94b07", }} />
                        <h1 className='texto'>GIT</h1>
                    </div>
                    <div className='caja'>
                        <FontAwesomeIcon className="img" icon={faGithub}  style={{ color: "#220231", }} />
                        <h1 className='texto'>GITHUB</h1>
                    </div>
                    <div className='caja'>
                        <FontAwesomeIcon className="img" icon={faReact} style={{ color: "#2d68cd", }} />
                        <h1 className='texto'>REACT</h1>
                    </div>
                    <div className='caja'>
                        <FontAwesomeIcon className="img" icon={faReact} style={{ color: "#37a9b9", }} />
                        <h1 className='texto'>REACT NATIVE</h1>
                    </div>
                    <div className='caja'>
                        <FontAwesomeIcon className="img" icon={faBootstrap}  style={{ color: "#563a98", }} />
                        <h1 className='texto'>BOOSTRAP</h1>
                    </div>
                    <div className='caja'>
                        <FontAwesomeIcon className="img" icon={faJs} style={{ color: "#c9af2c", }} />
                        <h1 className='texto'>JavaScript</h1>
                    </div>
                    <div className='caja'>
                        <FontAwesomeIcon className="img" icon={faJava}  style={{ color: "#770b03", }} />
                        <h1 className='texto'>JAVA</h1>
                    </div>
                    <div className='caja'>
                        <FontAwesomeIcon className="img" icon={faDatabase}  style={{ color: "#26282b", }} />
                        <h1 className='texto'>SQL Server</h1>
                    </div>
                </div>
            </div>
            <svg className='efectoS' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#E6D5BB" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,117.3C672,117,768,171,864,170.7C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
    );
}

export default Skills;