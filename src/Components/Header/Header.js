import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './HeaderImages/logo.png';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isResumeClicked, setIsResumeClicked] = useState(false); // Define state for Resume
  const [isPortfolioClicked, setIsPortfolioClicked] = useState(false); // Define state for Portfolio
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    setIsContactClicked(pathname === '/Contact');
    setIsResumeClicked(pathname === '/Resume');
    setIsPortfolioClicked(pathname === '/Portfolio');
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className={`HeaderPrimary ${isContactClicked ? 'contact' : ''} ${isResumeClicked ? 'resume' : ''} ${isPortfolioClicked ? 'portfolio' : ''}`}>
        <div className="container header">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>
          <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/resume" className={isResumeClicked ? 'black-and-white' : ''}>Resume</Link></li>
              <li><Link to="/portfolio" className={isPortfolioClicked ? 'black-and-white' : ''}>Portfolio</Link></li>
              <li><Link to="/Contact" className={isContactClicked ? 'black-and-white' : ''}>Contacts</Link></li>
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
