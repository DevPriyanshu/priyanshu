import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgGlobe, CgGlobeAlt, CgWebsite } from "react-icons/cg";
import TrackVisibility from "react-on-screen";
import { Globe } from "react-bootstrap-icons";
import { BiGlobe } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa6";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
          </div>
        )}
      </TrackVisibility>

      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ textDecoration: "underline" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {!props.isBlog && props.demoLink && (
          <div className="mt-auto">
            <Button
              href={props.demoLink}
              target="_blank"
              style={{
                background: `linear-gradient(
                  90.21deg,
                  rgba(170, 54, 124, 0.5) -5.91%,
                  rgba(74, 47, 189, 0.5) 111.58%
                )`,
                color: "white", // Ensure the text color is visible against the gradient background
                border: "none", // Remove border color
                display: "flex",
                alignItems: "center", // Vertically center the content
                justifyContent: "center", // Center the text horizontally
              }}
            >
              <FaGlobe style={{marginRight:5}}/> &nbsp;
              {"View Project"}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
