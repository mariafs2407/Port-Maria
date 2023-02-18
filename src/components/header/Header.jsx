import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import hogar from '../assets/hogar.png';
import pro from '../assets/pro.png';
import habilidad from '../assets/habilidad.png';
import perfil from '../assets/perfil.png';
import idioma from '../assets/idioma.png';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div className='contHeader'>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <ul className='nav'>
                    <li>
                        <a className='li ' href="#top">
                            <img className='float' src={hogar} />
                            Inicio
                        </a>
                    </li>
                    {/* about */}
                    <li>
                        <a className='li ' href="#about">
                            <img className='float' src={perfil} />
                            Sobre mí
                        </a>
                    </li>
                    {/* skills */}
                    <li>
                        <a className='li' href="#skills">
                            <img className='float' src={habilidad} />
                            Habilidades
                        </a>
                    </li>
                    {/* projects */}
                    <li>
                        <a className='li ' href="#projects">
                            <img className='float' src={pro} />
                            Proyectos
                        </a>
                    </li>
                    {/* idioma */}
                    <li className='select'>
                        <img src={idioma} />
                        <select name="lang" className='menu-select' id="check">
                            <option value="es">Español</option>
                            <option value="en">Ingles</option>
                        </select>
                    </li>
                </ul>
            </div>
            {/* <svg className='efecto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fcb69f" d="M0,32L34.3,64C68.6,96,137,160,206,154.7C274.3,149,343,75,411,74.7C480,75,549,149,617,165.3C685.7,181,754,139,823,117.3C891.4,96,960,96,1029,96C1097.1,96,1166,96,1234,96C1302.9,96,1371,96,1406,96L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg> */}
            <svg  className='efecto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fcb69f" d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,74.7C840,43,960,21,1080,26.7C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </div>

    );
}

export default Header;