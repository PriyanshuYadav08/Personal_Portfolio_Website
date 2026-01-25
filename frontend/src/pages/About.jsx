import "../styles/About.css"

export default function About() {
  return (
    <div className="container about">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">
        Aspiring Android and Full Stack Developer with a strong foundation in software development and a passion for creating innovative mobile applications. Skilled in building robust Java and Kotlin applications, complemented by hands-on experience in developing and deploying real-world projects. Currently enhancing expertise in Flutter and Dart to develop cross-platform mobile applications, aiming to deliver seamless user experiences across various devices.
      </p>

      <h2 className="section-title">Connect With Me</h2>
      <div className="connect-section">
        <a href="https://github.com/PriyanshuYadav08" className="connect-link" target="_blank" rel="noopener noreferrer">
          <svg className="connect-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/priyanshuyadav08" className="connect-link" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/linkedin.png" alt="LinkedIn" className="connect-icon" />
          <span>LinkedIn</span>
        </a>
        <a href="https://leetcode.com/u/priyanshu81104/" className="connect-link" target="_blank" rel="noopener noreferrer">
          <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="LeetCode" className="connect-icon" />
          <span>LeetCode</span>
        </a>
        <a href="https://open.spotify.com/user/r6vlkhxktrk4ypackny33us61" className="connect-link" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/spotify.png" alt="Spotify" className="connect-icon" />
          <span>Spotify</span>
        </a>
        <a href="https://www.instagram.com/pics.by.panther/" className="connect-link" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/instagram.png" alt="Instagram" className="connect-icon" />
          <span>Instagram</span>
        </a>
        <a href="https://drive.google.com/file/d/1ejXFHF0OLd6dphlmzObh9e_kOvGPP_Z-/view?usp=sharing" className="connect-link" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/resume.png" alt="Instagram" className="connect-icon" />
          <span>Latest Resume</span>
        </a>
      </div>

      <h2 className="section-title">Skills</h2>
      <div className="skills-section">
        <div className="skills-category">
          <h3 className="skills-category-title">Programming Languages</h3>
          <div className="skills-list">
            <span className="skill-tag">C/C++</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Kotlin</span>
            <span className="skill-tag">Dart</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">JavaScript</span>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Web & Markup Technologies</h3>
          <div className="skills-list">
            <span className="skill-tag">XML</span>
            <span className="skill-tag">HTML/CSS</span>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Frameworks</h3>
          <div className="skills-list">
            <span className="skill-tag">Flutter</span>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Express.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Material-UI</span>
            <span className="skill-tag">FastAPI</span>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Developer Tools</h3>
          <div className="skills-list">
            <span className="skill-tag">Android Studio</span>
            <span className="skill-tag">Google Cloud</span>
            <span className="skill-tag">Firebase</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">Postman</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Windows</span>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Databases</h3>
          <div className="skills-list">
            <span className="skill-tag">Firestore</span>
            <span className="skill-tag">RoomDB</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">MongoDB</span>
          </div>
        </div>
      </div>

      <h2 className="section-title">Education</h2>
      <div className="education-section">
        <div className="education-item">
          <h4 className="education-degree">Bachelor of Technology</h4>
          <div className="education-details">
            <p className="education-specialization">Information Technology & Mathematical Innovation</p>
            <p className="education-institution">Cluster Innovation Centre, University of Delhi</p>
            <p className="education-graduation">Expected Graduation - 2027</p>
          </div>
        </div>
        <div className="education-item">
          <h4 className="education-degree">AISSCE</h4>
          <div className="education-details">
            <p className="education-specialization">PCM + CS</p>
            <p className="education-institution">Navy Children School, New Delhi</p>
            <p className="education-graduation">Graduated - 2022</p>
          </div>
        </div>
      </div>
    </div>
  )
}