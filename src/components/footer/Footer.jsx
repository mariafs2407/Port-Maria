import React from 'react';
import './Footer.css';
import { FormattedMessage } from 'react-intl';
//importacion de iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp , faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from  '@fortawesome/free-solid-svg-icons';

const footer = () => {
    return (
        <footer className='cont-footer'>
            <div className='link-footer' >
                <a href="https://github.com/mariafs2407" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} size="lg" beat style={{color: "#ffffff",}} />
                </a>
                <a href="https://wa.me/+51947993542" target='_blank'>
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" beat style={{color: "#ffffff",}} />
                </a>
                <a href="mailto:mariafs2407@gmail.com" target='_blank'>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" beat style={{color: "#ffffff",}} />
                </a>
            </div>
            <p className="footer__copy texto">
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