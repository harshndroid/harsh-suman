import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Soul finder"
              description="This web app helps solo travelers connect with other travelers nearby in real-time. They can meet, share travel experiences, and split common expenses like hotel bills and cab fares. It will make traveling more economical and fun and help people make new friends. Tech Stack: React.js, Node.js, MongoDB, Express, AWS S3 for uploading image, JWT for authentication"
              ghLink="https://github.com/harshndroid/soulfinder-frontend"
              demoLink="https://soulfinder.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Audio video compressor"
              description="A tool for compressing audio and video files with customizable compression methods, allowing usersto adjust settings based on their requirements. Tech Stack: React.js, JavaScript, FFMPEG"
              ghLink="https://github.com/harshndroid/audio-video-compressor"
              demoLink="https://audio-video-compressor.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Organized me"
              description="An android app which loads a react app in its WebView. Building this app for personal use to keep track of my daily tasks and short-term/long-term goals."
              ghLink="https://github.com/harshndroid/organized-me"
              demoLink="https://organized-me.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Login if you can"
              description="A fun and tricky login screen where users struggle to sign up while humorous memes pop up as feedback."
              // ghLink="https://github.com/harsh/Plant_AI"
              demoLink="https://musical-developer.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
