import { projects } from "../data/projects"
import "./Projects.css"

export default function Projects() {
  return (
    <div className="page projects-page">
      <div className="fade-up">
        <p className="section-title">// projects</p>
        <h1 className="section-heading">Things I've Built</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card fade-up" style={{ animationDelay: `${index * 0.04}s` }}>
            <div className="project-card-top">
              <div className="project-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              {project.link && (
                <a
                  href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  aria-label={`View ${project.title}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-stack">
              {project.stack.map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}