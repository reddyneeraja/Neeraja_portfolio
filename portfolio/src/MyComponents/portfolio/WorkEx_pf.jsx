import { motion } from "framer-motion";
import "./Workex.css";

function WorkEx_pf() {
  const experiences = [ ];

  return (
    <section className="timeline-section " id="experience">
      {/* <motion.h2
        className="timeline-title text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2> */}

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h5>{exp.company}</h5>
              <p className="duration">{exp.duration}</p>
              <p className="client">
                <strong>Client:</strong> {exp.client}
              </p>
              <ul>
                {exp.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <p className="tech">
                <strong>Technologies:</strong> {exp.tech}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkEx_pf;
