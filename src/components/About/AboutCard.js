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
            from <span> Bengaluru, India.</span>
            <br />
            I am currently working at Chalo as an <span className="purple">SDE II</span>.
            <br />
            I have completed B.Tech. in <span className="purple">Information Technology</span> from IIIT
            Una in 2021.
            <br />
            <br />
            Along with coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              🗺️ Solo travelling
            </li>
            <li className="about-activity">
              🎶 Playing instruments
            </li>
            <li className="about-activity">
              🏔️ Exploring hills
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I'm always open to new ideas and transforming it into products !"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
