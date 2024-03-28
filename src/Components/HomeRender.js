// HomeRender.js
import React from 'react';
import Hero from './HomePage/Hero/Hero';
import AboutMe from './HomePage/AboutMe/AboutMe';
import Socials from './HomePage/Socials/Socials';

const HomeRender = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Socials/>
    </div>
  );
}

export default HomeRender;
