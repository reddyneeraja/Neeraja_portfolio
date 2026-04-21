import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Hero_section.css";

function Hero_section() {
  return (
    <section id="home" className="carousel_cont container-fluid">
      <Row className="align-items-center justify-content-center g-5 ">
        <Col md={5} className="text-center">
          <div className="hero-image-wrapper">
            <div className="rotating-border"></div>
            <div className="image-center">
              <img
                src="assets/arunaphoto.png"
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>
        </Col>
        <Col className="text-center text-md-start">
          <div className="hero-content">
            <h1>Neeraja Reddy</h1>

            <h1>Frontend Developer</h1>

            <button
              className="btn-gradient mt-3 w-50"
              onClick={() => {
                const element = document.getElementById("about");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Know More
            </button>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Hero_section;
