import { experience } from "../data/experience"
import "../styles/Experience.css"

export default function Experience() {
  return (
    <div className="container experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-section">
        {experience.map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3 className="experience-role">{exp.role}</h3>
            <h4 className="experience-company">{exp.company}</h4>
            <p className="experience-duration">{exp.duration}</p>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}