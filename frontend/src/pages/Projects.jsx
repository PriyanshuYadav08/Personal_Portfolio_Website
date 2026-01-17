import { projects } from "../data/projects"
import "../styles/Projects.css"

export default function Projects() {
  return (
    <div className="container">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="card project-card" key={i}>
            <h3>{p.title}</h3>
            <span>{p.tech}</span>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}