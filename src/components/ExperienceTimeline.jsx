import React from 'react';
import { motion } from 'framer-motion';

const ExperienceTimeline = () => {
    const experiences = [
        {
            year: 'Jan 2026 – Present',
            title: 'LLM Post-Training Intern',
            company: 'Ethara.AI',
            desc: 'Worked on post-training evaluation and benchmarking pipelines for Large Language Models across multiple repositories. Built and validated 100+ multi-architecture Docker images for large-scale evaluation workflows.',
            icon: '🤖'
        },
        {
            year: 'Mar 2025 – Jun 2025',
            title: 'Full Stack Developer Intern',
            company: 'Xcelerate Live Project, Xebia',
            desc: 'Developed survey application using React Native, Node.js, Express.js, and MongoDB. Worked in Agile environment with sprint planning and code reviews.',
            icon: '🚀'
        },
        {
            year: '2024',
            title: 'MERN Specialization',
            company: 'Academic Project',
            desc: 'Developed MindMend teletherapy platform with real-time sockets.',
            icon: '🧪'
        },
        {
            year: '2022',
            title: 'Started B.Tech CSE',
            company: 'K.R. Mangalam University',
            desc: 'Beginning of the professional engineering journey.',
            icon: '🎓'
        }
    ];

    return (
        <section className="py-24 relative">
            <header className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">MY <span className="text-cyan-400">JOURNEY</span></h2>
                <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
            </header>

            <div className="max-w-4xl mx-auto px-4 relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent"></div>

                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className={`relative mb-12 flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
                    >
                        <div className="w-[45%]"></div>

                        {/* Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 z-10 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>

                        <div className={`w-[45%] glass p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors group`}>
                            <span className="text-cyan-400 font-bold text-sm mb-1 block group-hover:scale-110 transition-transform origin-left">{exp.year}</span>
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span>{exp.icon}</span> {exp.title}
                            </h3>
                            <p className="text-slate-400 text-sm font-medium mb-2">{exp.company}</p>
                            <p className="text-slate-300 text-sm leading-relaxed">{exp.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceTimeline;
