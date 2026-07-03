import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

// Import project thumbnails
import cybervigilThumb from '../assets/cybervigil_thumb.png';
import wavygoThumb from '../assets/wavygo_thumb.png';
import hrmsThumb from '../assets/hrms_final.jpg';
import safarThumb from '../assets/SafarChaska_Thumb.png';
import therapyThumb from '../assets/Therpy_Web_Thumb.png';
import oasisThumb from '../assets/Oasis_ERP_Thumb.png';
import jalconnectThumb from '../assets/JalConnect_Thumb.png';
import labourThumb from '../assets/LabourChowk_Thumb.png';
import freshplantThumb from '../assets/FreshPlant_Thumb.png';
import blockchainThumb from '../assets/portfolioo-img-6.jpg';

export default function Portfolio() {
  const portfolioCards = [
    {
      id: 'cybervigil',
      title: 'CyberVigil: Security Ecosystem',
      tags: 'React · Security · UI/UX',
      image: cybervigilThumb,
      description: 'A sleek, modern cybersecurity dashboard featuring high-tech ecosystem interfaces, advanced data visualizations, and live threat web maps.',
    },
    {
      id: 'wavygo',
      title: 'WavyGo: Premium Bike Rentals',
      tags: 'React · Tailwind · Booking',
      image: wavygoThumb,
      description: 'Premium platform for luxury motorcycle rentals, featuring a sleek mint-green UI, real-time availability, and seamless web booking.',
    },
    {
      id: 'hrmslite',
      title: "HRMS Lite: Workforce Management",
      tags: "React · Node.js · Payroll",
      image: hrmsThumb,
      description:
        "An enterprise-ready Human Resource Management System with automated payroll, attendance tracking, and employee self-service portals.",
    },
    {
      id: 'safarchaska',
      title: "Safar Chaska: Travel Platform",
      tags: "React · Tailwind · Booking",
      image: safarThumb,
      description:
        "Premium Himalayan travel platform featuring handcrafted journeys, adventure packages, and seamless booking integration.",
    },
    {
      id: 'therpyweb',
      title: "Therpy-Web: Mental Wellness",
      tags: "MERN Stack · Socket.IO · Jitsi",
      image: therapyThumb,
      description:
        "A comprehensive teletherapy platform featuring secure authentication, therapy booking, mood tracking, and AI-driven insights.",
    },
    {
      id: 'oasis',
      title: "Oasis ERP System",
      tags: "React · Node.js · MongoDB",
      image: oasisThumb,
      description:
        "Advanced Educational Resource Planning system with multi-role dashboards, fee management, and student portals.",
    },
    {
      id: 'jalconnect',
      title: "JalConnect: Water Systems",
      tags: "IOT · MERN Stack · Real-time",
      image: jalconnectThumb,
      description:
        "Smart water distribution system for monitoring tank levels and leak detection with automated alerts.",
    },
    {
      id: 'labourchowk',
      title: "Labour Chowk Admin",
      tags: "React · Tailwind · Analytics",
      image: labourThumb,
      description:
        "Enterprise grade administrative dashboard for managing workforce, job assignments, and real-time attendance.",
    },
    {
      id: 'freshplant',
      title: "Fresh Plant Nursery",
      tags: "React · E-commerce · UI/UX",
      image: freshplantThumb,
      description:
        "Modern e-commerce platform for a plant nursery featuring glassmorphism design and seamless shopping experience.",
    },
    {
      id: 'blockchain',
      title: "Blockchain Health Records",
      tags: "Ethereum · Solidity · Web3.js",
      image: blockchainThumb,
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
          {portfolioCards.map((card, idx) => (
            <article
              key={`${card.id}-${idx}`}
              className="portfolio-card min-w-[380px] max-w-[380px] group relative overflow-hidden glass p-6 rounded-[2.5rem] border border-white/5 bg-[#0a0c1a]/40 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50"
            >
              {/* Animated Glow Backlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>

              <div className="relative z-10">
                {/* Project Screenshot Cover */}
                <div className="relative h-48 w-full rounded-[2rem] overflow-hidden mb-6 border border-white/5 group-hover:border-cyan-500/30 transition-all duration-500">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04050d] via-transparent to-transparent opacity-80"></div>
                </div>

                <h3 className="font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">{card.title}</h3>
                
                <p className="text-cyan-500/80 text-[10px] font-black uppercase tracking-[0.2em] mb-4 bg-cyan-500/5 inline-block px-3 py-1 rounded-full border border-cyan-500/10">
                  {card.tags}
                </p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{card.description}</p>

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
