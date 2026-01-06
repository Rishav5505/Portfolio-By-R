import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Assets
// Import Assets
import photographyCert from '../assets/Photography_Certificate.jpg';
import microsoftCert from '../assets/Microsoft_Ambassador.jpg';
import internshipCert from '../assets/pdfs/Internship_Letter.pdf';
import techOdysseyCert from '../assets/pdfs/TechOdyssey_Certificate.pdf';
import droneCert from '../assets/pdfs/Drone_Certificate.pdf';
import cert1 from '../assets/pdfs/Certificate_1.pdf';
import cert2 from '../assets/pdfs/Certificate_2.pdf';

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState(null);

    const certifications = [
        {
            id: 1,
            title: 'Microsoft Student Ambassador',
            issuer: 'Microsoft Learn',
            description: 'Tinder Clone using HTML & CSS Bootcamp Completion',
            file: microsoftCert,
            type: 'image',
            icon: '💻',
            color: '#00a4ef',
            skills: ['HTML/CSS', 'Frontend', 'Bootcamp']
        },
        {
            id: 2,
            title: 'SNAP: Photography Award',
            issuer: 'K.R. Mangalam University',
            description: 'Spotlighting Narratives and Artistic Photography - World Photography Day',
            file: photographyCert,
            type: 'image',
            icon: '📸',
            color: '#ffdd00',
            skills: ['Artistic Photography', 'Creative']
        },
        {
            id: 3,
            title: 'Full Stack Web Development Intern',
            issuer: 'Xebia IT Architects',
            description: 'Professional Internship Certificate - MERN Stack Focus',
            file: internshipCert,
            type: 'pdf',
            icon: '⚙️',
            color: '#6600ff',
            skills: ['MERN Stack', 'Agile', 'Professional']
        },
        {
            id: 4,
            title: 'TechOdyssey Achievement',
            issuer: 'Technical Society',
            description: 'National Level Technical Symposium Participation & Achievement',
            file: techOdysseyCert,
            type: 'pdf',
            icon: '🚀',
            color: '#00ffcc',
            skills: ['Technical', 'Symposium']
        },
        {
            id: 5,
            title: 'Drone Technology Bootcamp',
            issuer: 'IIT Mandi',
            description: 'Hands-on experience with UAVs and Drone control systems',
            file: droneCert,
            type: 'pdf',
            icon: '🚁',
            color: '#ff0055',
            skills: ['Robotics', 'Drone Tech', 'UAV']
        },
        {
            id: 6,
            title: 'NASSCOM Certification',
            issuer: 'NASSCOM',
            description: 'Emerging technologies and software engineering excellence',
            file: cert1,
            type: 'pdf',
            icon: '🏆',
            color: '#0077ff',
            skills: ['Software Eng', 'Emerging Tech']
        },
        {
            id: 7,
            title: 'Advanced Python Certificate',
            issuer: 'Professional Academy',
            description: 'Deep dive into Python programming and automation',
            file: cert2,
            type: 'pdf',
            icon: '🐍',
            color: '#3776ab',
            skills: ['Python', 'Automation']
        }
    ];

    const handleView = (cert) => {
        setSelectedCert(cert);
    };

    return (
        <section id="certifications" className="py-24 bg-gradient-to-b from-transparent to-slate-900/20">
            <header className="text-center mb-16 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
                >
                    ACHIEVEMENTS & <span className="text-cyan-400">CERTIFICATIONS</span>
                </motion.h2>
                <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-4 shadow-[0_0_15px_rgba(6,182,212,0.6)]"></div>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    A testament to my dedication, learning journey, and professional excellence.
                </p>
            </header>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 shadow-xl overflow-hidden"
                        >
                            {/* Decorative Glow */}
                            <div
                                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[100px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                                style={{ backgroundColor: cert.color }}
                            ></div>

                            <div className="flex items-start justify-between mb-6">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                                    style={{ backgroundColor: `${cert.color}20`, color: cert.color, border: `1px solid ${cert.color}40` }}
                                >
                                    {cert.icon}
                                </div>
                                <div className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-white/5 text-slate-400 border border-white/10">
                                    {cert.type}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-cyan-500/80 font-medium text-sm mb-3">
                                {cert.issuer}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {cert.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {cert.skills.map((skill, idx) => (
                                    <span key={idx} className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={() => handleView(cert)}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-800 hover:from-cyan-600 hover:to-blue-600 text-white font-bold transition-all duration-300 shadow-lg border border-white/5 flex items-center justify-center gap-2"
                            >
                                👁️ View Certificate
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for viewing */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/80"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-slate-900 border border-white/10 rounded-3xl w-full max-w-5xl h-[85vh] overflow-hidden shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-4 right-4 z-[1001]">
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-colors"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="flex flex-col h-full">
                                <div className="p-6 border-b border-white/5 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-2xl">
                                        {selectedCert.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                                        <p className="text-sm text-slate-400">{selectedCert.issuer}</p>
                                    </div>
                                </div>
                                <div className="flex-1 bg-slate-950/50 p-2">
                                    {selectedCert.type === 'image' ? (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img
                                                src={selectedCert.file}
                                                alt={selectedCert.title}
                                                className="max-w-full max-h-full object-contain rounded-lg"
                                            />
                                        </div>
                                    ) : (
                                        <iframe
                                            src={selectedCert.file}
                                            className="w-full h-full border-none rounded-lg"
                                            title="Certificate Viewer"
                                        ></iframe>
                                    )}
                                </div>
                                <div className="p-6 border-t border-white/5 flex justify-end">
                                    <a
                                        href={selectedCert.file}
                                        download
                                        className="px-8 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                    >
                                        ⬇️ Download Certificate
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
