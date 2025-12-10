import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

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

  // EmailJS Configuration
  // IMPORTANT: Replace these with your actual EmailJS credentials
  // Get them from: https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your public key

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'vvinaybadnoriya@gmail.com',
      link: 'mailto:vvinaybadnoriya@gmail.com',
      color: '#00ffff'
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
      link: 'https://linkedin.com/in/viinay-badnoriiya',
      color: '#0077b5'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: '@Vinay1727',
      link: 'https://github.com/Vinay1727',
      color: '#333'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/viinay-badnoriiya',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/Vinay1727',
      color: '#333'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:vvinaybadnoriya@gmail.com',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('sending');

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Optional: Still show Google Form as confirmation
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');

      // Fallback to Google Form
      setTimeout(() => {
        window.open('https://forms.gle/PY15yq5JVvo2TS5H9', '_blank');
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
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
                ❌ Failed to send. Redirecting to Google Form...
              </div>
            )}
          </form>

          <div className="form-note">
            <p>⚠️ <strong>Note:</strong> Please configure EmailJS credentials in Contact.jsx to enable direct email sending.</p>
            <p>Get your free EmailJS account at: <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">emailjs.com</a></p>
          </div>
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
