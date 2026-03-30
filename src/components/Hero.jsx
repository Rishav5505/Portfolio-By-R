import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import rishiImg from '../assets/rishi_meditation.png';
import rishavResumePdf from '../assets/pdfs/Rishav_FSD.pdf';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Aspiring Full Stack Developer',
    'Mobile App Specialist (React Native)',
    'Website QA & Testing Engineer',
    'MERN Stack Specialty',
    'React Native Developer',
    'Scrum Master',
    'Agile Practitioner',
    'JavaScript / TypeScript Developer',
    'Node.js Backend Engineer',
    'UI/UX Designer (Figma)'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, typedText.length - 1)
        : currentRole.substring(0, typedText.length + 1);

      setTypedText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = rishavResumePdf;
    link.download = 'Rishav_Kumar_Resume.pdf';
    link.click();
  };

  // Mouse position for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="home" className="section hero relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] -z-10 rounded-full"></div>

      <div className="hero-content">
        <div className="hero-text">
          <motion.p className="hero-greeting" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>HI THERE!</motion.p>
          <h2 className="hero-title">I'M <span className="glitch-text" data-text="RISHAV KUMAR">RISHAV KUMAR</span></h2>
          <div className="hero-subtitle mb-6">
            <span className="text-cyan-400 font-mono text-xl">{typedText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <motion.div className="glass p-6 rounded-2xl border border-white/5 shadow-2xl mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="hero-description m-0 text-slate-300 leading-relaxed">
              Aspiring Full Stack Developer skilled in building scalable applications. Fusing spiritual discipline with modern engineering to create divine digital experiences.
            </p>
          </motion.div>

          <div className="hero-buttons">
            <motion.a href="#about" className="button primary px-8 py-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>More About Me</motion.a>
            <motion.button onClick={handleDownloadResume} className="button secondary download-btn px-8 py-4 border border-white/10" whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }} whileTap={{ scale: 0.95 }}>📥 Download Resume</motion.button>
          </div>
        </div>

        <motion.div
          className="hero-visual-container relative flex items-center justify-center min-h-[600px] cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
        >
          {/* Meditating Rishi Image Container */}
          <motion.div
            className="relative z-10 w-full max-w-[500px] aspect-square rounded-full border border-orange-500/20 shadow-[0_0_80px_rgba(249,115,22,0.15)] overflow-hidden"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <img src={rishiImg} alt="Meditating Rishi" className="w-full h-full object-cover scale-105" />
            
            {/* Subtle Divine Internal Glow Animation */}
            <motion.div 
               className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent"
               animate={{ opacity: [0.3, 0.6, 0.3] }}
               transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Floating 'Mind knowledge' Tech Stack */}
          {[
            { name: 'React', icon: '⚛️', color: '#61dafb', angle: -20, dist: 220, delay: 0 },
            { name: 'Java', icon: '☕', color: '#f8981d', angle: 40, dist: 240, delay: 0.8 },
            { name: 'Node.js', icon: '🟢', color: '#68a063', angle: 100, dist: 230, delay: 1.6 },
            { name: 'MongoDB', icon: '🍃', color: '#4db33d', angle: 200, dist: 210, delay: 2.4 },
            { name: 'JavaScript', icon: '🟨', color: '#f7df1e', angle: 280, dist: 250, delay: 3.2 }
          ].map((tech, idx) => (
            <motion.div
              key={idx}
              className="absolute z-20 flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.1, 1, 0.5],
                x: [0, Math.cos(tech.angle * Math.PI / 180) * tech.dist],
                y: [0, Math.sin(tech.angle * Math.PI / 180) * tech.dist - 50],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: tech.delay,
                ease: "easeOut"
              }}
              style={{ left: '50%', top: '40%' }}
            >
               <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border text-2xl shadow-2xl" style={{ borderColor: `${tech.color}40`, background: `${tech.color}10` }}>
                 {tech.icon}
               </div>
               <span className="text-[9px] font-black tracking-widest uppercase" style={{ color: tech.color }}>{tech.name}</span>
            </motion.div>
          ))}

          {/* Divine Knowledge Waves */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute border border-orange-500/20 rounded-full"
                initial={{ width: 0, height: 0, opacity: 0.5 }}
                animate={{ width: 800, height: 800, opacity: 0 }}
                transition={{ duration: 8, repeat: Infinity, delay: ring * 2.5, ease: "linear" }}
              />
            ))}
          </div>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.8em] font-black text-orange-500 opacity-60">
              KNOWLEDGE SPIRITUALITY · INTEGRATED
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
