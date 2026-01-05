import React, { useEffect, useRef } from "react";

export default function Portfolio() {
  const portfolioCards = [
    {
      id: 1,
      title: "Mind Mend: Teletherapy Platform",
      tags: "MERN Stack · Socket.IO · Jitsi",
      description:
        "A comprehensive teletherapy platform featuring secure authentication, therapy booking, mood tracking, and AI-driven insights. Integrated real-time community support and resources.",
    },
    {
      id: 2,
      title: "Blockchain Health Record System",
      tags: "Ethereum · Solidity · Web3.js",
      description:
        "A decentralized medical record system utilizing Ethereum smart contracts for tamper-proof storage. Implemented patient-controlled access with full audit logging for doctors.",
    },
    {
      id: 3,
      title: "Xcelerate: Survey Application",
      tags: "React Native · Node.js · MongoDB",
      description:
        "A high-performance survey application developed under Xebia's Live Project. Optimized for mobile delivery with real-time data sync and Agile delivery management.",
    },
    {
      id: 4,
      title: "Agile Project Leadership",
      tags: "CI/CD · Scrum · Team Lead",
      description:
        "Managed cross-functional teams using Scrum methodologies. Led Agile ceremonies and ensured high-quality project delivery through code reviews and automated testing.",
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
    <section id="portfolio" className="py-16">
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">PORTFOLIO</h2>
        <p className="text-slate-400">
          Selected projects showcasing AI/ML, Data Science, and automation
          expertise.
        </p>
      </header>

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
              className="portfolio-card min-w-[320px] glass p-5 rounded-xl border border-white/10 bg-white/5 shadow-lg"
            >
              <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
              <p className="text-cyan-300 text-xs uppercase tracking-wide mb-3">
                {card.tags}
              </p>
              <p className="text-slate-300 text-sm">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
