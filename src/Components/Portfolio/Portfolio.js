import React, { useState } from 'react';
import './Portfolio.css';
import Password from "../Portfolio/PortfolioImages/Password.png";
import Quiz from "../Portfolio/PortfolioImages/CodeQuiz.png";
import Readme from "../Portfolio/PortfolioImages/ReadmeGen.png";
import PWA from "../Portfolio/PortfolioImages/PWA.png";
import ORM from "../Portfolio/PortfolioImages/ORM.png";
import jrphotographyv1 from "../Portfolio/PortfolioImages/Photographyv1.png";
import jrphotographyv2 from "../Portfolio/PortfolioImages/Photographyv2.png";
import jrportfoliov1 from "../Portfolio/PortfolioImages/jrportfoliov1.png";
import jrportfoliov2 from "../Portfolio/PortfolioImages/jrportfoliov2.png";
import WeatherDashboard from "../Portfolio/PortfolioImages/WeatherDashboard.png";
import NoteTaker from "../Portfolio/PortfolioImages/NoteTaker.png";
import MarvelFlicks from "../Portfolio/PortfolioImages/MarvelFlicks.png";
import Projects from "../Portfolio/PortfolioImages/Projects.jpg";
import FitnessFlavors from "../Portfolio/PortfolioImages/FitnessFlavors.jpg";
import ReactWeather from "../Portfolio/PortfolioImages/ReactWeather.jpg";
import ReactPhotography from "../Portfolio/PortfolioImages/Website.jpg";
import VenuesXP from "../Portfolio/PortfolioImages/VenuesXP.png";
import Moore from "../Portfolio/PortfolioImages/Moore-Realestate.png";
import JE from "../Portfolio/PortfolioImages/JE.png";
import CE from "../Portfolio/PortfolioImages/Carter.png";
import HE from "../Portfolio/PortfolioImages/Holly.png";
import JR from "../Portfolio/PortfolioImages/JR.png";
import CMR from "../Portfolio/PortfolioImages/CMR.png";
import PC from "../Portfolio/PortfolioImages/pfeiffer.png"
import AOSInitializer from "../AOS/AOSInitializer";

function App() {
  const [selectedOption, setSelectedOption] = useState('Projects');

  const projects = [

    {
      title: "Marvel Flicks",
      category: "Group Projects",
      imgUrl: MarvelFlicks,
      githubLink: "https://github.com/TheWiseSailor/Marvel-Flicks",
      deployLink: "https://thewisesailor.github.io/Marvel-Flicks/",
    },
    {
      title: "Venues XP",
      category: "Group Projects",
      imgUrl: VenuesXP,
      githubLink: "https://github.com/TheWiseSailor/Venues-XP",
      deployLink: "https://thewisesailor.github.io/Venues-XP/",
    },
    {
      title: "Fitness Flavors",
      category: "Group Projects",
      imgUrl: FitnessFlavors,
      githubLink: "https://github.com/TheWiseSailor/Fitness-Flavors",
      deployLink: "https://thewisesailor.github.io/Fitness-Flavors/",
    },
    // { title: 'Future Project 1', category: 'Future Projects' },
    // { title: 'Future Project 2', category: 'Future Projects' },
    {
      title: "Pfeiffer Cafe (Beta)",
      category: "Projects",
      imgUrl: PC,
      githubLink: "https://github.com/TheWiseSailor/PfeifferCafeWebsite",
      deployLink: "https://thewisesailor.github.io/PfeifferCafeWebsite/",
    },
    {
      title: "JR.DEV",
      category: "Projects",
      imgUrl: JR,
      githubLink: "https://github.com/TheWiseSailor/JR.DEV",

    },
    {
      title: "Cmoore Real Estate",
      category: "Projects",
      imgUrl: CMR,
      githubLink: "https://github.com/TheWiseSailor/MooreRealEstate",
      deployLink: "https://TheWiseSailor.github.io/MooreRealEstate",
    }, 
    
    
    {
      title: "Holly.CO",
      category: "Projects",
      imgUrl: HE,
      githubLink: "https://github.com/TheWiseSailor/Holly.CO",
      deployLink: "https://thewisesailor.github.io/Holly.CO/",
    },
    {
      title: "CM.CO",
      category: "Projects",
      imgUrl: CE,
      githubLink: "https://github.com/TheWiseSailor/CM.CO",
      deployLink: "https://thewisesailor.github.io/CM.CO/",
    },
    {
      title: "JE.CO",
      category: "Projects",
      imgUrl: JE,
      githubLink: "https://github.com/TheWiseSailor/JE",
      deployLink: "https://thewisesailor.github.io/JE/",
    },
    {
      title: "React Photography",
      category: "Projects",
      imgUrl: ReactPhotography,
      githubLink: "https://github.com/TheWiseSailor/ReactJRPhotography",
      deployLink: "https://thewisesailor.github.io/ReactJRPhotography/",
    },
    {
      title: "Moore Real Estate (in the process of debugging)",
      category: "Projects",
      imgUrl: Moore,
      githubLink: "https://github.com/TheWiseSailor/Moore2.0",
      deployLink: "https://thewisesailor.github.io/Moore2.0/",
    },
    {
      title: "JR Portfolio V2",
      category: "Projects",
      imgUrl: jrportfoliov2,
      githubLink: "https://github.com/TheWiseSailor/professional-react-portfolio",
      deployLink: "thewisesailor.github.io/JR.CO",
    },
    {
      title: "JR Portfolio V1",
      category: "Projects",
      imgUrl: jrportfoliov1,
      githubLink: "https://github.com/TheWiseSailor/JR-Portfolio",
      deployLink: "https://thewisesailor.github.io/JR-Portfolio/",
    },
    {
      title: "JR Photography V1",
      category: "Projects",
      imgUrl: jrphotographyv1,
      githubLink: "https://github.com/TheWiseSailor/professional-react-portfolio",
      deployLink: "https://thewisesailor.github.io/JR-CO/",
    },
    {
      title: "JR Photography V2",
      category: "Projects",
      imgUrl: jrphotographyv2,
      githubLink: "https://github.com/TheWiseSailor/JR-Photography-v2",
      deployLink: "https://thewisesailor.github.io/JR-Photography-v2/",
    },
    {
      title: "Weather Dashboard",
      category: "Projects",
      imgUrl: WeatherDashboard,
      githubLink: "https://github.com/TheWiseSailor/Weather-DashBoard",
      deployLink: "https://thewisesailor.github.io/Weather-DashBoard/",
    },
    {
      title: "React Weather App",
      category: "Projects",
      imgUrl: ReactWeather,
      githubLink: "https://github.com/TheWiseSailor/ReactWeather",
      deployLink: "https://thewisesailor.github.io/ReactWeather/",
    },
    {
      title: "Note Taker",
      category: "Projects",
      imgUrl: NoteTaker,
      githubLink: "https://github.com/TheWiseSailor/Express.js-Note-Taker",
      deployLink: "https://note-taker-69-f0898b1dc611.herokuapp.com/",
    },
    {
      title: "JavaScript Quiz",
      category: "Projects",
      imgUrl: Quiz,
      githubLink: "https://github.com/TheWiseSailor/Javascript-Code-Quiz",
      deployLink: "https://thewisesailor.github.io/Javascript-Code-Quiz/",
    },
    {
      title: "Password Generator",
      category: "Projects",
      imgUrl: Password,
      githubLink: "https://github.com/TheWiseSailor/Password-Generator",
      deployLink: "https://thewisesailor.github.io/Password-Generator/",
    },
    {
      title: "Readme Generator",
      category: "Projects",
      imgUrl: Readme,
      githubLink: "https://github.com/TheWiseSailor/ReadME-Generator",
    },
    {
      title: "ORM Back-End",
      category: "Projects",
      imgUrl: ORM,
      githubLink: "https://github.com/TheWiseSailor/ORM-Ecommerce-Back-End",
      deployLink: "https://drive.google.com/file/d/1-7oAyGwLABI0Xom-XMOwHRXpDknNxI8n/view",
    },
    {
      title: "Progressive Web App",
      category: "Projects",
      imgUrl: PWA,
      githubLink: "https://github.com/TheWiseSailor/Progressive-Web-Applications-PWA-Challenge-Text-Editor",
    },
  ];
  

  const filteredProjects = projects.filter(project => project.category === selectedOption);

  return (
    <div className='PortfolioBg'>
    <div className="portfoliocontainer">
      <div className="selections">
        <button onClick={() => setSelectedOption('Projects')}>Projects</button>
        <button onClick={() => setSelectedOption('Group Projects')}>Group Projects</button>
        <button onClick={() => setSelectedOption('Future Projects')}>Future Projects</button>
        <button onClick={() => setSelectedOption('Future Projects')}>Preset Layouts</button>
      </div>
      <AOSInitializer/>
      <div className='projectList'data-aos="fade-down" data-aos-duration="3000">

        {filteredProjects.map((project, index) => (
          <div key={index} className='project'>
            <h3>{project.title}</h3>
            <img src={project.imgUrl} alt={project.title} className="project-image" />
            <p className="project-description"></p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.deployLink && <a href={project.deployLink} target="_blank" rel="noopener noreferrer">Deployed</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;

