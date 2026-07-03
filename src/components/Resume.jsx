import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const resumeCards = [
    {
      id: 1,
      title: "Experience",
      heading: "LLM Post-Training Intern",
      meta: "Ethara.AI · Jan 2026 – Present",
      content:
        "Worked on post-training evaluation and benchmarking pipelines for Large Language Models across multiple repositories. Built and validated 100+ multi-architecture Docker images for large-scale workflows. Evaluated model performance, golden patches, and dataset quality.",
    },
    {
      id: 2,
      title: "Experience",
      heading: "Full Stack Developer Intern",
      meta: "Xcelerate Live Project, Xebia · Mar 2025 – Jun 2025",
      content:
        "Developed survey application using React Native, Node.js, Express.js, and MongoDB. Worked in Agile environment with sprint planning, collaboration, and code reviews.",
    },
    {
      id: 3,
      title: "Education",
      heading: "B.Tech in CSE (Full Stack)",
      meta: "K.R. Mangalam University · 2022 – 2026",
      content:
        "Specialization in Full Stack Development. Gained expertise in software architecture, enterprise technologies, and end-to-end application development.",
    },
    {
      id: 4,
      title: "Projects",
      heading: "Mind Mend (MERN Stack)",
      meta: "Teletherapy Platform · 2025 – Present",
      content:
        "Built teletherapy platform with authentication, therapy booking, mood tracking, and AI insights. Tech Stack: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, JWT.",
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
