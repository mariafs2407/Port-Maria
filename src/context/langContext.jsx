import React, { useState } from 'react';
import MensajesIngles from '../lang/en-US.json';
import MensajesEspañol from './../lang/es-SP.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
	let localePorDefecto;
	let mensajesPorDefecto;
	const lang = localStorage.getItem('lang');

	if (lang) {
		localePorDefecto = lang

		if (lang === 'es-SP') {
			mensajesPorDefecto = MensajesEspañol;
		} else if (lang === 'en-US') {
			mensajesPorDefecto = MensajesIngles
		} else {
			localePorDefecto = 'en-US'
			mensajesPorDefecto = MensajesIngles
		}
	}
	const [mensajes, establecerMensajes] = useState(MensajesEspañol);
	const [locale, establecerLocale] = useState('es-SP');

	const establecerLenguaje = (lenguaje) => {
		switch (lenguaje) {
			case 'es-SP':
				establecerMensajes(MensajesEspañol);
				establecerLocale('es-SP');
				localStorage.setItem('lang', 'es-SP');
				break;
			case 'en-US':
				establecerMensajes(MensajesIngles);
				establecerLocale('en-US');
				localStorage.setItem('lang', 'en-US');
				break;
		}
	}

	return (
		<langContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
			<IntlProvider locale={locale} messages={mensajes}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}

export { LangProvider, langContext };