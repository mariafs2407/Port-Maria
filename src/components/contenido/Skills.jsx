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

const Skills = () => {
    return (
        <div className='cajapadreS' id='skills'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
                        <img src={html} alt="" />
                        <h1>HTML</h1>
                    </div>
                    <div className='caja'>
                        <img src={css} alt="" />
                        <h1>CSS</h1>
                    </div>
                    <div className='caja'>
                        <img src={git} alt="" />
                        <h1>GIT</h1>
                    </div>
                    <div className='caja'>
                        <img src={github} alt="" />
                        <h1>GITHUB</h1>
                    </div>
                    <div className='caja'>
                        <img src={react} alt="" />
                        <h1>REACT</h1>
                    </div>
                    <div className='caja'>
                        <img src={reactnat} alt="" />
                        <h1>REACT NATIVE</h1>
                    </div>
                    <div className='caja'>
                        <img src={bosp} alt="" />
                        <h1>BOOSTRAP</h1>
                    </div>
                    <div className='caja'>
                        <img src={js} alt="" />
                        <h1>JavaScript</h1>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#E6D5BB" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,117.3C672,117,768,171,864,170.7C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
    );
}

export default Skills;