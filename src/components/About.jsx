import React from 'react';

export default function About() {
  return (
    <section id="about" className="section about">
      <header className="section-header">
        <h2>ABOUT ME</h2>
      </header>

      <div className="about-grid">
        <div className="about-summary">
          <h3>I'm Rishav Kumar</h3>
          <p className="about-role">Software Engineer @ Ethara AI | AI/LLM Engineer | Full Stack Developer</p>
          <p>
            I am Rishav Kumar, a Software Engineer at Ethara AI with experience in AI/LLM systems and Full Stack Development. I specialize in building scalable web applications, automation pipelines, and AI-driven solutions using technologies like React, Node.js, Python, Docker, and cloud tools.
          </p>
          <p>
            I have a strong foundation in designing automation pipelines, performing LLM evaluations, benchmarking language models, and developing robust web architectures.
          </p>
          <p>
            I'm passionate about building scalable, production-grade applications and AI workflows that solve complex real-world problems and drive digital transformation.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-value">20+</span>
            <span className="stat-label">Web Projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">15+</span>
            <span className="stat-label">MERN Apps</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">2+ years</span>
            <span className="stat-label">Coding Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">12+</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>
      </div>

      <div className="about-services">
        <h3>What I Do</h3>
        <div className="service">
          <h4>AI & LLM Engineering</h4>
          <p>
            Developing AI-driven solutions, setting up robust evaluation frameworks, curating high-quality datasets, and benchmarking model performances.
          </p>
        </div>
        <div className="service">
          <h4>Full Stack Development</h4>
          <p>
            Comprehensive web application development using React, Node.js, and Python. Designing RESTful APIs, modern user interfaces, and optimizing backend systems.
          </p>
        </div>
        <div className="service">
          <h4>Automation & Pipelines</h4>
          <p>
            Building end-to-end dataset curation pipelines, model validation pipelines, testing suites, and deploying containerized services with Docker.
          </p>
        </div>
        <div className="service">
          <h4>Website Testing & QA</h4>
          <p>
            Ensuring high-quality deliverables through rigorous website testing. Expert in identifying bugs, performance bottlenecks, and ensuring cross-browser compatibility and responsive design perfection.
          </p>
        </div>
        <div className="service">
          <h4>Backend & API Design</h4>
          <p>
            Building secure and scalable server-side logic with Node.js and Express. Expert in implementing authentication (JWT/OAuth), middleware, and optimizing MongoDB queries for performance.
          </p>
        </div>
      </div>
    </section>
  );
}
