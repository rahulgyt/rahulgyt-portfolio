import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahul G </span>
            from <span className="purple"> Kerala, India.</span>
            <br />I am a currently working as a System Engineer in TCS, Bangalore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Making Youtube Videos.
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in idea Challenges.
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about Emerging Technologies.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
