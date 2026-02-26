import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

export default function Portfolio() {
  const portfolioCards = [
    {
      id: 0,
      title: "HRMS Lite: Workforce Management",
      tags: "React · Node.js · Payroll",
      description:
        "An enterprise-ready Human Resource Management System with automated payroll, attendance tracking, and employee self-service portals.",
    },
    {
      id: 1,
      title: "Safar Chaska: Travel Platform",
      tags: "React · Tailwind · Booking",
      description:
        "Premium Himalayan travel platform featuring handcrafted journeys, adventure packages, and seamless booking integration.",
    },
    {
      id: 2,
      title: "Therpy-Web: Mental Wellness",
      tags: "MERN Stack · Socket.IO · Jitsi",
      description:
        "A comprehensive teletherapy platform featuring secure authentication, therapy booking, mood tracking, and AI-driven insights.",
    },
    {
      id: 2,
      title: "Oasis ERP System",
      tags: "React · Node.js · MongoDB",
      description:
        "Advanced Educational Resource Planning system with multi-role dashboards, fee management, and student portals.",
    },
    {
      id: 3,
      title: "JalConnect: Water Systems",
      tags: "IOT · MERN Stack · Real-time",
      description:
        "Smart water distribution system for monitoring tank levels and leak detection with automated alerts.",
    },
    {
      id: 4,
      title: "Labour Chowk Admin",
      tags: "React · Tailwind · Analytics",
      description:
        "Enterprise grade administrative dashboard for managing workforce, job assignments, and real-time attendance.",
    },
    {
      id: 5,
      title: "Fresh Plant Nursery",
      tags: "React · E-commerce · UI/UX",
      description:
        "Modern e-commerce platform for a plant nursery featuring glassmorphism design and seamless shopping experience.",
    },
    {
      id: 6,
      title: "Blockchain Health Records",
      tags: "Ethereum · Solidity · Web3.js",
      description:
        "Decentralized medical record system utilizing smart contracts for secure and transparent storage.",
    },
  ];

  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current || (track && track.parentElement);
    if (!track) return;

    const perItemMs = 1800;
    let items = Array.from(track.querySelectorAll(".portfolio-card"));
    const originalCount = items.length;
    if (originalCount === 0) return;

    function ensureClones() {
      let current = Array.from(track.querySelectorAll(".portfolio-card"));

      while (current.length > originalCount * 2) {
        track.removeChild(track.lastElementChild);
        current.pop();
      }

      for (let i = 0; i < originalCount; i++) {
        const clone = items[i].cloneNode(true);
        track.appendChild(clone);
      }

      items = Array.from(track.querySelectorAll(".portfolio-card"));
    }

    function applyContinuousAnimation() {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const first = items[0];
      const itemWidth = first.offsetWidth + gap;

      const originalWidth = Math.round(itemWidth * originalCount);
      const duration = Math.max(1000, perItemMs * originalCount);

      let dyn = document.getElementById("portfolio-dynamic-style");
      if (dyn) dyn.remove();

      dyn = document.createElement("style");
      dyn.id = "portfolio-dynamic-style";
      dyn.innerHTML = `
        @keyframes portfolioScrollAnim {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${originalWidth}px); }
        }
        .portfolio-cards-track.animate {
          animation: portfolioScrollAnim ${duration}ms linear infinite;
          will-change: transform;
        }
      `;
      document.head.appendChild(dyn);

      track.classList.remove("animate");
      track.style.transform = "translateX(0)";
      void track.offsetWidth;

      track.classList.add("animate");
    }

    ensureClones();
    applyContinuousAnimation();

    const onEnter = () => (track.style.animationPlayState = "paused");
    const onLeave = () => (track.style.animationPlayState = "running");

    if (container) {
      container.addEventListener("mouseenter", onEnter);
      container.addEventListener("mouseleave", onLeave);
    }

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        items = Array.from(track.querySelectorAll(".portfolio-card")).slice(
          0,
          originalCount
        );
        ensureClones();
        applyContinuousAnimation();
      }, 150);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (container) {
        container.removeEventListener("mouseenter", onEnter);
        container.removeEventListener("mouseleave", onLeave);
      }
      const dyn = document.getElementById("portfolio-dynamic-style");
      if (dyn) dyn.remove();
    };
  }, []);

  return (
    <section id="portfolio" className="py-24">
      <SectionHeader
        title={<>Featured <span className="text-cyan-400">Projects</span></>}
        subtitle="Exploring the intersection of modern design and robust engineering."
      />

      <div
        className="portfolio-cards-scroll overflow-hidden"
        ref={containerRef}
      >
        <div
          id="portfolioCardsTrack"
          className="portfolio-cards-track flex gap-6"
          ref={trackRef}
        >
          {portfolioCards.map((card) => (
            <article
              key={card.id}
              className="portfolio-card min-w-[350px] group relative overflow-hidden glass p-8 rounded-3xl border border-white/5 bg-[#0a0c1a]/40 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50"
            >
              {/* Animated Glow Backlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500">
                    <span className="text-2xl">📁</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500/40"></div>
                    <div className="w-2 h-2 rounded-full bg-cyan-500/10"></div>
                  </div>
                </div>

                <h3 className="font-bold text-2xl mb-3 group-hover:text-cyan-400 transition-colors duration-300">{card.title}</h3>
                <p className="text-cyan-500/80 text-[10px] font-black uppercase tracking-[0.2em] mb-4 bg-cyan-500/5 inline-block px-3 py-1 rounded-full border border-cyan-500/10">
                  {card.tags}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{card.description}</p>

                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                  <span>EXPLORE PROJECT</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
