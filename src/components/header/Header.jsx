import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import logo from '../assets/logo2.png';
import { langContext } from '../../context/langContext';
// importacion de iconos
import { IoMenu } from "react-icons/io5";
import Lng from './Lng';
import Nav from './Nav';
import Drawer from './Drawer';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 120) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

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
            <div className={`container ${scrolled ? 'scrolled' : ''}`}>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='nav-container'>
                    <Nav drawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
                </div>
                {/* idioma */}
                <Lng idiomaActual={idiomaActual} toggleIdioma={toggleIdioma} />
                {/* drawer */}
                <div className='  ' onClick={toggleDrawer}>
                    <IoMenu style={{ color: "#260b01" }} />
                </div>
                <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} img={logo} />
            </div>
            <svg className='efecto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fcb69f" d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,74.7C840,43,960,21,1080,26.7C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </div>

    );
}

export default Header;