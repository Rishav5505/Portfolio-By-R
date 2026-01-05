import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 300);
                    return 100;
                }
                return prev + 10;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="loading-screen">
            <div className="loading-content">
                <div className="loading-logo">
                    <div className="logo-circle">
                        <span className="logo-letter">R</span>
                    </div>
                </div>

                <h2 className="loading-title">RISHAV KUMAR</h2>
                <p className="loading-subtitle">Full Stack Developer</p>

                <div className="loading-bar-container">
                    <div
                        className="loading-bar-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <p className="loading-percent">{progress}%</p>
            </div>
        </div>
    );
}
