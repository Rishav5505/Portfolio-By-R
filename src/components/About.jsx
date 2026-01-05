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
          <p className="about-role">Full Stack Developer | Mobile App Specialist | Website QA Engineer</p>
          <p>
            I'm Rishav Kumar, an Aspiring Full Stack Developer skilled in building scalable web and mobile applications using the MERN stack. I'm adept at Agile methodologies, with hands-on experience as a Scrum Master and developer.
          </p>
          <p>
            I have a strong foundation in full-stack development, project leadership, and cross-functional team collaboration. My experience ranges from developing high-performance survey applications with React Native to architecting teletherapy platforms.
          </p>
          <p>
            I'm passionate about building robust systems that solve real-world problems, whether it's through decentralized medical records or AI-integrated mental wellness platforms.
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
          <h4>Full Stack Development</h4>
          <p>
            Comprehensive web application development using the MERN stack. I handle everything from database schema design and RESTful API development to interactive frontend implementation and deployment.
          </p>
        </div>
        <div className="service">
          <h4>Frontend Engineering</h4>
          <p>
            Creating responsive, high-performance user interfaces with React, Redux, and modern CSS frameworks. Focused on accessibility, speed, and cross-browser compatibility.
          </p>
        </div>
        <div className="service">
          <h4>Mobile App Development</h4>
          <p>
            Designing and developing cross-platform mobile applications using React Native. Focused on delivering native-like performance and smooth user experiences for both iOS and Android.
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
