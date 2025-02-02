import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiNextdotjs,
  SiTypescript
} from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript color="#ffff00" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact color='#58c4dc' />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs color="#189a2e" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb color="#008000" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript color="#719af4" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit color="#f14e32" />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple color="#b52e31" />
      </Col>
    </Row>
  );
}

export default Techstack;
