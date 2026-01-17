import Card from "./Card"

export default function ProjectCard({ project }) {
  return (
    <Card>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <small>{project.stack.join(" • ")}</small>
    </Card>
  )
}