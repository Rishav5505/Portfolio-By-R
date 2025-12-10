import React, { useState } from 'react';

export default function VideoShowcase() {
    const [activeVideo, setActiveVideo] = useState(null);

    // आप यहाँ अपने project videos के links add कर सकते हैं
    const videos = [
        {
            id: 1,
            title: 'Smart AI Desktop Assistant Demo',
            description: 'Voice-controlled desktop automation with 10+ features',
            thumbnail: '', // Replace with actual
            videoUrl: '', // Replace with actual
            category: 'AI/ML'
        },
        {
            id: 2,
            title: 'Fake News Detection System',
            description: 'ML-powered news credibility analyzer with 81% accuracy',
            thumbnail: '', // Replace with actual
            videoUrl: '', // Replace with actual
            category: 'Machine Learning'
        },
        {
            id: 3,
            title: 'AI Travel Planner in Action',
            description: 'Multi-agent system for intelligent trip planning',
            thumbnail: '', // Replace with actual
            videoUrl: '', // Replace with actual
            category: 'AI/ML'
        }
    ];

    return (
        <section id="video-showcase" className="section video-showcase">
            <header className="section-header">
                <h2>PROJECT DEMOS & ANIMATIONS</h2>
                <p>Watch my projects in action - Live demonstrations and walkthroughs</p>
            </header>

            <div className="video-grid">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="video-card"
                        onClick={() => setActiveVideo(video)}
                    >
                        <div className="video-thumbnail">
                            <img src={video.thumbnail} alt={video.title} />
                            <div className="play-overlay">
                                <div className="play-button">
                                    <svg width="60" height="60" viewBox="0 0 60 60">
                                        <circle cx="30" cy="30" r="28" fill="rgba(0, 255, 255, 0.2)" stroke="#00ffff" strokeWidth="2" />
                                        <polygon points="23,18 23,42 42,30" fill="#00ffff" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="video-info">
                            <span className="video-category">{video.category}</span>
                            <h3>{video.title}</h3>
                            <p>{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="video-modal" onClick={() => setActiveVideo(null)}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setActiveVideo(null)}>
                            ✕
                        </button>
                        <div className="video-container">
                            <iframe
                                width="100%"
                                height="100%"
                                src={activeVideo.videoUrl}
                                title={activeVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video-details">
                            <h3>{activeVideo.title}</h3>
                            <p>{activeVideo.description}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Animated Background Elements */}
            <div className="video-bg-animation">
                <div className="animated-circle circle-1"></div>
                <div className="animated-circle circle-2"></div>
                <div className="animated-circle circle-3"></div>
            </div>
        </section>
    );
}
