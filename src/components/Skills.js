import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p class="skills-description">
                I am a skilled software developer with a strong proficiency in
                backend technologies and expertise in backend development. While
                my primary focus is on backend engineering, I am also capable of
                handling frontend tasks effectively.
                
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Backend Development Meter" />
                  <h5>Backend Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="FrontEnd Development Meter" />
                  <h5>FrontEnd Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="DataBase Engineering Meter" />
                  <h5>DataBase Engineering</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Data Engineer Meter" />
                  <h5>Data Engineer</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background Design"
      />
    </section>
  );
};
