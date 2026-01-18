import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Priyanshu Yadav | Cluster Innovation Center | +91 8168068330</p>
      </div>
    </footer>
  )
}