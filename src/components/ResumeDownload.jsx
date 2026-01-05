import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DigitalResumeView from "./DigitalResumeView";

// PDFs
import rishavResumePdf from "../assets/Rishav FSD.pdf";
import rishavCsePdf from "../assets/Rishav CSE.pdf";
import hardCopyPdf from "../assets/HardCopy.pdf";
import softCopyPdf from "../assets/SoftCopy.pdf";

export default function ResumeDownload() {
  const [selectedResume, setSelectedResume] = useState(null);

  const resumes = [
    {
      id: "rishav-main",
      name: "FSD Resume",
      description: "Full Stack & MERN Specialist",
      file: rishavResumePdf,
      fileName: "Rishav_Kumar_FSD.pdf",
      featured: true,
    },
    {
      id: "hard",
      name: "CSE Technical Resume",
      description: "Core CSE & Technical format",
      file: rishavCsePdf,
      fileName: "Rishav_Kumar_CSE.pdf",
    },
    {
      id: "soft",
      name: "Digital Interactive Resume",
      description: "Modern web-based format",
      type: "digital",
      file: softCopyPdf, // Still keep for download
      fileName: "Rishav_Kumar_Digital.pdf",
    },
  ];

  const handleDownload = (file, fileName) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = fileName;
    link.click();
  };

  const handleView = (resume) => {
    if (resume.type === "digital") {
      // For digital, we just scroll to the preview or it's already selected
      setSelectedResume(resume);
    } else {
      window.open(resume.file, "_blank");
    }
  };

  return (
    <section id="resume-download" className="py-20">
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Download My Resume
        </h2>
      </header>

      <div className="max-w-6xl mx-auto px-4">
        {/* Resume Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-14">
          {resumes.map((resume, index) => (
            <motion.div
              key={resume.id}
              className={`relative cursor-pointer p-6 glass rounded-2xl border shadow-lg transition-all ${selectedResume?.id === resume.id
                ? "ring-2 ring-cyan-400 border-cyan-400/50"
                : resume.featured
                  ? "border-yellow-400/50 bg-gradient-to-br from-yellow-500/10 to-transparent"
                  : "border-white/10 bg-white/5"
                }`}
              onClick={() => setSelectedResume(resume)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: resume.featured
                  ? "0px 10px 30px rgba(234,179,8,0.2)"
                  : "0px 10px 25px rgba(0,255,255,0.15)",
              }}
            >
              {resume.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                  LATEST
                </div>
              )}
              <div className="text-4xl mb-4">
                {resume.type === "digital" ? "⚡" : "📄"}
              </div>
              <h4 className="text-xl font-bold">{resume.name}</h4>
              <p className="text-slate-400 text-sm mt-2">{resume.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Selected Resume Preview + Actions */}
        <AnimatePresence mode="wait">
          {selectedResume ? (
            <motion.div
              key={selectedResume.id}
              className="glass p-8 rounded-2xl border border-white/10 bg-white/5 shadow-2xl flex flex-col gap-8"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {selectedResume.name}
                  </h3>
                  <p className="text-slate-400">
                    {selectedResume.description}
                  </p>
                </div>

                <div className="flex gap-4">
                  {selectedResume.type !== "digital" && (
                    <button
                      onClick={() => handleView(selectedResume)}
                      className="px-6 py-2.5 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    >
                      👁️ View PDF
                    </button>
                  )}

                  <button
                    onClick={() =>
                      handleDownload(
                        selectedResume.file,
                        selectedResume.fileName
                      )
                    }
                    className="px-6 py-2.5 rounded-xl border-2 border-cyan-500/50 text-cyan-400 font-bold hover:bg-cyan-500/10 transition"
                  >
                    ⬇️ Download
                  </button>
                </div>
              </div>

              {/* Preview Area */}
              <div className="w-full min-h-[600px] bg-slate-900/40 rounded-xl overflow-hidden border border-white/5">
                {selectedResume.type === "digital" ? (
                  <DigitalResumeView />
                ) : (
                  <iframe
                    src={selectedResume.file}
                    className="w-full h-[600px] border-none"
                    title="Resume Preview"
                  ></iframe>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="text-center text-slate-500 py-16 border-2 border-dashed border-white/10 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-lg">✨ Select a version to preview and download</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

