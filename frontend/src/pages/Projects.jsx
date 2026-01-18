import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <div>
    <Section>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </Section>
    </div>
  )
}