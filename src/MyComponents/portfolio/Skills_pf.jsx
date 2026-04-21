import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Skills.css";

function Skills_pf() {
  const skills = [
    { name: "HTML5", level: 95, color: "#df4f2bff" },
    { name: "CSS3", level: 90, color: "#2965f1" },
    { name: "JavaScript", level: 85, color: "#f7df1e" },
    { name: "React.js", level: 90, color: "#61dafb" },
    { name: "Bootstrap", level: 95, color: "#7952b3" },
    { name: "Tailwind", level: 90, color: "#38bdf8" },
    { name: "Git & GitHub", level: 95, color: "#f34f29" },
    { name: "REST APIs", level: 85, color: "#00bcd4" },
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="skills-title text-center mb-5 mt-4">My Technical Skills</h2>
        <Row className="g-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col xs={6} sm={4} md={3} key={index}>
              <div className="skill-card" style={{ "--clr": skill.color }}>
                <div className="circle">
                  <div
                    className="bar"
                    style={{
                      background: `conic-gradient(${skill.color} ${
                        skill.level * 3.6
                      }deg, #222 0deg)`,
                    }}
                  ></div>
                  <div className="box">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills_pf;
