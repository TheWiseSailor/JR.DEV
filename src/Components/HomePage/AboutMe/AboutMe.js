import React from 'react';
import './AboutMe.css'; // Import the CSS file
import AMI1 from'./AboutMeImages/AMI1.png'
const AboutMe = () => {
  return (
    <div className='AboutBG'>
    <div className="about-me-container-primary">
      
      <div className="ABContainer">
        <h2 className='H2Header'>About Me</h2>
        <p className='AboutMeP'>
I am a Full-stack Developer who is heavily focused on the frontend. I love creating sleek, minimalist websites. In the future I would also like to take part, in both Real Estate, and Stock Market Exchanges,</p>
      </div>
      <img src={AMI1} alt="Profile Picture" className="profile-picture" />
    </div>
    </div>
  );
};

export default AboutMe;
