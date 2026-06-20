import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">&lt;PY/&gt;</span>
        <p className="footer-copy">
          © {new Date().getFullYear()} PRIYANSHU YADAV &mdash; New Delhi, India
        </p>
        <div className="footer-contact">
          <a href="mailto:priyanshu81104@gmail.com">priyanshu81104@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}