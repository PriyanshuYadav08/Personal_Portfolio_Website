import "./About.css"

const SKILLS = [
  {
    category: "Languages",
    items: ["Kotlin", "Java", "Python", "Dart", "C/C++", "JavaScript"]
  },
  {
    category: "Frameworks",
    items: ["Flutter", "React.js", "Express.js", "Node.js", "FastAPI", "Material-UI"]
  },
  {
    category: "Mobile & Tools",
    items: ["Android Studio", "Firebase", "Firestore", "RoomDB", "Google Cloud", "Postman"]
  },
  {
    category: "Web & DB",
    items: ["HTML/CSS", "XML", "MySQL", "MongoDB", "GitHub", "Figma"]
  },
]

const SOCIAL = [
  { label: "GitHub", url: "https://github.com/PriyanshuYadav08", icon: "gh" },
  { label: "LinkedIn", url: "https://linkedin.com/in/priyanshuyadav08", icon: "li" },
  { label: "LeetCode", url: "https://leetcode.com/u/priyanshu81104/", icon: "lc" },
  { label: "Spotify", url: "https://open.spotify.com/user/r6vlkhxktrk4ypackny33us61", icon: "sp" },
  { label: "Instagram", url: "https://www.instagram.com/pics.by.panther/", icon: "ig" },
  { label: "Resume", url: "https://drive.google.com/file/d/1yv0t4Mg0Aur6un1zfshl2SxNHGgte6dk/view?usp=sharing", icon: "cv" },
]

const EDUCATION = [
  {
    degree: "B.Tech — Information Technology & Mathematical Innovation",
    school: "Cluster Innovation Centre, University of Delhi",
    year: "2023 – 2027",
  },
  {
    degree: "AISSCE — PCM + Computer Science",
    school: "Navy Children School, New Delhi",
    year: "Graduated 2022",
  },
]

function SocialIcon({ icon }) {
  const icons = {
    gh: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    li: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    lc: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
    sp: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
    ig: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    cv: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  }
  return icons[icon] || null
}

export default function About() {
  return (
    <div className="page about-page">
      <div className="about-header fade-up">
        <p className="section-title">// about_me</p>
        <h1 className="section-heading">Who I Am</h1>
        <p className="about-bio">
          CS undergrad at Cluster Innovation Centre, University of Delhi — building Android apps, training ML models, and shooting photography across India. I write Kotlin for mobile, Python for models, and occasionally Dart when I feel adventurous.
        </p>
      </div>

      <div className="about-grid">
        <section className="about-section fade-up">
          <p className="section-title">// connect</p>
          <h2 className="about-section-heading">Find Me Online</h2>
          <div className="social-grid">
            {SOCIAL.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="social-card">
                <span className="social-icon"><SocialIcon icon={s.icon} /></span>
                <span className="social-label">{s.label}</span>
                <svg className="social-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                  <path d="M3 13L13 3M13 3H7M13 3v6"/>
                </svg>
              </a>
            ))}
          </div>
        </section>

        <section className="about-section fade-up">
          <p className="section-title">// skills</p>
          <h2 className="about-section-heading">Tech Stack</h2>
          <div className="skills-grid">
            {SKILLS.map(group => (
              <div key={group.category} className="skill-group">
                <p className="skill-group-label">{group.category}</p>
                <div className="skill-tags">
                  {group.items.map(item => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section fade-up">
          <p className="section-title">// education</p>
          <h2 className="about-section-heading">Background</h2>
          <div className="edu-list">
            {EDUCATION.map((e, i) => (
              <div key={i} className="edu-item card">
                <span className="edu-year">{e.year}</span>
                <h3 className="edu-degree">{e.degree}</h3>
                <p className="edu-school">{e.school}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}