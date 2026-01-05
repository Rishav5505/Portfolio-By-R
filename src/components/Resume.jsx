import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const resumeCards = [
    {
      id: 1,
      title: "Education",
      heading: "B.Tech in Computer Science & Engineering",
      meta: "K. R. Mangalam University · 2022 – 2026",
      content:
        "Specialization in Full Stack Development. Gaining expertise in software architecture, enterprise technologies, and end-to-end application development.",
    },
    {
      id: 2,
      title: "Secondary Education",
      heading: "Senior Secondary (PCM)",
      meta: "Sir Ganesh Dutt Inter Memorial College · 2022",
      content:
        "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
    },
    {
      id: 3,
      title: "Work Experience",
      heading: "Full Stack Developer (Scrum Master)",
      meta: "Xcelerate - Live Project | Xebia · Mar 2025 – Present",
      content:
        "Leading Agile ceremonies and project delivery. Developed a high-performance survey application using React Native, Node.js, and MongoDB. Ensuring sprint goals through CI/CD practices.",
    },
    {
      id: 4,
      title: "Internship",
      heading: "Full Stack Development Intern",
      meta: "Xebia IT Architects Pvt Ltd · June 2025 – July 2025",
      content:
        "Building and debugging scalable web applications in a professional environment. Collaborated with teams to improve application performance and user experience using MERN stack.",
    },
  ];

  return (
    <section id="resume" className="py-16">
      <header className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-wide">RESUME</h2>
      </header>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto px-4">
        {resumeCards.map((card, index) => (
          <motion.div
            key={card.id}
            className="resume-card glass p-6 rounded-xl border border-white/10 bg-white/5 shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              rotateX: 5,
              rotateY: -5,
              boxShadow: "0px 10px 25px rgba(0, 255, 255, 0.25)",
            }}
          >
            <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
            <h4 className="font-medium text-lg text-cyan-300 mb-1">
              {card.heading}
            </h4>
            <span className="text-xs text-slate-400 uppercase tracking-wide block mb-3">
              {card.meta}
            </span>
            <p className="text-slate-300 text-sm">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
