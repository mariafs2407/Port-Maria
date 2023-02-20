import React from 'react';
import wssp from '../assets/whatsapp.png';
import gith from '../assets/github.png';
import correo from '../assets/correo.png';
import './Footer.css';
import { FormattedMessage } from 'react-intl';

const footer = () => {
    return (
        <footer className='cont-footer'>
            <div className='link-footer' >
                <a href="https://github.com/mariafs2407" target='_blank'><img src={gith} alt="" /></a>
                <a href="https://wa.me/+51947993542" target='_blank'><img src={wssp} alt="" /></a>
                <a href="mailto:mariafs2407@gmail.com" target='_blank'><img src={correo} alt="" /></a>
            </div>
            <p className="footer__copy">
                2023 <span >©</span>
                <FormattedMessage
                    id='Footer.Derechos'
                    defaultMessage="Todos los derechos reservados"
                />
            </p>
        </footer>
    );
}

export default footer;