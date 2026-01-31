import './About.css';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about__layout">
          <div className="about__education card">
            <div className="about__edu-header">
              <span className="about__badge">BE • CSE</span>
              <div className="about__grade">
                <span className="about__grade-label">Grade</span>
                <span className="about__grade-value">8.81</span>
              </div>
            </div>
            <p className="about__edu-blurb muted">
              Bachelor of Engineering in Computer Science with strong foundations in systems,
              data structures and algorithms, computer networks, and modern web technologies.
            </p>
          </div>

          <div className="about__internships">
            <article className="about-card">
              <h3 className="about-card__title">Intern Trainee — Comcast</h3>
              <p className="about-card__meta muted">Wi‑Fi • RDK Stack • Linux</p>
              <p className="about-card__desc">
                Built mobile automation utilities, wrote Bash shell scripts, and optimized reliability across device integrations.
              </p>
            </article>
            <article className="about-card about-card--offset">
              <h3 className="about-card__title">React.js Developer Intern — Icanio Technology</h3>
              <p className="about-card__meta muted">React • MUI • Express.js</p>
              <p className="about-card__desc">
                Built and maintained a responsive hotel booking app using React.js, Vite and Material-UI.
              </p>
            </article>
          </div>

          <div className="about__experience card">
            <h3 className="about__subtitle">Professional Experience — Comcast </h3>
            <ul className="about-timeline">
              <li className="about-timeline__item">
                <div className="about-timeline__dot" />
                <div className="about-timeline__content">
                  <h4>Software Development and Engineering — SDET</h4>
                  <p className="muted">Jul 2024 — Present</p>
                  <p>
                    Developed internal tools and feature validation, including automation utilities, error markers, and telemetry configuration. Supported reliable releases through systematic testing and close collaboration with development teams.
                  </p>
                </div>
              </li>
              <li className="about-timeline__item">
                <div className="about-timeline__dot" />
                <div className="about-timeline__content">
                  <h4>Intern Trainee</h4>
                  <p className="muted">Jan 2024  — Jun 2024</p>
                  <p>
                    Built foundational knowledge of Wi‑Fi systems, networking protocols, and RDK services while working on mobile automation testing. Contributed test utilities and validation workflows to improve device and service reliability.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="about__hobbies card">
            <h3 className="about__subtitle">Hobbies</h3>
            <div className="about__tags">
              <span className="about-tag">Tech Upskilling</span>
              <span className="about-tag">DSA Problem Solving</span>
              <span className="about-tag">CSS Styling</span>
              <span className="about-tag">Networking with like minded individuals </span>
              <span className="about-tag">Food Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
