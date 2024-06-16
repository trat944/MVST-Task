import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './header.css'; 

export const Header = () => {
  const [openTrigger, setOpenTrigger] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpenTrigger(!openTrigger);
  };

   /* 
  *This function handles clicks outside the menu
  * menuRef.current is the div that contains the menu. If the menu is 
  * open and the click was not inside the menu, we close it
  */
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpenTrigger(false);
    }
  };

  useEffect(() => {
    /*
    *This listener calls handleClickOutside when a click happens anywhere in the document
    */
    document.addEventListener('mousedown', handleClickOutside);

    /* 
    *This return function runs when the component unmounts
    * We remove the event listener to avoid memory usage
    */
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="header">
      <div className="navbar-logo">
        <img className='logo' src="/logo.png" alt="Github Premium Logo" />
      </div>
      <div ref={menuRef} className={`navbar-links ${openTrigger ? 'open' : ''}`}>
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

