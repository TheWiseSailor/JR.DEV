import React from 'react';
import AMI1 from './HeroImages/AMI1.png'
import './Hero.css';
import AOSInitializer from "../../AOS/AOSInitializer";
const HomePage = () => {
  return (
    <div>
      <div className='LeftBackground'></div>
      <div className='HomePagePrimary'>
        <section className='Section1'>
        <AOSInitializer/>
          <img src={AMI1} alt="AMI1" className="AMI1" data-aos="fade-down" data-aos-duration="3000" />
          <AOSInitializer/>
          <p className='P1'data-aos="fade-up" data-aos-duration="3000">Development, Made Simple</p>
        </section>
        <AOSInitializer/>

        <p className='P2'data-aos="fade-up" data-aos-duration="3000">"Development, Made Simple</p>
      </div>
    </div>
  );
}

export default HomePage;