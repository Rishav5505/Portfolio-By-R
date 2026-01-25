import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SectionHeader = ({ title, subtitle, align = "center" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <header
            ref={ref}
            className={`mb-20 px-4 ${align === "center" ? "text-center" : "text-left"}`}
        >
            <div className="overflow-hidden">
                <motion.h2
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none"
                >
                    {title}
                </motion.h2>
            </div>

            <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                className={`h-1.5 bg-gradient-to-r from-cyan-500 to-transparent rounded-full mt-4 ${align === "center" ? "mx-auto w-24" : "w-32"}`}
            />

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </header>
    );
};

export default SectionHeader;
