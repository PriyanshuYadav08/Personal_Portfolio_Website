import { socialLinks } from "../data/socialLinks"

export default function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((s, i) => (
        <a key={i} href={s.url} target="_blank">{s.name}</a>
      ))}
    </div>
  )
}