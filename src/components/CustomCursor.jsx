import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState("");

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.closest('button, a, .clickable, .resume-card, .portfolio-card');
            if (isClickable) {
                setIsHovering(true);
                if (target.closest('.portfolio-card')) setCursorText("VIEW");
                else if (target.closest('.resume-card')) setCursorText("INFO");
                else setCursorText("");
            } else {
                setIsHovering(false);
                setCursorText("");
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Primary Dot */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-400 pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(6, 182, 212, 0.1)" : "rgba(6, 182, 212, 0)",
                    borderColor: isHovering ? "rgba(6, 182, 212, 0.5)" : "rgba(6, 182, 212, 1)",
                }}
            >
                {isHovering && cursorText && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 0.5 }}
                        className="text-[10px] font-bold text-cyan-400 tracking-widest"
                    >
                        {cursorText}
                    </motion.span>
                )}
            </motion.div>

            {/* Trailing Glow */}
            <motion.div
                className="fixed top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none z-[-1]"
                animate={{
                    x: mousePosition.x - 192,
                    y: mousePosition.y - 192,
                }}
                transition={{ type: 'spring', damping: 50, stiffness: 200, restDelta: 0.001 }}
            />
        </>
    );
};

export default CustomCursor;
