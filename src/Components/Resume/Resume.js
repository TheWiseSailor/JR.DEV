import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../Resume/images/Joseph.png";
import resumePDF from "../Resume/Resume.pdf";
import "./Resume.css";

export const Resume = () => {
  const onlineResumeLink =
    "https://drive.google.com/file/d/1OJFbFOo9bIljhYRhJn6LSCQhvQ3kinw-/view?usp=sharing";

  return (
    
    <section className="resume-background" id="resume-background">
        
      <div className="container-resume">
        <div className="resume-welcome-box">
        <div className='secondaryContainor-2'></div>
          <img className="resumePic" src={profilePic} alt="profile picture" />
          <div className="link-box">
            <a
              className="resume-button"
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
              download="Resume.pdf"
            >
              Download Resume!
            </a>
            <a
              className="resume-button"
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
