import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harsh Suman </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I am currently working as an SDE 2 at Chalo.
            <br />
            I have completed B.Tech. in Information Technology from IIIT
            Una.
            <br />
            <br />
            Along with coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solo travelling and exploring hills
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing instruments
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Harsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
