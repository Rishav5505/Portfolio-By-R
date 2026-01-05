import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
    const skillCategories = [
        {
            category: 'Frontend Development',
            icon: '🎨',
            color: '#00ffff',
            skills: ['React', 'React Native', 'Redux', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript (ES6+)']
        },
        {
            category: 'Backend & APIs',
            icon: '⚙️',
            color: '#6600ff',
            skills: ['Node.js', 'Express.js', 'OAuth / JWT', 'RESTful APIs', 'Socket.IO', 'Firebase']
        },
        {
            category: 'Databases & Cloud',
            icon: '📊',
            color: '#00ff00',
            skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'AWS (Basics)', 'Cloudinary']
        },
        {
            category: 'Agile & DevOps',
            icon: '🛠️',
            color: '#ff6600',
            skills: ['Agile / Scrum', 'Git / GitHub', 'CI/CD Pipelines', 'Postman', 'Linux', 'Vercel']
        }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <header className="text-center mb-20 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white uppercase"
                >
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Arsenal</span>
                </motion.h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-transparent mx-auto rounded-full"></div>
            </header>

            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={catIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: catIndex * 0.1 }}
                        whileHover={{ y: -15 }}
                        className="group relative glass p-8 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/40 transition-all duration-500 shadow-2xl h-full flex flex-col"
                    >
                        {/* Category Icon */}
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform shadow-lg"
                            style={{ backgroundColor: `${category.color}15`, color: category.color, border: `1px solid ${category.color}30` }}
                        >
                            {category.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                            {category.category}
                        </h3>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-xs font-semibold border border-white/5 hover:bg-white/10 hover:text-cyan-300 transition-all"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Bottom glow */}
                        <div
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ backgroundColor: category.color }}
                        ></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
