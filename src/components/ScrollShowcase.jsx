import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollShowcase.css';

// Import images
import img1 from '../assets/portfolioo-img-1.jpg';
import img2 from '../assets/portfolioo-img-2.jpg';
import img3 from '../assets/portfolioo-img-3.jpg';
import img4 from '../assets/portfolioo-img-4.jpg';
import img5 from '../assets/portfolioo-img-5.jpg';
import img6 from '../assets/portfolioo-img-6.jpg'; // Using img6 twice if needed or just 5
import profileImg from '../assets/IMG_3823.JPG';

const ScrollShowcase = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

    return (
        <section ref={targetRef} className="scroll-showcase-section">
            <div className="sticky-wrapper">
                <motion.div style={{ x }} className="horizontal-scroll-container">

                    {/* Section 1: Intro Title */}
                    <div className="scroll-item text-item">
                        <h2 className="outline-text">VINAY</h2>
                        <span className="subtitle">BADNORIYA</span>
                    </div>

                    {/* Section 2: Image Card */}
                    <div className="scroll-item image-item">
                        <div className="image-card">
                            <img src={img1} alt="Project 1" />
                            <div className="card-overlay">
                                <h3>AI Innovation</h3>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Big Solid Text */}
                    <div className="scroll-item text-item">
                        <h2 className="solid-text">VISION</h2>
                    </div>

                    {/* Section 4: Image Card */}
                    <div className="scroll-item image-item">
                        <div className="image-card">
                            <img src={img2} alt="Project 2" />
                        </div>
                    </div>

                    {/* Section 5: "VINAY" Branding (replacing KPV) */}
                    <div className="scroll-item brand-item">
                        <h1 className="huge-text">VINAY</h1>
                    </div>

                    {/* Section 6: Image Card */}
                    <div className="scroll-item image-item">
                        <div className="image-card">
                            <img src={img3} alt="Project 3" />
                        </div>
                    </div>

                    {/* Section 7: Text */}
                    <div className="scroll-item text-item">
                        <h2 className="outline-text">CREATE</h2>
                    </div>

                    {/* Section 8: Image Card */}
                    <div className="scroll-item image-item">
                        <div className="image-card">
                            <img src={img5} alt="Project 5" />
                        </div>
                    </div>

                    {/* Section 9: Profile/Ending */}
                    <div className="scroll-item last-item">
                        <div className="profile-circle">
                            <img src={profileImg} alt="Vinay" />
                        </div>
                        <h3>Let's Build</h3>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default ScrollShowcase;
