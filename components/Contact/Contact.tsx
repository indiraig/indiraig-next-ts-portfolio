'use client';
import './Contact.css';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'indiraig.dev@gmail.com';

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="section contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="muted contact__intro">
          I’m open to interesting opportunities and collaborations. Reach out via email or connect on social.
        </p>

        <article className="card contact-card">
          <div className="contact-card__main">
            <h3 className="contact-card__email">{email}</h3>
            <div className="contact-card__actions">
              <button className="btn btn--primary" onClick={onCopy}>
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
              <a className="btn" href={`mailto:${email}`}>Open Mail</a>
            </div>
          </div>

          <div className="contact-card__socials">
            <a className="btn" href="https://github.com/indiraig" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/indira-ig" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </article>
      </div>
    </section>
  );
}
