import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../Resume/images/Joseph.png";
import resumePDF from "../Resume/Resume.pdf";
import "./Resume.css";
export const Resume = () => {
  const onlineResumeLink =
    "https://drive.google.com/file/d/1OJFbFOo9bIljhYRhJn6LSCQhvQ3kinw-/view?usp=sharing";

  return (
    <section className="resume" id="resume">
      <div className="container-resume">
        <div className="resume-welcome-box">
          <h1 className="resume-welcome">
        
          </h1>
          <img className="resumePic" src={profilePic} alt="profile picture" />
          <div class="link-box2">
            <a
              className="resume-button"
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
              download="Resume.pdf"
            >
              Download Resume!
            </a>
          </div>
          <div class="link-box1 pb-32">
            <a
              className="resume-link"
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

//spruce up the website a bit more