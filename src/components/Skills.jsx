import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function Skills() {
    const skillCategories = [
        {
            category: 'Frontend Development',
            icon: '🎨',
            color: '#00ffff',
            skills: ['React.js', 'React Native', 'Redux', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript (ES6+)']
        },
        {
            category: 'Backend & APIs',
            icon: '⚙️',
            color: '#6600ff',
            skills: ['Node.js', 'Express.js', 'Python', 'OAuth / JWT', 'RESTful APIs', 'Socket.IO']
        },
        {
            category: 'Databases & Cloud',
            icon: '📊',
            color: '#00ff00',
            skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'AWS', 'Cloudinary']
        },
        {
            category: 'Agile, DevOps & QA',
            icon: '🛠️',
            color: '#ff6600',
            skills: ['Agile / Scrum', 'Git / GitHub', 'Docker', 'Benchmarking', 'CI/CD Pipelines', 'Postman', 'Linux']
        }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <SectionHeader
                title={<>Technical <span className="text-cyan-400">Arsenal</span></>}
                subtitle="A curated list of technologies and frameworks I use to build scalable digital solutions."
            />

            {/* Core Highlighted Skills */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 relative z-10">
                <h3 className="text-sm font-black text-cyan-400 mb-8 uppercase tracking-[0.25em] text-center flex items-center justify-center gap-3">
                    <span className="h-[2px] w-8 bg-cyan-500/30"></span>
                    Core Highlighted Expertise
                    <span className="h-[2px] w-8 bg-cyan-500/30"></span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                    {[
                        { name: 'AI/LLM', icon: '🧠', color: '#00ffff' },
                        { name: 'Python', icon: '🐍', color: '#3776ab' },
                        { name: 'Docker', icon: '🐳', color: '#2496ed' },
                        { name: 'Git', icon: '🌳', color: '#f05032' },
                        { name: 'React.js', icon: '⚛️', color: '#61dafb' },
                        { name: 'Node.js', icon: '🟢', color: '#68a063' },
                        { name: 'AWS', icon: '☁️', color: '#ff9900' },
                        { name: 'Benchmarking', icon: '📊', color: '#00e5ff' }
                    ].map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ 
                                y: -8,
                                borderColor: skill.color + '50',
                                boxShadow: `0px 12px 24px ${skill.color}20`,
                                backgroundColor: skill.color + '05'
                            }}
                            className="glass p-5 rounded-3xl border border-white/5 bg-white/5 transition-all text-center flex flex-col items-center justify-center shadow-lg relative group overflow-hidden"
                            style={{ cursor: 'none' }}
                        >
                            {/* Glowing backlight on hover */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{ backgroundImage: `linear-gradient(to top, ${skill.color}00, ${skill.color}15)` }}
                            ></div>
                            
                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
                            <span 
                                className="text-xs font-bold text-slate-200 transition-colors uppercase tracking-wider group-hover:text-white"
                                style={{ textShadow: `0 0 10px ${skill.color}20` }}
                            >
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={catIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: catIndex * 0.1 }}
                        whileHover={{ y: -5 }}
                        className={`group relative glass p-8 rounded-[2rem] border border-white/5 hover:border-cyan-500/40 transition-all duration-500 shadow-2xl flex flex-col ${catIndex === 0 || catIndex === 3 ? 'md:col-span-3' : 'md:col-span-3'
                            } ${catIndex === 0 ? 'bg-gradient-to-br from-cyan-500/10 to-transparent' : ''}`}
                    >
                        {/* Category Icon */}
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:rotate-[10deg] transition-transform"
                            style={{ backgroundColor: `${category.color}15`, color: category.color, border: `1px solid ${category.color}30` }}
                        >
                            {category.icon}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4">
                            {category.category}
                        </h3>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-3 py-1.5 rounded-xl bg-white/5 text-slate-300 text-xs font-medium border border-white/5 hover:bg-cyan-500/20 hover:text-white transition-all cursor-none"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Aesthetic Highlight */}
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                            <span className="text-6xl font-black">{catIndex + 1}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
