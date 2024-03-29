import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './HeaderImages/logo.png';
import './Header.css'; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isResumeClicked, setIsResumeClicked] = useState(false); 
  const [isPortfolioClicked, setIsPortfolioClicked] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    setIsContactClicked(pathname.toLowerCase() === '/contact');
    setIsResumeClicked(pathname.toLowerCase() === '/resume');
    setIsPortfolioClicked(pathname.toLowerCase() === '/portfolio');
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
