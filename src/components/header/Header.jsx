import React, { useContext } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import hogar from '../assets/hogar.png';
import pro from '../assets/pro.png';
import habilidad from '../assets/habilidad.png';
import perfil from '../assets/perfil.png';
import lenguaje from '../assets/lenguaje.png';
import peru from '../assets/peru.png';
import ingles from '../assets/ingles.png';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../context/langContext';


const Header = () => {

    const idioma = useContext(langContext);
    console.log(idioma.establecerLenguaje());

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
                            <FormattedMessage
                                id='menu.Home'
                                defaultMessage="Inicio"
                            />
                        </a>
                    </li>
                    {/* about */}
                    <li>
                        <a className='li ' href="#about">
                            <img className='float' src={perfil} />
                            <FormattedMessage
                                id='menu.About'
                                defaultMessage="Sobre mí"
                            />
                        </a>
                    </li>
                    {/* skills */}
                    <li>
                        <a className='li' href="#skills">
                            <img className='float' src={habilidad} />
                            <FormattedMessage
                                id="menu.Skills"
                                defaultMessage="Habilidades"
                            />
                        </a>
                    </li>
                    {/* projects */}
                    <li>
                        <a className='li ' href="#projects">
                            <img className='float' src={pro} />
                            <FormattedMessage
                                id="menu.Projects"
                                defaultMessage="Proyectos"
                            />
                        </a>
                    </li>
                    {/* idioma */}
                    <li>
                        <button className='icn'
                            onClick={() => idioma.establecerLenguaje('es-SP')}>
                            <img src={peru} />
                        </button>
                        <button className='icn'
                            onClick={() => idioma.establecerLenguaje('en-US')}>
                            <img src={ingles} />
                        </button>
                    </li>
                </ul>
            </div>
            
            <svg className='efecto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fcb69f" d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,74.7C840,43,960,21,1080,26.7C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </div>

    );
}

export default Header;