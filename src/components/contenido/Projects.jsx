import React from 'react';
import p1 from '../assets/proyectos/p1.png';
import p2 from '../assets/proyectos/p2.png';
import p3 from '../assets/proyectos/p3.png';
import img from '../assets/img.jpg';
import './Projects.css'
import { FormattedMessage } from 'react-intl';

const Projects = () => {
    return (
        <div className='container-proy' id='projects'>
            <h1 className='letraTitulo pos'>
                <FormattedMessage
                    id="Projects.Titulo"
                    defaultMessage="Proyectos"
                />
            </h1>
            <div className='cajapadre-proy'>
                <div className='contenedor-card'>
                    <div className='figure'>
                        <img src={p1} alt="" />
                        <div className='capa'>
                            <h1 className="letraTitulo">
                                <FormattedMessage
                                    id="Projects1.Titulo"
                                    defaultMessage="Página en progreso"                                    
                                />
                            </h1>
                            <div className="card__body texto">
                                <FormattedMessage
                                    id="Projects1.Contenido"
                                    defaultMessage="Con React , css y grid."
                                />
                            </div>
                            <a className='button texto'
                                href='https://react-coin-cap.vercel.app/'
                                target="_blank">
                                <FormattedMessage
                                    id="Projects.Boton"
                                    defaultMessage="Ver más"                                    
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contenedor-card'>
                    <div className='figure'>
                        <img src={p2} alt="" />
                        <div className='capa'>
                            <h1 className="letraTitulo">
                                <FormattedMessage
                                    id="Projects2.Titulo"
                                    defaultMessage="Página en proceso"                                    
                                />
                            </h1>
                            <div className="card__body texto">
                                <FormattedMessage
                                    id="Projects2.Contenido"
                                    defaultMessage="..."
                                />
                            </div>
                            <a className='button texto'
                                href='https://api-rick-morty-eight.vercel.app/'
                                target="_blank">
                                <FormattedMessage
                                    id="Projects.Boton"
                                    defaultMessage="Ver más"
                                /></a>
                        </div>
                    </div>
                </div>
                <div className='contenedor-card'>
                    <div className='figure'>
                        <img src={p3} alt="" />
                        <div className='capa'>
                            <h1  className="letraTitulo">
                                <FormattedMessage
                                    id="Projects3.Titulo"
                                    defaultMessage="Página en proceso"
                                />
                            </h1>
                            <div className="card__body texto">
                                <FormattedMessage
                                    id="Projects3.Contenido"
                                    defaultMessage="..."
                                />
                            </div>
                            <a className='button texto'
                                href='https://github.com/mariafs2407/proy-escritorio'
                                target="_blank">
                                <FormattedMessage
                                    id="Projects.Boton"
                                    defaultMessage="Ver más"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;