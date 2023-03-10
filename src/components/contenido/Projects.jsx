import React from 'react';
import p1 from '../assets/proyectos/p1.png';
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
                            <h1>
                                <FormattedMessage
                                    id="Projects1.Titulo"
                                    defaultMessage="Página de criptomonedas"
                                />
                            </h1>
                            <div className="card__body">
                                <FormattedMessage
                                    id="Projects1.Contenido"
                                    defaultMessage="Con React , css y grid."
                                />
                            </div>
                            <a className='button'
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
                        <img src={img} alt="" />
                        <div className='capa'>
                            <h1>
                                <FormattedMessage
                                    id="Projects2.Titulo"
                                    defaultMessage="Página en proceso"
                                />
                            </h1>
                            <div className="card__body">
                                <FormattedMessage
                                    id="Projects2.Contenido"
                                    defaultMessage="..."
                                />
                            </div>
                            <a className='button' >
                                <FormattedMessage
                                    id="Projects.Boton"
                                    defaultMessage="Ver más"
                                /></a>
                        </div>
                    </div>
                </div>
                <div className='contenedor-card'>
                    <div className='figure'>
                        <img src={img} alt="" />
                        <div className='capa'>
                            <h1>
                                <FormattedMessage
                                    id="Projects2.Titulo"
                                    defaultMessage="Página en proceso"
                                />
                            </h1>
                            <div className="card__body">
                                <FormattedMessage
                                    id="Projects2.Contenido"
                                    defaultMessage="..."
                                />
                            </div>
                            <a className='button'>
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