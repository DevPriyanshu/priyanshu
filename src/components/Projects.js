import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import weather from "../assets/Projects/wheather.png";
import tic from "../assets/Projects/tic.jpg";
import job from "../assets/Projects/job.jpg";
export function Projects() {
  return (
    <section className="project" id="projects">
      <Container fluid className="project-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="project-heading">
                Here is my <strong className="purple">project </strong> which
                I've built
              </h1>
              <p
                style={{ color: "white", fontSize: "1.2em", marginTop: "20px" }}
              >
                Below are some of the projects I have recently developed. Each
                project showcases my skills and dedication to creating
                functional and user-friendly applications.
              </p>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={weather}
                isBlog={false}
                title="Weather App"
                description="A weather application built using JavaScript. It allows users to get real-time weather updates for any location. The app features a clean and intuitive interface, making it easy to check the weather conditions, temperature, and forecasts."
                demoLink="https://devpriyanshu.github.io/weather-app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={tic}
                isBlog={false}
                title="Tic Tac Toe Game"
                description="A classic Tic Tac Toe game built using JavaScript and Material-UI (MUI). This game features a sleek and modern interface, providing an enjoyable user experience. Players can compete against each other, and the game keeps track of the score. The responsive design ensures compatibility across various devices."
                demoLink="https://devpriyanshu.github.io/TIC-TAC-TOE/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={job}
                isBlog={false}
                title="Job Portal Web Application"
                description="A job portal application built using traditional Java technologies including JSP, Servlets, and MySQL. This platform allows users to connect with job providers, search for job listings, and apply for positions. The application features user authentication, job posting, and application tracking functionalities, providing a comprehensive solution for job seekers and employers."
                demoLink="https://devpriyanshu.github.io/job_portal/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
