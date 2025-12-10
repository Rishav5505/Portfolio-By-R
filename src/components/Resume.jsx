import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const resumeCards = [
    {
      id: 1,
      title: "Education",
      heading: "B.Tech in Computer Science – AI & ML",
      meta: "K.R. Mangalam University · 2022 – 2026",
      content:
        "Specialization in AI & Machine Learning. CGPA: 7.05. Coursework includes Data Science with Python, Big Data Analytics, DL, and Statistics with Python.",
    },
    {
      id: 2,
      title: "Certifications",
      heading: "Professional Certifications",
      meta: "IBM · Samatrix",
      content:
        "Python 101 for Data Science, Statistics Using Python, Data Analysis with Python, Data Visualization, Big Data Engineer.",
    },
    {
      id: 3,
      title: "Experience",
      heading: "Data Science & Analytics Intern",
      meta: "Zidio Development · May 2025 – Aug 2025",
      content:
        "Worked on data collection, cleaning, and EDA. Assisted with predictive ML models for business insights.",
    },
    {
      id: 4,
      title: "Technical Skills",
      heading: "Skills & Tools",
      meta: "Full Stack",
      content:
        "Python, R, SQL, Pandas, NumPy, Scikit-learn, TensorFlow, Matplotlib, Power BI, Flask, Git, VS Code.",
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
