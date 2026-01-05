import React from "react";
import { motion } from "framer-motion";

const DigitalResumeView = () => {
  const data = {
    personal: {
      name: "Rishav Kumar",
      title: "Full Stack & MERN Specialist",
      email: "rishav@example.com", // Placeholder
      bio: "Ambitious Computer Science student with a passion for building scalable web applications. Specialized in MERN stack with experience in leading Agile teams as a Scrum Master.",
    },
    education: [
      {
        degree: "B.Tech in Computer Science & Engineering",
        school: "K. R. Mangalam University",
        period: "2022 – 2026",
        highlights: "Specialization in Full Stack Development. Gaining expertise in software architecture.",
      },
      {
        degree: "Senior Secondary (PCM)",
        school: "Sir Ganesh Dutt Inter Memorial College",
        period: "2022",
        highlights: "Focus on Physics, Chemistry, and Mathematics.",
      },
    ],
    experience: [
      {
        role: "Full Stack Developer (Scrum Master)",
        company: "Xcelerate - Live Project | Xebia",
        period: "Mar 2025 – Present",
        tasks: [
          "Leading Agile ceremonies and project delivery.",
          "Developed high-performance survey application using React Native, Node.js, and MongoDB.",
          "Ensuring sprint goals through CI/CD practices.",
        ],
      },
      {
        role: "Full Stack Development Intern",
        company: "Xebia IT Architects Pvt Ltd",
        period: "June 2025 – July 2025",
        tasks: [
          "Building and debugging scalable web applications.",
          "Collaborated with teams to improve application performance using MERN stack.",
        ],
      },
    ],
    skills: {
      Frontend: ["React", "React Native", "Redux", "Tailwind CSS", "HTML5/CSS3"],
      Backend: ["Node.js", "Express.js", "OAuth/JWT", "REST APIs"],
      Databases: ["MongoDB", "MySQL"],
      Tools: ["Agile/Scrum", "Git/GitHub", "Postman", "Linux"],
    },
  };

  return (
    <div className="bg-slate-900/50 p-8 rounded-xl border border-white/10 text-white max-h-[800px] overflow-y-auto custom-scrollbar">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-b border-cyan-500/30 pb-6 mb-8"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {data.personal.name}
        </h1>
        <p className="text-xl text-cyan-300 mt-1">{data.personal.title}</p>
        <p className="text-slate-400 mt-4 leading-relaxed">{data.personal.bio}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-cyan-400">💼</span> Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-4 border-l-2 border-slate-700"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
                  <p className="text-cyan-500 text-sm font-medium">{exp.company}</p>
                  <p className="text-slate-500 text-xs mt-1 mb-2 italic">{exp.period}</p>
                  <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                    {exp.tasks.map((task, tidx) => (
                      <li key={tidx}>{task}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-cyan-400">🎓</span> Education
            </h2>
            <div className="space-y-6">
              {data.education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="relative pl-4 border-l-2 border-slate-700"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500" />
                  <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                  <p className="text-blue-400 text-sm font-medium">{edu.school}</p>
                  <p className="text-slate-500 text-xs mt-1">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-cyan-400">⚡</span> Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(data.skills).map(([category, skills], idx) => (
                <div key={category} className="w-full">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 mt-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, sidx) => (
                      <span 
                        key={sidx}
                        className="px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs border border-white/5 hover:border-cyan-500/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact / Info */}
          <section className="bg-slate-800/30 p-6 rounded-xl border border-white/5">
             <h2 className="text-xl font-semibold mb-4">Quick Info</h2>
             <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-3">
                   <span className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">📍</span>
                   <span>Gurugram, Haryana, India</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">💻</span>
                   <span>Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">⏰</span>
                   <span>Available for Opportunities</span>
                </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DigitalResumeView;
