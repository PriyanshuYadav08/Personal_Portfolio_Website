import { experience } from "../data/experience"
import "./Experience.css"

export default function Experience() {
  return (
    <div className="page experience-page">
      <div className="fade-up">
        <p className="section-title">// experience</p>
        <h1 className="section-heading">Where I've Worked</h1>
      </div>

      <div className="timeline">
        {experience.map((exp, index) => {
          const [role, ...companyParts] = exp.role.split(" @ ")
          const company = companyParts.join(" @ ")
          const tools = exp.company.replace("Tools - ", "").split(", ")

          return (
            <div key={index} className="timeline-item fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="timeline-marker">
                <div className="timeline-dot" />
                {index < experience.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-content card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{role}</h3>
                    <p className="timeline-company">@ {company}</p>
                  </div>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                <div className="timeline-tools">
                  {tools.map(t => (
                    <span key={t} className="tag">{t.trim()}</span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
