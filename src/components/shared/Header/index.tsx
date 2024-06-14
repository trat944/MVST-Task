import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './header.css'; 

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="header">
      <div className="navbar-logo">
        <img className='logo' src="src/assets/logo.png" alt="Logo" />
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href='/'>Home</a>
        <a>Repositories</a>
        <a>About Us</a>
        <a>Contact</a>
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
      <FontAwesomeIcon className='menu-icon' icon={faBars} />
      </div>
    </nav>
  );
};
