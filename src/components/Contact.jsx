import React, { useState, useRef } from 'react';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'rishavkumar33372@gmail.com',
      link: 'mailto:rishavkumar33372@gmail.com',
      color: '#00ffff'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+91 9508287609',
      link: 'tel:+919508287609',
      color: '#00ff00'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Gurugram, India',
      link: null,
      color: '#6600ff'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/rishav-kumar-',
      color: '#0077b5'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: '@Rishav5505',
      link: 'https://github.com/Rishav5505',
      color: '#333'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/rishav-kumar-',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/Rishav5505',
      color: '#333'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:contact@rishavkumar.me',
      color: '#00ffff'
    },
    {
      name: 'Google Form',
      icon: '📝',
      url: 'https://forms.gle/PY15yq5JVvo2TS5H9',
      color: '#4285f4'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFormStatus(''); // Clear status on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('sending');

    // Simple forward to Google Form for now as requested
    setTimeout(() => {
      setFormStatus('success');
      setIsSubmitting(false);
      window.open('https://forms.gle/PY15yq5JVvo2TS5H9', '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact">
      <header className="section-header">
        <h2>GET IN TOUCH</h2>
        <p>Let's collaborate on something amazing. Feel free to reach out!</p>
      </header>

      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-info-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="contact-icon" style={{ color: info.color }}>
                {info.icon}
              </div>
              <h3>{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {info.value}
                </a>
              ) : (
                <p>{info.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <div className="form-header">
            <h3>📬 Send Me a Message</h3>
            <p>I'll respond within 24 hours!</p>
          </div>

          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <textarea
                rows="5"
                id="message"
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              className="button primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? '📤 Sending...' : '📨 Send Message'}
            </button>

            {formStatus === 'success' && (
              <div className="form-message success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {formStatus === 'sending' && (
              <div className="form-message sending">
                📤 Sending your message...
              </div>
            )}
            {formStatus === 'error' && (
              <div className="form-message error">
                ❌ Failed to send. Error: {formData.lastError || 'Unknown error'}.
                <br />Redirecting to Google Form...
              </div>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="social-connect">
          <h3>🌐 Connect on Social Media</h3>
          <div className="social-links-grid">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  '--hover-color': social.color
                }}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
