import React from 'react';

export default function Skills() {
    const skillCategories = [
        {
            category: 'Programming Languages',
            icon: '💻',
            color: '#00ffff',
            skills: [
                { name: 'Python', level: 95 },
                { name: 'JavaScript', level: 85 },
                { name: 'R', level: 80 },
                { name: 'SQL', level: 85 },
                { name: 'C++', level: 75 },
                { name: 'Java', level: 70 }
            ]
        },
        {
            category: 'AI & Machine Learning',
            icon: '🤖',
            color: '#6600ff',
            skills: [
                { name: 'TensorFlow', level: 90 },
                { name: 'PyTorch', level: 85 },
                { name: 'Scikit-learn', level: 90 },
                { name: 'Keras', level: 85 },
                { name: 'NLP', level: 80 },
                { name: 'Deep Learning', level: 85 }
            ]
        },
        {
            category: 'Computer Vision',
            icon: '👁️',
            color: '#ff00ff',
            skills: [
                { name: 'OpenCV', level: 85 },
                { name: 'YOLO', level: 80 },
                { name: 'Image Processing', level: 85 },
                { name: 'Object Detection', level: 80 }
            ]
        },
        {
            category: 'Data Science',
            icon: '📊',
            color: '#00ff00',
            skills: [
                { name: 'Pandas', level: 90 },
                { name: 'NumPy', level: 90 },
                { name: 'Matplotlib', level: 85 },
                { name: 'Seaborn', level: 80 },
                { name: 'Data Analysis', level: 90 }
            ]
        },
        {
            category: 'Robotics & IoT',
            icon: '🦾',
            color: '#ff6600',
            skills: [
                { name: 'ROS', level: 75 },
                { name: 'Arduino', level: 80 },
                { name: 'Raspberry Pi', level: 75 },
                { name: 'Automation', level: 85 }
            ]
        },
        {
            category: 'Project Management',
            icon: '📋',
            color: '#0099ff',
            skills: [
                { name: 'Agile/Scrum', level: 85 },
                { name: 'Jira', level: 80 },
                { name: 'Git/GitHub', level: 90 },
                { name: 'Team Leadership', level: 85 }
            ]
        },
        {
            category: 'Web Development',
            icon: '🌐',
            color: '#ffcc00',
            skills: [
                { name: 'React.js', level: 80 },
                { name: 'Node.js', level: 75 },
                { name: 'HTML/CSS', level: 85 },
                { name: 'REST APIs', level: 80 }
            ]
        },
        {
            category: 'Tools & Others',
            icon: '🛠️',
            color: '#ff0099',
            skills: [
                { name: 'Docker', level: 70 },
                { name: 'Jupyter', level: 90 },
                { name: 'VS Code', level: 90 },
                { name: 'Linux', level: 80 }
            ]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <header className="section-header">
                <h2>SKILLS & EXPERTISE</h2>
                <p>Technical proficiency across multiple domains</p>
            </header>

            <div className="skills-container">
                {skillCategories.map((category, catIndex) => (
                    <div
                        key={catIndex}
                        className="skill-category"
                        style={{ animationDelay: `${catIndex * 0.1}s` }}
                    >
                        <div className="category-header">
                            <span className="category-icon" style={{ color: category.color }}>
                                {category.icon}
                            </span>
                            <h3 className="category-title">{category.category}</h3>
                        </div>

                        <div className="skills-list">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percent">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{
                                                width: `${skill.level}%`,
                                                background: `linear-gradient(90deg, ${category.color}, ${category.color}cc)`,
                                                animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
