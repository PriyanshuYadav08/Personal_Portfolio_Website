import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Home.css"

const ROLES = [
  "Android Developer",
  "ML Enthusiast",
  "Flutter Builder",
  "C++ Programmer",
  "Photographer",
]

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = ROLES[roleIdx]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section className="home">
      <div className="home-bg">
        <div className="home-grid" />
        <div className="home-glow" />
      </div>

      <div className="home-content">
        <div className="home-eyebrow">
          <span className="home-dot" />
          <span>Available for opportunities</span>
        </div>

        <h1 className="home-name">
          PRIYANSHU<br />
          <span className="home-name-accent">YADAV</span>
        </h1>

        <div className="home-role">
          <span className="home-role-prefix">$ </span>
          <span className="home-role-text">{displayed}</span>
          <span className="home-cursor">|</span>
        </div>

        <p className="home-bio">
          CS undergrad at Cluster Innovation Centre, University of Delhi.
          I build Android apps, train ML models and do photography.
        </p>

        <div className="home-actions">
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
          <Link to="/about" className="btn btn-secondary">About Me</Link>
        </div>

        <div className="home-stats">
          <div className="home-stat">
            <span className="home-stat-num">10+</span>
            <span className="home-stat-label">Projects</span>
          </div>
          <div className="home-stat-divider" />
          <div className="home-stat">
            <span className="home-stat-num">3</span>
            <span className="home-stat-label">Internships</span>
          </div>
          {/* <div className="home-stat-divider" />
          <div className="home-stat">
            <span className="home-stat-num">55+</span>
            <span className="home-stat-label">Photos</span>
          </div> */}
        </div>
      </div>

      <div className="home-portrait-wrap">
        <div className="home-portrait-ring" />
        <img
          src="/assets/DSC_0278.JPG"
          alt="Priyanshu Yadav"
          className="home-portrait"
        />
      </div>
    </section>
  )
}