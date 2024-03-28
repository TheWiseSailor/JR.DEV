import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomeRender from './Components/HomeRender';
import { Resume } from '../src/Components/Resume/Resume';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes> 
          <Route path="/" element={<HomeRender />} /> 
          <Route path="/resume" element={<Resume />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// get started on homepage
//then do the animations
//use three.js
//make the threejs animated as well