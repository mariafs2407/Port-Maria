import React from 'react';
import yo from '../assets/yo.png';
import './About.css';

const About = () => {
    return (
        <div className='containerA' id='about'>
            <div className='contenido2'>
                <h1 className='letraTitulo p1'>Soy  Maria  Flores </h1>
                <p className='letraC p2'>Soy estudiante de la carrera de Desarrollo de software, por el momento me encuentro cursando el 5 ciclo de mi carrera, soy una persona responsable ,creativa , me gusta aprender cosas nuevas y aprender de mis errores para mejorar cada día.</p>
            </div>
            <img src={yo} alt="foto mia" />
        </div>
    );
}

export default About;