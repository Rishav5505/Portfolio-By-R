import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Assets
import therpyThumb from '../assets/Therpy_Web_Full.png';
import oasisThumb from '../assets/Oasis_ERP_Full.png';

export default function VideoShowcase() {
    const [activeVideo, setActiveVideo] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Therpy-Web Platform',
            description: 'A complete mental health platform with real-time consultation and patient management.',
            features: ['Live Video Chat', 'Mood Tracking', 'Appointment System'],
            thumbnail: therpyThumb,
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
            liveUrl: 'https://therpy-web-4anr.vercel.app',
            category: 'Full Stack',
            color: '#00d2ff'
        },
        {
            id: 2,
            title: 'Oasis ERP System',
            description: 'Advanced Educational Resource Planning system with multi-role dashboards.',
            features: ['Fee Management', 'Exam Cycles', 'Student Portals'],
            thumbnail: oasisThumb,
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
            liveUrl: 'https://oasispatna-ejbz.vercel.app',
            category: 'EdTech',
            color: '#00ff9d'
        },
        {
            id: 3,
            title: 'SecBot AI Security',
            description: 'AI-powered network security scanner that identifies vulnerabilities and provides solutions.',
            features: ['Nmap Integration', 'Threat Detection', 'AI Reports'],
            thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
            liveUrl: '#',
            category: 'Cybersecurity',
            color: '#ff0055'
        }
    ];

    return (
        <section id="video-showcase" className="py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]"></div>
            </div>

            <header className="text-center mb-16 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
                >
                    PROJECT <span className="text-cyan-400">DEMOS</span> & WALKTHROUGHS
                </motion.h2>
                <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto italic">
                    "Seeing is believing" - Explore my work through visual demonstrations.
                </p>
            </header>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="group relative bg-slate-800/40 border border-white/5 rounded-[2rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500 shadow-2xl"
                    >
                        {/* Thumbnail Area */}
                        <div
                            className="relative h-56 overflow-hidden cursor-pointer"
                            onClick={() => setActiveVideo(project)}
                        >
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </motion.div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-cyan-400 border border-cyan-400/30 tracking-widest uppercase">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.features.map((feature, idx) => (
                                    <span key={idx} className="text-[10px] font-semibold text-slate-300 px-2 py-1 rounded-lg bg-white/5 border border-white/10">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setActiveVideo(project)}
                                    className="flex-1 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 flex items-center justify-center gap-2 text-white font-medium"
                                >
                                    <span className="text-lg">▶</span> Preview
                                </button>

                                {project.liveUrl !== '#' && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                                    >
                                        🌐 Visit Site
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center p-4 backdrop-blur-xl bg-black/90"
                        onClick={() => setActiveVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] bg-slate-900 border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-[2001] w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white text-2xl transition-all border border-white/10"
                                onClick={() => setActiveVideo(null)}
                            >
                                ✕
                            </button>

                            {activeVideo.videoUrl ? (
                                <iframe
                                    className="w-full h-full"
                                    src={activeVideo.videoUrl + "?autoplay=1"}
                                    title={activeVideo.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-center p-10">
                                    <div className="text-6xl mb-4">📽️</div>
                                    <h3 className="text-3xl font-bold mb-2">Demo Video Coming Soon</h3>
                                    <p className="text-slate-400">I am currently recording the demo for {activeVideo.title}. Stay tuned!</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
