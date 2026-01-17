import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Priyanshu Yadav</p>
      </div>
    </footer>
  )
}