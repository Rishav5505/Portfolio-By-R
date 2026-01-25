import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

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

            <SectionHeader
                title={<>Technical <span className="text-cyan-400">Arsenal</span></>}
                subtitle="A curated list of technologies and frameworks I use to build scalable digital solutions."
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-6 gap-6">
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
