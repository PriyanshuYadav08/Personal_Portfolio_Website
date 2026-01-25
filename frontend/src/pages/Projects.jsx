import { projects } from "../data/projects"
import "../styles/Experience.css"

export default function Projects() {
  return (
    <div className="container experience">
      <h2 className="section-title">Projects</h2>

      <div className="experience-section">
        {projects.map((project, index) => (
          <div className="experience-item" key={index}>
            <h3 className="experience-role">{project.title}</h3>
            <h4 className="experience-company">{project.stack.join(" • ")}</h4>
            <p className="experience-description">{project.description}</p>
            {project.link && (
              <p className="experience-duration">
                <a
                  href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#333", textDecoration: "underline" }}
                >
                  Github / View Project
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}