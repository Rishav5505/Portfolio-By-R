import React, { useEffect } from 'react';

export default function AIBackground() {
  useEffect(() => {
    createAIBackground();
  }, []);

  const createAIBackground = () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 1200 800');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

    // Gradient 1: Blue to Cyan
    const grad1 = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    grad1.setAttribute('id', 'grad1');
    grad1.setAttribute('x1', '0%');
    grad1.setAttribute('y1', '0%');
    grad1.setAttribute('x2', '100%');
    grad1.setAttribute('y2', '100%');

    const stop1a = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1a.setAttribute('offset', '0%');
    stop1a.setAttribute('stop-color', '#0099ff');
    stop1a.setAttribute('stop-opacity', '0.3');

    const stop1b = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1b.setAttribute('offset', '100%');
    stop1b.setAttribute('stop-color', '#00ffff');
    stop1b.setAttribute('stop-opacity', '0.1');

    grad1.appendChild(stop1a);
    grad1.appendChild(stop1b);

    // Gradient 2: Purple to Blue
    const grad2 = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    grad2.setAttribute('id', 'grad2');
    grad2.setAttribute('cx', '50%');
    grad2.setAttribute('cy', '50%');

    const stop2a = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2a.setAttribute('offset', '0%');
    stop2a.setAttribute('stop-color', '#6600ff');
    stop2a.setAttribute('stop-opacity', '0.4');

    const stop2b = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2b.setAttribute('offset', '100%');
    stop2b.setAttribute('stop-color', '#0033ff');
    stop2b.setAttribute('stop-opacity', '0.05');

    grad2.appendChild(stop2a);
    grad2.appendChild(stop2b);

    // Glow filter
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute('id', 'glow');

    const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    feGaussianBlur.setAttribute('stdDeviation', '3');

    const feMerge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
    const feMergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
    feMergeNode1.setAttribute('in', 'coloredBlur');

    const feMergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
    feMergeNode2.setAttribute('in', 'SourceGraphic');

    feMerge.appendChild(feMergeNode1);
    feMerge.appendChild(feMergeNode2);
    filter.appendChild(feGaussianBlur);
    filter.appendChild(feMerge);

    defs.appendChild(grad1);
    defs.appendChild(grad2);
    defs.appendChild(filter);

    svg.appendChild(defs);

    const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.textContent = `
      @keyframes flowLine { 0% { stroke-dashoffset: 100; opacity: 0.1; } 50% { opacity: 0.4; } 100% { stroke-dashoffset: -100; opacity: 0.1; } }
      @keyframes floatNode { 0%, 100% { transform: translate(0, 0); } 33% { transform: translate(15px, -10px); } 66% { transform: translate(-10px, 15px); } }
      @keyframes pulseGlow { 0%, 100% { r: 3; opacity: 0.6; } 50% { r: 5; opacity: 0.2; } }
      @keyframes driftParticle { 0% { transform: translate(0, 0); opacity: 0.3; } 100% { transform: translate(30px, -50px); opacity: 0; } }
      .flowing-line { animation: flowLine 8s linear infinite; stroke-dasharray: 100; }
      .node { animation: floatNode 6s ease-in-out infinite; }
      .glow-node { animation: pulseGlow 4s ease-in-out infinite; filter: url(#glow); }
      .particle { animation: driftParticle 12s ease-out infinite; }
    `;
    svg.appendChild(style);

    // Neural network lines
    const lines = [
      { x1: 50, y1: 150, x2: 1150, y2: 150 },
      { x1: 50, y1: 400, x2: 1150, y2: 400 },
      { x1: 50, y1: 650, x2: 1150, y2: 650 }
    ];

    lines.forEach((l, idx) => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', l.x1);
      line.setAttribute('y1', l.y1);
      line.setAttribute('x2', l.x2);
      line.setAttribute('y2', l.y2);
      line.setAttribute('stroke', 'url(#grad1)');
      line.setAttribute('stroke-width', '2');
      line.setAttribute('class', 'flowing-line');
      line.style.animationDelay = (idx * 2) + 's';
      svg.appendChild(line);
    });

    // Vertical lines
    for (let i = 0; i < 5; i++) {
      const x = 200 + i * 200;

      const vline = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      vline.setAttribute('x1', x);
      vline.setAttribute('y1', '150');
      vline.setAttribute('x2', x + 30);
      vline.setAttribute('y2', '400');
      vline.setAttribute('stroke', 'url(#grad2)');
      vline.setAttribute('stroke-width', '1.5');
      vline.setAttribute('opacity', '0.3');
      svg.appendChild(vline);

      const vline2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      vline2.setAttribute('x1', x + 30);
      vline2.setAttribute('y1', '400');
      vline2.setAttribute('x2', x);
      vline2.setAttribute('y2', '650');
      vline2.setAttribute('stroke', 'url(#grad2)');
      vline2.setAttribute('stroke-width', '1.5');
      vline2.setAttribute('opacity', '0.3');
      svg.appendChild(vline2);
    }

    // Nodes and glows
    const nodePositions = [
      [200, 150], [400, 150], [600, 150], [800, 150], [1000, 150],
      [200, 400], [400, 400], [600, 400], [800, 400], [1000, 400],
      [200, 650], [400, 650], [600, 650], [800, 650], [1000, 650]
    ];

    nodePositions.forEach((pos, idx) => {
      const node = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      node.setAttribute('cx', pos[0]);
      node.setAttribute('cy', pos[1]);
      node.setAttribute('r', '4');
      node.setAttribute('fill', '#00ffff');
      node.setAttribute('class', 'node');
      node.style.animationDelay = (idx * 0.3) + 's';
      svg.appendChild(node);

      const glowNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glowNode.setAttribute('cx', pos[0]);
      glowNode.setAttribute('cy', pos[1]);
      glowNode.setAttribute('r', '3');
      glowNode.setAttribute('fill', '#6600ff');
      glowNode.setAttribute('class', 'glow-node');
      glowNode.style.animationDelay = (idx * 0.4) + 's';
      svg.appendChild(glowNode);
    });

    // Particles
    for (let i = 0; i < 12; i++) {
      const particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      particle.setAttribute('cx', Math.random() * 1200);
      particle.setAttribute('cy', Math.random() * 800);
      particle.setAttribute('r', '1.5');
      particle.setAttribute('fill', '#00ffff');
      particle.setAttribute('class', 'particle');
      particle.style.animationDelay = (i * 1) + 's';
      particle.style.animationDuration = (8 + Math.random() * 4) + 's';
      svg.appendChild(particle);
    }

    // Background gradient circles
    const bgCircle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    bgCircle1.setAttribute('cx', '200');
    bgCircle1.setAttribute('cy', '200');
    bgCircle1.setAttribute('r', '300');
    bgCircle1.setAttribute('fill', 'url(#grad2)');
    bgCircle1.setAttribute('opacity', '0.15');
    svg.appendChild(bgCircle1);

    const bgCircle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    bgCircle2.setAttribute('cx', '1000');
    bgCircle2.setAttribute('cy', '600');
    bgCircle2.setAttribute('r', '350');
    bgCircle2.setAttribute('fill', 'url(#grad1)');
    bgCircle2.setAttribute('opacity', '0.1');
    svg.appendChild(bgCircle2);

    const bgContainer = document.getElementById('aiBackgroundLayer');
    if (bgContainer && bgContainer.children.length === 0) {
      bgContainer.appendChild(svg);
    }
  };

  return <div className="ai-background-layer" id="aiBackgroundLayer"></div>;
}
// 