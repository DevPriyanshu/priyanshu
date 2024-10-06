import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState } from "react";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import TechStackCard from "./TechStackCard";

export const TechStack = () => {
  const [selectedTab, setSelectedTab] = useState("ALL");
  return (
    <section className="technologies" id="technologies">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Tech Stack</h2>
                  <p class="skills-description">
                    I have a versatile skill set that encompasses both front-end
                    and back-end development, as well as data management. On the
                    front end, I work with HTML, CSS, and JavaScript, utilizing
                    frameworks like React.js to build responsive and
                    user-friendly interfaces. For back-end development, I am
                    proficient in Java, using frameworks such as Spring Boot and
                    Hibernate to create robust server-side applications and
                    APIs.
                    <br />
                    <span class="line"></span>
                    Additionally, I have experience with databases, including
                    SQL and NoSQL options like MongoDB, to effectively manage
                    and retrieve data. I am also familiar with AWS cloud
                    services, allowing me to deploy and scale applications
                    efficiently. In the realm of data engineering, I work with
                    tools like Kafka and Spark to process and analyze large
                    datasets. This blend of front-end, back-end, and data
                    engineering skills enables me to develop full-stack
                    applications that deliver seamless user experiences while
                    effectively handling data workflows.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link
                          onClick={() =>
                            setSelectedTab(selectedTab === "BE" ? "ALL" : "BE")
                          }
                          className={
                            selectedTab === "BE"
                              ? "animate__animated animate__slideInUp"
                              : ""
                          }
                          style={{
                            color:
                              selectedTab === "BE" && "rgb(179 185 192 / 42%)",
                            background:
                              selectedTab !== "BE" &&
                              `linear-gradient(
                  90.21deg,
                  rgba(170, 54, 124, 0.5) -5.91%,
                  rgba(74, 47, 189, 0.5) 111.58%
                )`,
                          }}
                        >
                          BackEnd
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          onClick={() =>
                            setSelectedTab(selectedTab === "FE" ? "ALL" : "FE")
                          }
                          className={
                            selectedTab === "FE"
                              ? "animate__animated animate__slideInUp"
                              : ""
                          }
                          style={{
                            color:
                              selectedTab === "FE"
                                ? "rgb(179 185 192 / 42%)"
                                : "",
                            background:
                              selectedTab !== "FE" &&
                              `linear-gradient(
                  90.21deg,
                  rgba(170, 54, 124, 0.5) -5.91%,
                  rgba(74, 47, 189, 0.5) 111.58%
                )`,
                          }}
                        >
                          FrontEnd
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          onClick={() =>
                            setSelectedTab(
                              selectedTab === "TOOL" ? "ALL" : "TOOL"
                            )
                          }
                          className={
                            selectedTab === "TOOL"
                              ? "animate__animated animate__slideInUp"
                              : ""
                          }
                          style={{
                            color:
                              selectedTab === "TOOL"
                                ? "rgb(179 185 192 / 42%)"
                                : "",
                            background:
                              selectedTab !== "TOOL" &&
                              `linear-gradient(
                  90.21deg,
                  rgba(170, 54, 124, 0.5) -5.91%,
                  rgba(74, 47, 189, 0.5) 111.58%
                )`,
                          }}
                        >
                          Tools
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <TechStackCard type={selectedTab} />
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background design"
      ></img>
    </section>
  );
};
