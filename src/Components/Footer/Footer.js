import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [isContactClicked, setIsContactClicked] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsContactClicked(location.pathname === '/Contact');
  }, [location.pathname]);

  return (
    <footer className={`footer ${isContactClicked ? 'contact' : ''}`}>
      <p className='ft'>JR.CO &copy; All rights reserved.</p>
    </footer>
  );
};

export default Footer;
