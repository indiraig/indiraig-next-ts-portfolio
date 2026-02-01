import './Hero.css';

export default function Hero() {
  return (
    <section className="section hero">
      <div className="container hero__inner">
        <h1 className="hero__title">
          <span className="hero__title-gradient">Indira Gandhi — Frontend × AI Enthusiast
            </span> 
        </h1>
        <h3 className="hero__titlesub"> <span className="hero__title-gradient_sub">Next.js & React.js
            </span> </h3>
        <p className="hero__subtitle muted">
          SDET • Application Development • Wi‑Fi • RDK Stack
        </p>
        <p className="hero__description">
         I enjoy building accessible, performance-optimized interfaces grounded in robust CSS architecture and thoughtful UI behavior.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">View Projects</a>
          <a className="btn" href="#contact">Get in Touch</a>
          <a className="btn" href="#certificates">Certifications</a>
        </div>


      </div>
    </section>
  );
}
