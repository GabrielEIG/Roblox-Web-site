import React, { useEffect } from 'react';

const CookieNotice = () => {
  useEffect(() => {
    const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
    const avisoCookies = document.getElementById('aviso-cookies');
    const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

    const handleAceptarCookies = () => {
      avisoCookies.classList.remove('activo');
      fondoAvisoCookies.classList.remove('activo');

      localStorage.setItem('cookies-aceptadas', true);

      dataLayer.push({ 'event': 'cookies-aceptadas' });
    };

    if (!localStorage.getItem('cookies-aceptadas')) {
      avisoCookies.classList.add('activo');
      fondoAvisoCookies.classList.add('activo');
    } else {
      dataLayer.push({ 'event': 'cookies-aceptadas' });
    }

    botonAceptarCookies.addEventListener('click', handleAceptarCookies);

    return () => {
      botonAceptarCookies.removeEventListener('click', handleAceptarCookies);
    };
  }, []);

  return (
    <>
      <div className="aviso-cookies" id="aviso-cookies">
        <img className="galleta" src="../imgHome/cookie.svg" alt="Galleta" />
        <h3 className="titulo">Cookies</h3>
        <p className="parrafo">Utilizamos cookies propias y de terceros para mejorar nuestros servicios.</p>
        <button className="boton" id="btn-aceptar-cookies">De acuerdo</button>
        <a className="enlace" href="aviso-cookies.html">Aviso de Cookies</a>
      </div>
      <div className="fondo-aviso-cookies" id="fondo-aviso-cookies"></div>
    </>
  );
};

export default CookieNotice;

// Declaración de la variable dataLayer
const dataLayer = [];
