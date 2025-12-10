import React from 'react';

export default function About() {
  return (
    <section id="about" className="section about">
      <header className="section-header">
        <h2>ABOUT ME</h2>
      </header>

      <div className="about-grid">
        <div className="about-summary">
          <h3>I'm Vinay Badnoriya</h3>
          <p className="about-role">B.Tech CSE (AI & ML) | Data Science Enthusiast</p>
          <p>
            I'm Vinay Badnoriya, an AI & ML engineer passionate about transforming ideas into intelligent, real-world systems. Currently pursuing a B.Tech in CSE (Artificial Intelligence & Machine Learning), I specialize in building practical solutions that combine machine learning, deep learning, LLMs, and automation.
          </p>
          <p>
            Over the past few years, I've designed systems ranging from multi-agent travel planners and voice-controlled desktop assistants to ML workflows for image classification, NLP, and predictive analytics. My approach blends strong fundamentals with rapid prototyping—allowing me to turn complex problems into functional, user-friendly applications.
          </p>
          <p>
            I'm comfortable working across the full pipeline: data engineering → modeling → optimization → deployment, and I enjoy crafting clean, modular code with meaningful user experiences.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-value">15+</span>
            <span className="stat-label">Major Projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">30+</span>
            <span className="stat-label">Mini Projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">3+ mo</span>
            <span className="stat-label">Industry Internship</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">10+</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>
      </div>

      <div className="about-services">
        <h3>What I Do</h3>
        <div className="service">
          <h4>Machine Learning & Data Science</h4>
          <p>
            End-to-end ML pipelines including data collection, preprocessing, feature engineering, model training, and evaluation. Expertise in supervised/unsupervised learning, classification, and prediction tasks.
          </p>
        </div>
        <div className="service">
          <h4>Computer Vision & Deep Learning</h4>
          <p>
            Image classification, CNN design with Keras/TensorFlow, data augmentation, and real-time prediction systems. Achieved 87% accuracy on cat/dog classification with 25,000+ images.
          </p>
        </div>
        <div className="service">
          <h4>NLP & Automation</h4>
          <p>
            Natural Language Processing using TF-IDF, tokenization, and ML models like XGBoost and SVM. Built AI-powered desktop assistants and voice-controlled automation systems reducing user effort by 70%.
          </p>
        </div>
      </div>
    </section>
  );
}
