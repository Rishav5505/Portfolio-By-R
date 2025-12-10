import React, { useEffect, useRef } from 'react';

export default function AnimatedShapes() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Create floating shapes
        const shapes = [
            { type: 'circle', size: 80, color: 'cyan', duration: 20 },
            { type: 'square', size: 60, color: 'purple', duration: 25 },
            { type: 'triangle', size: 70, color: 'cyan', duration: 22 },
            { type: 'circle', size: 50, color: 'purple', duration: 18 },
            { type: 'square', size: 90, color: 'cyan', duration: 28 },
            { type: 'triangle', size: 55, color: 'purple', duration: 24 },
        ];

        shapes.forEach((shape, index) => {
            const shapeEl = document.createElement('div');
            shapeEl.className = `floating-shape floating-shape-${shape.type}`;
            shapeEl.style.cssText = `
        position: absolute;
        width: ${shape.size}px;
        height: ${shape.size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float${index} ${shape.duration}s ease-in-out infinite;
        opacity: 0.1;
      `;

            if (shape.type === 'circle') {
                shapeEl.style.borderRadius = '50%';
                shapeEl.style.background = shape.color === 'cyan'
                    ? 'linear-gradient(135deg, #00ffff, #00cccc)'
                    : 'linear-gradient(135deg, #6600ff, #9933ff)';
            } else if (shape.type === 'square') {
                shapeEl.style.background = shape.color === 'cyan'
                    ? 'linear-gradient(135deg, #00ffff, #00cccc)'
                    : 'linear-gradient(135deg, #6600ff, #9933ff)';
                shapeEl.style.transform = 'rotate(45deg)';
            } else if (shape.type === 'triangle') {
                shapeEl.style.width = '0';
                shapeEl.style.height = '0';
                shapeEl.style.borderLeft = `${shape.size / 2}px solid transparent`;
                shapeEl.style.borderRight = `${shape.size / 2}px solid transparent`;
                shapeEl.style.borderBottom = `${shape.size}px solid ${shape.color === 'cyan' ? '#00ffff' : '#6600ff'}`;
            }

            container.appendChild(shapeEl);

            // Create unique animation keyframes
            const styleSheet = document.styleSheets[0];
            const keyframes = `
        @keyframes float${index} {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg) scale(1.2);
          }
          50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg) scale(0.8);
          }
          75% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg) scale(1.1);
          }
        }
      `;
            styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        });

        return () => {
            // Cleanup
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="animated-shapes-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -2,
                pointerEvents: 'none',
                overflow: 'hidden'
            }}
        />
    );
}
