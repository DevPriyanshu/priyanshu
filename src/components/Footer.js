import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <p>Designed by priyanshu yadav</p>
          <p>priyansu.ydv.b@gmail.com</p>
          <p>+91 7903588014</p>
          <p>New Delhi, India</p>
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/priyanshuydv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={navIcon1} alt="LinkedIn Icon" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={navIcon2} alt="Facebook Icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={navIcon3} alt="Instagram Icon" />
            </a>
          </div>
          <p>© 2024. All Rights Reserved</p>
        </Col>
      </Row>
    </footer>
  );
};
