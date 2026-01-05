import React from 'react';
import { motion } from 'framer-motion';

const SocialDock = () => {
    const socials = [
        { icon: '💼', url: 'https://linkedin.com/in/rishav-kumar-', color: '#0077b5', label: 'LinkedIn' },
        { icon: '💻', url: 'https://github.com/Rishav5505', color: '#ffffff', label: 'GitHub' },
        { icon: '📝', url: 'https://forms.gle/PY15yq5JVvo2TS5H9', color: '#4285f4', label: 'Contact' },
        { icon: '📧', url: 'mailto:rishavkumar33372@gmail.com', color: '#ff4b2b', label: 'Email' }
    ];

    return (
        <div className="fixed left-6 bottom-1/2 translate-y-1/2 z-[500] hidden lg:flex flex-col gap-4">
            {socials.map((social, idx) => (
                <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 + (idx * 0.1) }}
                    whileHover={{ x: 10, scale: 1.1 }}
                    className="w-12 h-12 glass border border-white/10 rounded-full flex items-center justify-center text-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all group relative"
                    style={{ '--glow-color': social.color }}
                >
                    {social.icon}
                    {/* Tooltip */}
                    <span className="absolute left-16 px-3 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">
                        {social.label}
                    </span>
                </motion.a>
            ))}
            <div className="w-px h-20 bg-gradient-to-t from-cyan-400 to-transparent mx-auto mt-4"></div>
        </div>
    );
};

export default SocialDock;
