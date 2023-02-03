import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='container'>
            <div className='logo'>
                <img src={logo} alt="" width='80px' />
            </div>
            <ul className='nav'>
                <li>About me</li>
                <li>Skills</li>
                <li>Education</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            
        </div>
    );
}

export default Header;