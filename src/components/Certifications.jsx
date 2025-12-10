import React from 'react';

export default function Certifications() {
    const certifications = [
        {
            id: 1,
            title: 'Machine Learning Specialization',
            issuer: 'Stanford University / Coursera',
            date: '2024',
            icon: '🎓',
            color: '#00ffff',
            verify: '#', // Add actual verification link
            skills: ['ML Algorithms', 'Neural Networks', 'Python']
        },
        {
            id: 2,
            title: 'Deep Learning Specialization',
            issuer: 'deeplearning.ai',
            date: '2024',
            icon: '🧠',
            color: '#6600ff',
            verify: '#',
            skills: ['CNN', 'RNN', 'TensorFlow']
        },
        {
            id: 3,
            title: 'Python for Data Science',
            issuer: 'IBM',
            date: '2023',
            icon: '🐍',
            color: '#00ff00',
            verify: '#',
            skills: ['Python', 'Pandas', 'Data Analysis']
        },
        {
            id: 4,
            title: 'Computer Vision Fundamentals',
            issuer: 'University of Buffalo',
            date: '2024',
            icon: '👁️',
            color: '#ff00ff',
            verify: '#',
            skills: ['OpenCV', 'Image Processing', 'Object Detection']
        },
        {
            id: 5,
            title: 'AWS Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: '2023',
            icon: '☁️',
            color: '#ff9900',
            verify: '#',
            skills: ['Cloud Computing', 'AWS Services', 'Deployment']
        },
        {
            id: 6,
            title: 'Robotics Fundamentals',
            issuer: 'MIT OpenCourseWare',
            date: '2023',
            icon: '🤖',
            color: '#ff0099',
            verify: '#',
            skills: ['ROS', 'Kinematics', 'Control Systems']
        }
    ];

    const achievements = [
        { icon: '🏆', title: 'Hackathon Winner', description: 'Smart India Hackathon 2024' },
        { icon: '🥇', title: 'First Prize', description: 'State Level Project Competition' },
        { icon: '🎯', title: 'Research Paper', description: 'Published in IEEE Conference' },
        { icon: '⭐', title: 'Best Project Award', description: 'University Level Recognition' }
    ];

    return (
        <section id="certifications" className="section certifications-section">
            <header className="section-header">
                <h2>CERTIFICATIONS & ACHIEVEMENTS</h2>
                <p>Professional credentials and recognitions</p>
            </header>

            <div className="certifications-container">
                {/* Certifications Grid */}
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="certification-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="cert-icon" style={{ color: cert.color }}>
                                {cert.icon}
                            </div>
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-date">📅 {cert.date}</p>

                            <div className="cert-skills">
                                {cert.skills.map((skill, idx) => (
                                    <span key={idx} className="cert-skill-tag" style={{ borderColor: cert.color }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {cert.verify !== '#' && (
                                <a
                                    href={cert.verify}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-verify-btn"
                                    style={{ background: cert.color }}
                                >
                                    🔗 Verify
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Achievements */}
                <div className="achievements-section">
                    <h3 className="achievements-title">🏆 Recent Achievements</h3>
                    <div className="achievements-grid">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="achievement-card"
                                style={{ animationDelay: `${(certifications.length + index) * 0.1}s` }}
                            >
                                <span className="achievement-icon">{achievement.icon}</span>
                                <div className="achievement-info">
                                    <h4>{achievement.title}</h4>
                                    <p>{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
