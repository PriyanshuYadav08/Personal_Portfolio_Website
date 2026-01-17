import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h1 className="logo">Priyanshu Yadav</h1>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/photography">Photography</Link>
          <Link to="/music">Music</Link>
        </nav>
      </div>
    </header>
  )
}