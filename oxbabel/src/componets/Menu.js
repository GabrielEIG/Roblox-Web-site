import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Menu = ({ routes }) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsResponsive(true);
    } else {
      setIsResponsive(false);
      setIsOpen(false);
    }
  };

  // Manejamos el evento resize para actualizar el estado de responsive
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Comprobamos el tamaño inicial de la ventana

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="menu-bar">
      
      {isResponsive ? (
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      ) : (
        <ul className="menu-list">
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      )}
      {isOpen && isResponsive && (
        <ul className="menu-list responsive">
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Menu;
