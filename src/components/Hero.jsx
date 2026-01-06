import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profileImg from '../assets/rishav_profile.jpg';
const rishavResumePdf = '/pdfs/Rishav_FSD.pdf';
import cyberCoreImg from '../assets/cyber_core.png';

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

  // Smooth spring animation for tilt
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Transform mouse movement into degrees
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] -z-10 rounded-full"></div>

      <div className="hero-content">
        <div className="hero-text">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            HI THERE!
          </motion.p>
          <h2 className="hero-title">I'M <span className="glitch-text" data-text="RISHAV KUMAR">RISHAV KUMAR</span></h2>
          <div className="hero-subtitle mb-6">
            <span className="text-cyan-400 font-mono text-xl">{typedText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <motion.div
            className="glass p-6 rounded-2xl border border-white/5 shadow-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="hero-description m-0 text-slate-300 leading-relaxed">
              Aspiring Full Stack Developer skilled in building scalable web and mobile applications using the MERN stack. Adept at Agile methodologies, with hands-on experience as a Scrum Master and developer. Strong foundation in project leadership and cross-functional team collaboration.
            </p>
          </motion.div>

          <div className="hero-buttons">
            <motion.a
              href="#about"
              className="button primary px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More About Me
            </motion.a>
            <motion.button
              onClick={handleDownloadResume}
              className="button secondary download-btn px-8 py-4 border border-white/10"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              📥 Download Resume
            </motion.button>
          </div>
        </div>

        <motion.div
          className="hero-visual-container relative flex items-center justify-center min-h-[550px] py-12 cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
        >
          {/* Main Glowing Hub Image with 3D Tilt */}
          <motion.div
            className="relative z-10 w-full max-w-[450px] aspect-square rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(34,211,238,0.25)] border border-cyan-500/20"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            {/* Spinning Image Inner */}
            <motion.div
              className="w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <img
                src={cyberCoreImg}
                alt="Cyber Tech Core"
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#03040c] via-transparent to-transparent opacity-60"></div>
          </motion.div>

          {/* Floating Action Cards with Z-Offset */}
          {[
            { name: 'React', icon: '⚛️', x: -60, y: -80, z: 50, delay: 0 },
            { name: 'Node.js', icon: '🟢', x: 160, y: -120, z: 70, delay: 0.5 },
            { name: 'MongoDB', icon: '🍃', x: 220, y: 60, z: 40, delay: 1 },
            { name: 'Express', icon: '🚀', x: -140, y: 100, z: 60, delay: 1.5 }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="absolute z-20 glass px-5 py-3 rounded-2xl flex items-center gap-3 border border-cyan-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              style={{
                left: '50%',
                top: '50%',
                rotateX,
                rotateY,
                translateZ: card.z
              }}
              animate={{
                opacity: 1,
                x: card.x,
                y: card.y,
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: card.delay
              }}
            >
              <span className="text-xl">{card.icon}</span>
              <span className="text-xs font-black tracking-[0.2em] text-cyan-300 uppercase">{card.name}</span>
            </motion.div>
          ))}

          {/* Glowing Orbital Rings */}
          <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="w-[520px] h-[520px] border border-cyan-400/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[440px] h-[440px] border border-indigo-400/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-3"></div>
            <span className="text-[10px] uppercase tracking-[0.6em] font-black text-cyan-400 opacity-60">
              NEURAL CORE SYSTEM · ACTIVE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
