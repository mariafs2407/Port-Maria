import React from 'react';
import About from './contenido/About';

import Skills from './contenido/Skills';
import Projects from './contenido/Projects';
import { IntlProvider, FormattedMessage } from 'react-intl';
import MensajesIngles from './../lang/en-US';


const Inicio = () => {
    return (

        <div id='top'>
            <About />
            <Skills />
            <Projects />
        </div>


    );
}

export default Inicio;