import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    image:"assets/furniture_home_sc.png",
    title: "Furniture e-commerce",
    description: "A modern website built with javascript, Bootstrap, animations & EmailJS",
    tech: ["javascript", "Bootstrap", "CSS","EmailJS"],
    live: "#",
    github: "#"
  },
  {
    image:"assets/furniture_home_sc.png",

    title: "Under Process",
    description: "Live weather visualization with API + animated temperature cards.",
    tech: ["JavaScript", "API", "CSS"],
    live: "#",
    github: "#"
  },
  {
    image:"assets/furniture_home_sc.png",

    title: "Under Process",
    description: "Frontend UI clone with hover trailers, categories & dynamic rows.",
    tech: ["React", "Bootstrap", "CSS"],
    live: "#",
    github: "#"
  },
];

function Projects_pf() {
  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title ">My Projects</h1>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-unique-card" key={index}>
            <div className="project-shine"></div>

            <div>
              <img src={project.image} alt="project_homepage" className="project_image" />
            </div>
            <h2 className="project-name mt-2">{project.title}</h2>
            <p className="project-desc">{project.description}</p>

            <div className="tech-box">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.live} target="_blank" className="proj-live">
                Live Demo <FaExternalLinkAlt />
              </a>
              <a href={project.github} target="_blank" className="proj-code">
                View Code <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects_pf;
