import React from 'react';
import AMI1 from './HeroImages/AMI1.png'
import './Hero.css';

const HomePage = () => {
  return (
    <div>
      <div className='LeftBackground'></div>
      <div className='HomePagePrimary'>
        <section className='Section1'>
          <img src={AMI1} alt="AMI1" className="AMI1" />
          <p className='P1'>Development, Made Simple</p>
        </section>
        <p className='P2'>"Development, Made Simple</p>
      </div>
    </div>
  );
}

export default HomePage;