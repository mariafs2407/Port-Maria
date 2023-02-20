import React from 'react';
import yo from '../assets/yo.png';
import './About.css';
import { FormattedMessage } from 'react-intl';

const About = () => {
    return (
        <div className='containerA' id='about'>
            <div className='contenido2'>
                <h1 className='letraTitulo p1'>
                    <FormattedMessage
                        id="About.Titulo"
                        defaultMessage="Soy"
                        values={
                            { name: 'María Flores' }
                        }
                    />
                </h1>
                <p className='p2'>
                    <FormattedMessage
                        id="About.Contenido"
                        defaultMessage="Estudiante de la carrera de Desarrollo de software, por el momento me encuentro cursando el 5 ciclo de mi carrera, soy una persona organizada, responsable ,creativa , con la pasión de aprender nuevas tecnologias y nuevos desafíos."
                    />
                </p>
            </div>
            <img src={yo} alt="foto mia" />
        </div>
    );
}

export default About;