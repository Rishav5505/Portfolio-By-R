import React, { useState, useEffect } from 'react';
import profileImg from '../assets/IMG_3823.JPG';
import vinayResumePdf from '../assets/VinayBadnoriyaResume.pdf';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'AI & ML Engineer',
    'Data Scientist',
    'Computer Vision Engineer',
    'Robotics Engineer',
    'Project Manager',
    'Python Developer',
    'ML Researcher',
    'Deep Learning Specialist'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, typedText.length - 1)
        : currentRole.substring(0, typedText.length + 1);

      setTypedText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = vinayResumePdf;
    link.download = 'VinayBadnoriyaResume.pdf';
    link.click();
  };

  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">HI THERE!</p>
          <h2 className="hero-title">I'M <span>VINAY</span></h2>
          <p className="hero-subtitle">
            {typedText}
            <span className="typing-cursor">|</span>
          </p>
          <p className="hero-description">
            Versatile Computer Science professional with expertise in Artificial Intelligence, Machine Learning, Computer Vision, Robotics, and Project Management. Experienced in designing intelligent systems, building ML models, developing computer vision applications, and leading technical projects. Proficient in Python, Deep Learning frameworks, and delivering high-impact solutions across multiple domains.
          </p>
          <div className="hero-buttons">
            <a href="#about" className="button primary">More About Me</a>
            <button onClick={handleDownloadResume} className="button secondary download-btn">
              📥 Download Resume
            </button>
          </div>
        </div>

        <div className="hero-spline-container">
          <div className="spline-wrapper">
            <spline-viewer loading-anim-type="spinner-small-light" url="https://prod.spline.design/X6EboTsFgHQyYf4Y/scene.splinecode"></spline-viewer>
          </div>
          <div className="spline-hint">
            <span>👆 Interact in 3D</span>
          </div>
        </div>
      </div>
    </section>
  );
}
