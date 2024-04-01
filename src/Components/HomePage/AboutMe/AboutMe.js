import React from 'react';
import './AboutMe.css'; // Import the CSS file
import AMI1 from'./AboutMeImages/AMI1.png'
import AOSInitializer from "../../AOS/AOSInitializer";
const AboutMe = () => {
  return (

    <div className='AboutBG'>
  
    <div className="about-me-container-primary"data-aos="fade-down" data-aos-duration="3000">
    <AOSInitializer/>
      <div className="ABContainer">
      <AOSInitializer/>
        <h2 className='H2Header'data-aos="fade-down" data-aos-duration="3000">About Me</h2>
        <p className='AboutMeP'data-aos="fade-up" data-aos-duration="3000">
        <AOSInitializer/>
I am a Full-stack Developer who is heavily focused on the frontend. I love creating sleek, minimalist websites. In the future I would also like to take part, in both Real Estate, and Stock Market Exchanges,</p>
      </div>
   
      <img src={AMI1} alt="Profile Picture" className="profile-picture" data-aos="fade-down" data-aos-duration="3000" />
    
    </div>
    </div>
  );
};

export default AboutMe;
