import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h1 className="logo">Priyanshu Yadav</h1>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/photography">Photography</Link>
          <Link to="/music">My Top Picks</Link>
        </nav>
      </div>
    </header>
  )
}