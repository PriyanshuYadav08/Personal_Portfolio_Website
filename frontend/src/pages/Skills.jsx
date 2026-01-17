import { skills } from "../data/skills"
import "../styles/Skills.css"

export default function Skills() {
  return (
    <div className="container">
      <h2 className="section-title">Skills</h2>

      <div className="skills-wrap">
        {skills.map((skill, i) => (
          <span key={i} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}