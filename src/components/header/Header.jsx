import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import logo from '../assets/logo2.png';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../context/langContext';
// importacion de iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faHouse, faUser, faBrain } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 120) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () =>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);  

    const idioma = useContext(langContext);
    const [idiomaActual, setIdiomaActual] = useState('es-SP');

    const toggleIdioma = () => {
        if (idiomaActual === 'es-SP') {
            setIdiomaActual('en-US');
            idioma.establecerLenguaje('en-US');
        } else {
            setIdiomaActual('es-SP');
            idioma.establecerLenguaje('es-SP');
        }
    };

    return (
        <div className='contHeader' >
            {/* contenido de secciones */}
            <div className={`container ${scrolled? 'scrolled' :''}`}>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <ul className='nav'>
                    <li>
                        <a className='li__icono' href="#top">
                            <FontAwesomeIcon className='float' icon={faHouse} bounce style={{ color: "#260b01", }} />
                            <FormattedMessage className="texto"
                                id='menu.Home'
                                defaultMessage="Inicio"
                            />
                        </a>
                    </li>
                    {/* about */}
                    <li>
                        <a className='li__icono' href="#about">
                            <FontAwesomeIcon icon={faUser} className='float' bounce style={{ color: "#260b01", }} />
                            <FormattedMessage className="texto"
                                id='menu.About'
                                defaultMessage="Sobre mí"
                            />
                        </a>
                    </li>
                    {/* skills */}
                    <li>
                        <a className='li__icono' href="#skills">
                            <FontAwesomeIcon icon={faBrain} className='float' bounce style={{ color: "#260b01", }} />
                            <FormattedMessage className="texto"
                                id="menu.Skills"
                                defaultMessage="Habilidades"
                            />
                        </a>
                    </li>
                    {/* projects */}
                    <li>
                        <a className='li__icono' href="#projects">
                            <FontAwesomeIcon icon={faRocket} className='float' bounce style={{ color: "#260b01", }} />
                            <FormattedMessage className="texto"
                                id="menu.Projects"
                                defaultMessage="Proyectos"
                            />
                        </a>
                    </li>

                </ul>
                {/* idioma */}
                <div className='idioma'>
                    <button className='idioma_icn' onClick={toggleIdioma}>
                        <FontAwesomeIcon icon={idiomaActual === 'es-SP' ?
                            faToggleOff : faToggleOn} size="2xl" style={{ color: "#260b01", }} />
                    </button>
                </div>
            </div>

            <svg className='efecto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fcb69f" d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,74.7C840,43,960,21,1080,26.7C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </div>

    );
}

export default Header;