// Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './HeaderImages/logo.png';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactClicked, setIsContactClicked] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsContactClicked(location.pathname === '/Contact');
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className={`HeaderPrimary ${isContactClicked ? 'contact' : ''}`}>
        <div className="container header">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>
          <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
            {/* <li><Link to="/Art">Art</Link></li> */}
            <li><Link to="/resume">Resume</Link></li>

            <li><Link to="/Portfolio">Portfolio</Link></li>

              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </nav>
          <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} className='mobile-menu-icon MMI-icon' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
//notes