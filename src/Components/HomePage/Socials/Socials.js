import React from 'react';
import './Socials.css';
import mailIcon from './SocialImages/mail.png';
import github from './SocialImages/github.png';
import phoneIcon from './SocialImages/phone.png';


const Social = () => {
  const handleCall = () => {
    window.location.href = 'tel:+';
  };

  return (
    
    <div className="social-container">
      <div className='secondaryContainor'></div>
       {/* This is the black background */}
      <div className='SocialContactContainer' data-aos="fade-up" data-aos-duration="3000">
        <h2>Contact Me!</h2>
        <div className="social-icons">
         
          <a href="mailto:Rudasilljosephr@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} alt="Email" />
          </a>

          <a href="https://github.com/TheWiseSailor" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" />
          </a>
        
        </div>
      </div>
    </div>
  );
}

export default Social;
