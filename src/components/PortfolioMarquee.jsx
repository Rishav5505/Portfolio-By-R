import React, { useEffect } from 'react';
import img1 from '../assets/portfolioo-img-1.jpg';
import img2 from '../assets/portfolioo-img-2.jpg';
import img3 from '../assets/portfolioo-img-3.jpg';
import img4 from '../assets/portfolioo-img-4.jpg';
import img5 from '../assets/portfolioo-img-5.jpg';
import img6 from '../assets/portfolioo-img-6.jpg';

export default function PortfolioMarquee() {
  const images = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const track = document.getElementById('marqueeTrack');
    if (!track) return;

    const container = track.parentElement;
    const perItemMs = 3000;
    let items = Array.from(track.querySelectorAll('.marquee-item'));
    const originalCount = items.length;

    if (originalCount === 0) return;

    function ensureClones() {
      let current = Array.from(track.querySelectorAll('.marquee-item'));
      while (current.length > originalCount) {
        track.removeChild(track.lastElementChild);
        current.pop();
      }

      for (let i = 0; i < originalCount; i++) {
        const clone = items[i].cloneNode(true);
        track.appendChild(clone);
      }
      items = Array.from(track.querySelectorAll('.marquee-item'));
    }

    function applyContinuousAnimation() {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const first = items[0];
      const itemWidth = first.offsetWidth + gap;
      const originalWidth = Math.round(itemWidth * originalCount);
      const duration = Math.max(1000, perItemMs * originalCount);

      let dyn = document.getElementById('marquee-dynamic-style');
      if (dyn) dyn.parentNode.removeChild(dyn);

      dyn = document.createElement('style');
      dyn.id = 'marquee-dynamic-style';
      dyn.innerHTML = `
        @keyframes marqueeAnim {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${originalWidth}px); }
        }
        .marquee-track.animate {
          animation: marqueeAnim ${duration}ms linear infinite;
          will-change: transform;
        }
      `;
      document.head.appendChild(dyn);

      track.classList.remove('animate');
      track.style.transform = 'translateX(0)';
      void track.offsetWidth;
      track.classList.add('animate');
    }

    ensureClones();
    applyContinuousAnimation();

    container.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    container.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        items = Array.from(track.querySelectorAll('.marquee-item')).slice(0, originalCount);
        ensureClones();
        applyContinuousAnimation();
      }, 120);
    });
  }, []);

  return (
    <section id="portfolio-marquee" className="section portfolio-marquee-section">
      <header className="section-header">
        <h2>MY ART</h2>
      </header>
      <div className="portfolio-marquee" aria-hidden="false" data-interval-ms="3000">
        <div className="marquee-track" id="marqueeTrack">
          {images.map((img, idx) => (
            <div key={idx} className="marquee-item">
              <img src={img} alt={`portfolio ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
