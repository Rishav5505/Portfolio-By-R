import React, { useState, useEffect } from 'react';

export default function ScrollRobot() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('idle');
    const [scrollSpeed, setScrollSpeed] = useState(0);
    const [robotMood, setRobotMood] = useState('happy');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        let lastTime = Date.now();
        let scrollTimeout;

        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            const currentTime = Date.now();
            const timeDiff = currentTime - lastTime;
            const scrollDiff = Math.abs(currentScrollY - lastScrollY);
            const speed = scrollDiff / timeDiff;

            // Show robot after scrolling 100px
            setIsVisible(currentScrollY > 100);

            // Calculate scroll percentage (0-100)
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (currentScrollY / maxScroll) * 100;
            setScrollPosition(scrollPercent);

            // Determine direction
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
            }

            // Set speed
            setScrollSpeed(speed);

            // Determine mood based on speed and position
            if (speed > 2) {
                setRobotMood('excited');
            } else if (scrollPercent > 90) {
                setRobotMood('tired');
            } else if (scrollPercent < 10) {
                setRobotMood('happy');
            } else {
                setRobotMood('normal');
            }

            lastScrollY = currentScrollY;
            lastTime = currentTime;

            // Reset to idle after 200ms of no scrolling
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setScrollDirection('idle');
                setScrollSpeed(0);
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    // Robot expressions based on state
    const getRobotExpression = () => {
        if (scrollSpeed > 2) {
            return scrollDirection === 'down' ? '😵' : '🤪';
        }
        if (robotMood === 'excited') return '😃';
        if (robotMood === 'tired') return '😴';
        if (robotMood === 'happy') return '😊';
        return '🤖';
    };

    // Robot body animation class
    const getRobotAnimation = () => {
        if (scrollSpeed > 2) return 'robot-shaking';
        if (scrollDirection === 'down') return 'robot-moving-down';
        if (scrollDirection === 'up') return 'robot-moving-up';
        return 'robot-idle';
    };

    // Robot vertical position based on scroll
    const getRobotPosition = () => {
        return `${Math.min(scrollPosition, 85)}%`;
    };

    if (!isVisible) return null;

    return (
        <div className="scroll-robot-container">
            {/* Robot */}
            <div
                className={`scroll-robot ${getRobotAnimation()}`}
                style={{ top: getRobotPosition() }}
            >
                {/* Robot Head */}
                <div className="robot-head">
                    <div className="robot-antenna">
                        <div className="antenna-ball"></div>
                    </div>
                    <div className="robot-face">
                        <div className="robot-eyes">
                            <div className={`robot-eye ${scrollDirection === 'up' ? 'eye-up' : scrollDirection === 'down' ? 'eye-down' : ''}`}></div>
                            <div className={`robot-eye ${scrollDirection === 'up' ? 'eye-up' : scrollDirection === 'down' ? 'eye-down' : ''}`}></div>
                        </div>
                        <div className="robot-mouth">
                            {getRobotExpression()}
                        </div>
                    </div>
                </div>

                {/* Robot Body */}
                <div className="robot-body">
                    <div className="robot-panel">
                        <div className={`robot-light ${scrollDirection !== 'idle' ? 'light-active' : ''}`}></div>
                        <div className="robot-screen">
                            <span className="scroll-percent">{Math.round(scrollPosition)}%</span>
                        </div>
                    </div>
                </div>

                {/* Robot Arms */}
                <div className={`robot-arm robot-arm-left ${scrollDirection === 'down' ? 'arm-down' : 'arm-up'}`}></div>
                <div className={`robot-arm robot-arm-right ${scrollDirection === 'down' ? 'arm-down' : 'arm-up'}`}></div>

                {/* Robot Legs */}
                <div className="robot-legs">
                    <div className={`robot-leg ${scrollDirection !== 'idle' ? 'leg-moving' : ''}`}></div>
                    <div className={`robot-leg ${scrollDirection !== 'idle' ? 'leg-moving leg-delay' : ''}`}></div>
                </div>

                {/* Speech Bubble */}
                {scrollSpeed > 2 && (
                    <div className="robot-speech">
                        {scrollDirection === 'down' ? 'Wheee! 🚀' : 'Wait up! ⬆️'}
                    </div>
                )}
            </div>

            {/* Track Line */}
            <div className="robot-track">
                <div className="track-progress" style={{ height: `${scrollPosition}%` }}></div>
            </div>
        </div>
    );
}
