import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// PDFs
import hardCopyPdf from "../assets/HardCopy.pdf";
import softCopyPdf from "../assets/SoftCopy.pdf";
import updatedPdf from "../assets/Vinay Badnoriya updated1.pdf";
import vinayResumePdf from "../assets/VinayBadnoriyaResume.pdf";

export default function ResumeDownload() {
  const [selectedResume, setSelectedResume] = useState(null);

  const resumes = [
    {
      id: "vinay-resume",
      name: "Vinay's Resume",
      description: "Professional resume - Latest 2024",
      file: vinayResumePdf,
      fileName: "VinayBadnoriyaResume.pdf",
      featured: true,
    },
    {
      id: "hard",
      name: "Hard Copy",
      description: "Original formatted resume",
      file: hardCopyPdf,
      fileName: "HardCopy.pdf",
    },
    {
      id: "soft",
      name: "Soft Copy",
      description: "Standard resume format",
      file: softCopyPdf,
      fileName: "SoftCopy.pdf",
    },
    {
      id: "updated",
      name: "Updated Resume",
      description: "Latest version with recent projects",
      file: updatedPdf,
      fileName: "Vinay_Badnoriya_Resume.pdf",
    },
  ];

  const handleDownload = (file, fileName) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = fileName;
    link.click();
  };

  const handleView = (file) => {
    window.open(file, "_blank");
  };

  return (
    <section id="resume-download" className="py-20">
      <header className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-wide">Download My Resume</h2>
      </header>

      <div className="max-w-6xl mx-auto px-4">
        {/* Resume Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-14">
          {resumes.map((resume, index) => (
            <motion.div
              key={resume.id}
              className={`relative cursor-pointer p-6 glass rounded-xl border shadow-lg hover:shadow-cyan-500/20 transition-all ${selectedResume?.id === resume.id
                  ? "ring-2 ring-cyan-400"
                  : resume.featured
                    ? "border-yellow-400/50 bg-gradient-to-br from-yellow-500/10 to-white/5"
                    : "border-white/10 bg-white/5"
                }`}
              onClick={() => setSelectedResume(resume)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
                boxShadow: resume.featured
                  ? "0px 10px 30px rgba(234,179,8,0.3)"
                  : "0px 10px 25px rgba(0,255,255,0.25)",
              }}
            >
              {resume.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  ⭐ LATEST
                </div>
              )}
              <div className="text-5xl mb-4">📄</div>
              <h4 className="text-xl font-semibold">{resume.name}</h4>
              <p className="text-slate-300 text-sm mt-1">{resume.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Selected Resume Preview + Actions */}
        <AnimatePresence mode="wait">
          {selectedResume ? (
            <motion.div
              key={selectedResume.id}
              className="glass p-8 rounded-xl border border-white/10 bg-white/5 shadow-xl flex flex-col lg:flex-row gap-10"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.5 }}
            >
              {/* Left: Info + Actions */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  Selected: {selectedResume.name}
                </h3>
                <p className="text-slate-300 mb-6">
                  {selectedResume.description}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleView(selectedResume.file)}
                    className="px-5 py-2 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
                  >
                    👁️ View
                  </button>

                  <button
                    onClick={() =>
                      handleDownload(
                        selectedResume.file,
                        selectedResume.fileName
                      )
                    }
                    className="px-5 py-2 rounded-lg border border-cyan-500 text-cyan-300 font-medium hover:bg-cyan-500/10 transition"
                  >
                    ⬇️ Download
                  </button>
                </div>
              </div>

              {/* Right: PDF Preview */}
              <div className="flex-1 min-h-[500px]">
                <iframe
                  src={selectedResume.file}
                  className="w-full h-full rounded-lg border border-white/10"
                  title="Resume Preview"
                ></iframe>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="text-center text-slate-400 py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              👉 Select a resume version above to view or download
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
