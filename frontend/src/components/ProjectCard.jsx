import Card from "./Card"

export default function ProjectCard({ project }) {
  return (
    <Card>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <small>{project.stack.join(" • ")}</small>
      {project.link && (
        <div>
          <a
            href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#222326", textDecoration: "underline" }}
          >
            GitHub / Live Link
          </a>
        </div>
      )}
    </Card>
  )
}