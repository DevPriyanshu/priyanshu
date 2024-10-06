import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
// import linkedIn from "../assets/img/nav-icon1.svg";
import git from "../assets/git.svg";

const SocialIcons = () => (
  <div className="social-icon">
    {/* <a
      href="https://www.linkedin.com/in/priyanshuydv"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedIn} alt="LinkedIn" />
    </a> */}
    <a
      href="https://github.com/DevPriyanshu/priyanshu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={git} alt="Git" />
    </a>
  </div>
);

const NavLinks = ({ activeLink, onUpdateActiveLink }) => (
  <Nav className="ms-auto">
    <Nav.Link
      href="#home"
      className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
      onClick={() => onUpdateActiveLink("home")}
    >
      Home
    </Nav.Link>
    <Nav.Link
      href="#skills"
      className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
      onClick={() => onUpdateActiveLink("skills")}
    >
      Skills
    </Nav.Link>
    <Nav.Link
      href="#technologies"
      className={
        activeLink === "technologies" ? "active navbar-link" : "navbar-link"
      }
      onClick={() => onUpdateActiveLink("technologies")}
    >
      Technologies
    </Nav.Link>
    <Nav.Link
      href="#projects"
      className={
        activeLink === "projects" ? "active navbar-link" : "navbar-link"
      }
      onClick={() => onUpdateActiveLink("projects")}
    >
      Projects
    </Nav.Link>
  </Nav>
);

export const NavBar = () => {
  const [clickedLink, setClickedLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (value) => {
    setClickedLink(value);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h2 className="custom-heading">Priyanshu Y.</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLinks
              activeLink={clickedLink}
              onUpdateActiveLink={onUpdateActiveLink}
            />
            <span className="navbar-text">
              <SocialIcons />
              <HashLink to="#connect">
                <button>
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
