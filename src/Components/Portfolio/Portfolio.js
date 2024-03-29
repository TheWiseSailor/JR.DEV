import React, { useState } from 'react';
import './Portfolio.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('Projects');

  const projects = [
    { title: 'Project 1', category: 'Projects' },
    { title: 'Project 2', category: 'Projects' },
    { title: 'Group Project 1', category: 'Group Projects' },
    { title: 'Group Project 2', category: 'Group Projects' },
    { title: 'Future Project 1', category: 'Future Projects' },
    { title: 'Future Project 2', category: 'Future Projects' },
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
