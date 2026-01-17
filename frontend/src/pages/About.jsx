import "../styles/About.css"

export default function About() {
  return (
    <div className="container about">
      <h2 className="section-title">About Me</h2>

      <p className="about-text">
        I'm a Computer Science undergraduate at Cluster Innovation Centre,
        University of Delhi. I enjoy building Android apps, simulations,
        and visually expressive projects.
      </p>

      <h3 className="sub-title">Education</h3>
      <ul className="education-list">
        <li>B.Tech – CIC, University of Delhi</li>
        <li>Expected Graduation: 2027</li>
      </ul>
    </div>
  )
}