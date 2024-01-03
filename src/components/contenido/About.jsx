import React from 'react';
import yo from '../assets/yo.png';
import './About.css';
import { FormattedMessage } from 'react-intl';

const About = () => {
    return (
        <div className='container__about' id='about'>
            <div className='about_content'>
                <h1 className='letraTitulo '>
                    <FormattedMessage
                        id="About.Titulo"
                        defaultMessage="Soy"
                        values={
                            { name: 'María Flores' }
                        }
                    />
                </h1>
                <p className='about_img texto'>
                    <FormattedMessage
                        id="About.Contenido"
                        defaultMessage="Estudiante de la carrera de Desarrollo de software, soy una persona organizada, responsable ,creativa , con la pasión de aprender nuevas tecnologias y nuevos desafíos."
                    />
                </p>
            </div>
            <img src={yo} alt="foto mia" />
        </div>
    );
}

export default About;