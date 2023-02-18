import React from 'react';
import p1 from '../assets/proyectos/p1.png';
import img from '../assets/img.jpg';
import './Projects.css'

const Projects = () => {
    return (
        <div className='container-proy' id='projects'>
            <h1 className='letraTitulo pos'>Proyectos</h1>
            <div className='cajapadre-proy'>
                <div className='contenedor-card'>
                    <div className='figure'>
                        <img src={p1} alt="" />
                        <div className='capa'>
                            <h1> Página de criptomonedas</h1>
                            <div className="card__body">
                                Con React , css y grid.
                            </div>
                            <a className='button'
                                href='https://react-coin-cap.vercel.app/'
                                target="_blank">Ver más</a>
                        </div>
                    </div>
                </div>
                <div className='contenedor-card'>
                    <div className='figure'>
                        <img src={img} alt="" />
                        <div className='capa'>
                            <h1> Página de criptomonedas</h1>
                            <div className="card__body">
                                Con React , css y grid.
                            </div>
                            <a className='button' >Ver más</a>
                        </div>
                    </div>
                </div>
                <div className='contenedor-card'>
                    <div className='figure'>
                        <img src={img} alt="" />
                        <div className='capa'>
                            <h1> Página de criptomonedas</h1>
                            <div className="card__body">
                                Con React , css y grid.
                            </div>
                            <a className='button'>Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;