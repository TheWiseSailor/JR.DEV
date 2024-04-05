import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../Resume/images/Joseph.png";
import resumePDF from "../Resume/Resume.pdf";
import "./Resume.css";
import AOSInitializer from "../AOS/AOSInitializer";

export const Resume = () => {
  const onlineResumeLink =
    "https://drive.google.com/file/d/1DnDLx7TugADb3iDInaTY5dXzmnV8ocB6/view?usp=sharing";

  return (
    
    <section className="resume-background" id="resume-background">
        
      <div className="container-resume">
  

        <div className="resume-welcome-box">
  
        <div className='secondaryContainor-2'></div>
        <AOSInitializer/>
          <img className="resumePic" src={profilePic} alt="profile picture" data-aos="fade-down" data-aos-duration="3000"/>
          <AOSInitializer/>
          <div className="link-box">
            <a
              className="resume-button"
              data-aos="fade-up" data-aos-duration="3000"
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
              download="Resume.pdf"
            >
              Download Resume!
            </a>
            <a
              className="resume-button"
              data-aos="fade-up" data-aos-duration="3000"
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
            >
              View Resume!
            </a>
          </div>
        </div>
      </div>

    </section>
    
  );
};
