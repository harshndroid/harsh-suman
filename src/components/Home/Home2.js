import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Pointer from "../Pointer";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <div style={{display:"flex", alignItems:"center"}}><div><Pointer/></div>  <div>I’m a React developer with 3.5 years of work experience</div></div>
              <br />
              <div style={{display:"flex", alignItems:"center"}}><div><Pointer/></div>  <div>I have solved complex product use cases using strong foundation in <b className="purple">React</b> and <b className="purple"> Javascript</b></div></div>
              <br />
              <div style={{display:"flex", alignItems:"center"}}><div><Pointer/></div>  <div>I'm flexible in <b className="purple">adapting</b> and changing role based on any JavaScript framework or library</div></div>
              <br />
             <div style={{display:"flex", alignItems:"center"}}><div><Pointer/></div>  <div> Whenever I get time, I also apply my <b className="purple">backend</b> knowledge for developing fullstack applications
              using <b className="purple">Node.js</b> and{" "}
                <b className="purple">
                  MongoDB{" "}
                </b>
                to{" "}
              <i><b>
                 turn my ideas into products
                </b>
              </i>
              </div></div>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{fontStyle:"italic", fontWeight:"bold", fontSize: 18}}>find me on</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/harshndroid"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/harsh-suman/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/playwithkoki"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
