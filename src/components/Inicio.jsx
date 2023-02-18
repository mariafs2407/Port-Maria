import React from 'react';
import About from './contenido/About';

import Skills from './contenido/Skills';
import Projects from './contenido/Projects';
import { IntlProvider } from 'react-intl';


const Inicio = () => {
    return (
        <IntlProvider>
            <div id='top'>
                <About />
                <Skills />
                <Projects />
            </div>
        </IntlProvider>

    );
}

export default Inicio;