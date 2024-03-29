import React, { useState } from 'react';
import './Portfolio.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('Projects');

  const projects = [
    {
      title: "Marvel Flicks",
      category: "Group Projects"
    },
    {
      title: "Venues XP",
      category: "Group Projects"
    },

    {
      title: "Fitness Flavors",
      category: "Group Projects"
    },
    { title: 'Future Project 1', category: 'Future Projects' },
    { title: 'Future Project 2', category: 'Future Projects' },




    {
      title: "Holly.CO",
      category: "Projects"
    },
    {
      title: "CM.CO",
      category: "Projects"
    },
    {
      title: "JE.CO",
      category: "Projects"
    },
    {
      title: "React Photography",
      category: "Projects"
    },
    {
      title: "Moore Real Estate",
      category: "Projects"
    },
    {
      title: "JR Portfolio V2",
      category: "Projects"
    },
    {
      title: "JR Portfolio V1",
      category: "Projects"
    },
    {
      title: "JR Photography V1",
      category: "Projects"
    },
    {
      title: "JR Photography V2",
      category: "Projects"
    },
    {
      title: "Weather Dashboard",
      category: "Projects"
    },
    {
      title: "React Weather App",
      category: "Projects"
    },
    {
      title: "Note Taker",
      category: "Projects"
    },
    {
      title: "JavaScript Quiz",
      category: "Projects"
    },
    {
      title: "Password Generator",
      category: "Projects"
    },
    {
      title: "Readme Generator",
      category: "Projects"
    },
    {
      title: "ORM Back-End",
      category: "Projects"
    },
    {
      title: "Progressive Web App",
      category: "Projects"
    },
  ];

  const filteredProjects = projects.filter(project => project.category === selectedOption);

  return (
    <div className="portfoliocontainer">
      <div className="selections">
        <button onClick={() => setSelectedOption('Projects')}>Projects</button>
        <button onClick={() => setSelectedOption('Group Projects')}>Group Projects</button>
        <button onClick={() => setSelectedOption('Future Projects')}>Future Projects</button>
      </div>
      <div className='projectList'>
        {filteredProjects.map((project, index) => (
          <div key={index} className='project'>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
