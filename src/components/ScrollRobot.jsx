import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollRobot() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('idle');
    const [scrollSpeed, setScrollSpeed] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        let lastTime = Date.now();
        let scrollTimeout;

        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            const currentTime = Date.now();
            const timeDiff = currentTime - lastTime;
            const scrollDiff = Math.abs(currentScrollY - lastScrollY);
            const speed = scrollDiff / timeDiff;

            setIsVisible(currentScrollY > 100);

            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (currentScrollY / maxScroll) * 100;
            setScrollPosition(scrollPercent);

            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
            }

            setScrollSpeed(speed);

            lastScrollY = currentScrollY;
            lastTime = currentTime;

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setScrollDirection('idle');
                setScrollSpeed(0);
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const getRobotContent = () => {
        if (scrollDirection === 'down') return '{...}';
        if (scrollDirection === 'up') return '</>';
        return 'JS';
    };

    if (!isVisible) return null;

    return (
        <div className="fixed right-8 top-0 h-full w-12 pointer-events-none z-[1000] hidden lg:flex flex-col items-center">
            {/* Track Line */}
            <div className="absolute top-0 bottom-0 w-[2px] bg-slate-800/50 overflow-hidden">
                <motion.div
                    className="w-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    style={{ height: `${scrollPosition}%` }}
                />
            </div>

            {/* Tech Bot */}
            <motion.div
                className="absolute pointer-events-auto cursor-pointer"
                animate={{
                    top: `${Math.min(scrollPosition, 92)}%`,
                    rotate: scrollDirection === 'down' ? 10 : scrollDirection === 'up' ? -10 : 0
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <div className="relative group">
                    {/* Bot Body (Terminal Style) */}
                    <div className="w-14 h-14 bg-slate-900 border-2 border-cyan-500/50 rounded-xl flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:border-cyan-400 transition-colors backdrop-blur-md">
                        {/* Matrix Grid Effect Background */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="w-full h-full bg-[linear-gradient(rgba(0,255,157,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,157,0.1)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
                        </div>

                        {/* Content */}
                        <span className="text-[10px] font-black font-mono text-cyan-400 tracking-tighter">
                            {getRobotContent()}
                        </span>

                        {/* Scanner Light */}
                        <motion.div
                            className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/50 opacity-50"
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>

                    {/* Glowing Particles */}
                    <div className="absolute -inset-2 bg-cyan-500/10 blur-xl rounded-full -z-10 group-hover:bg-cyan-500/20"></div>

                    {/* Speech Bubble / Code Snippet */}
                    <AnimatePresence>
                        {scrollSpeed > 0.5 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: -90 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="absolute top-0 right-full mr-4 px-3 py-1 bg-black/80 border border-cyan-500/30 rounded-lg backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                            >
                                <span className="text-[10px] text-cyan-400 font-mono whitespace-nowrap">
                                    {scrollDirection === 'down' ? (
                                        ['npm_run_dev', 'git_push...', 'indexing...', 'fetching_stats'][Math.floor(Date.now() / 1000) % 4]
                                    ) : (
                                        ['cd_top/..', 'reloading...', 'scroll_up()', 'parsing_header'][Math.floor(Date.now() / 1000) % 4]
                                    )}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
