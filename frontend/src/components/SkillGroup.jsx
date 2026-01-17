export default function SkillGroup({ title, items }) {
  return (
    <>
      <h3>{title}</h3>
      <div className="skills-wrap">
        {items.map((item, i) => (
          <span key={i} className="skill-chip">{item}</span>
        ))}
      </div>
    </>
  )
}