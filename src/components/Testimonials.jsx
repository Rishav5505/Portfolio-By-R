import React, { useEffect, useState } from 'react';

export default function Testimonials() {
  const [totalSolved, setTotalSolved] = useState('--');
  const [easySolved, setEasySolved] = useState('--');
  const [mediumSolved, setMediumSolved] = useState('--');
  const [hardSolved, setHardSolved] = useState('--');
  const [progressPercent, setProgressPercent] = useState(0);

  const LEETCODE_USERNAME = 'rishavkumar';

  useEffect(() => {
    fetchLeetCodeStats();
  }, []);

  const fetchLeetCodeStats = async () => {
    try {
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      setTotalSolved(data.totalSolved || '0');
      setEasySolved(data.easySolved || '0');
      setMediumSolved(data.mediumSolved || '0');
      setHardSolved(data.hardSolved || '0');

      const totalProblems = 3300;
      const percent = Math.min((data.totalSolved / totalProblems) * 100, 100);
      setProgressPercent(percent);
    } catch (error) {
      console.error('Error fetching LeetCode stats:', error);
    }
  };

  return (
    <section id="testimonials" className="section testimonials">
      <header className="section-header">
        <h2>TESTIMONIALS & STATS</h2>
      </header>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p className="quote">
            "Rishav quickly understood our requirements and translated them into a working prototype with clean code and clear documentation."
          </p>
          <p className="author">— Mentor, University Project</p>
        </div>

        <div className="testimonial-card">
          <p className="quote">
            "His ability to architect complex MERN systems while keeping the frontend highly performant and intuitive is impressive."
          </p>
          <p className="author">— Internship Supervisor</p>
        </div>

        {/* GitHub Stats Box */}
        <div className="achievement-card github-stats-card">
          <div className="achievement-header">
            <h3 className="achievement-title">GitHub Stats</h3>
            <a href="https://github.com/Rishav5505" target="_blank" rel="noopener noreferrer" className="achievement-link">
              View Profile →
            </a>
          </div>
          <div className="github-stats-content">
            <div className="stat-box">
              <span className="stat-label">Total Repos</span>
              <span className="stat-value" id="totalRepos">--</span>
            </div>
            <div className="github-recent">
              <p className="progress-label">📌 Recent Project</p>
              <a id="recentProject" href="#" target="_blank" rel="noopener noreferrer" className="recent-project-link">
                Loading...
              </a>
            </div>
          </div>
        </div>

        {/* LeetCode Badge */}
        <div className="achievement-card leetcode-card">
          <div className="achievement-header">
            <h3 className="achievement-title">LeetCode</h3>
            <a href={`https://leetcode.com/u/${LEETCODE_USERNAME}`} target="_blank" rel="noopener noreferrer" className="achievement-link">
              View Profile →
            </a>
          </div>

          <div id="leetcodeStats" className="leetcode-stats">
            <div className="stat-box">
              <span className="stat-label">Total Solved</span>
              <span className="stat-value">{totalSolved}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Easy</span>
              <span className="stat-value easy">{easySolved}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Medium</span>
              <span className="stat-value medium">{mediumSolved}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Hard</span>
              <span className="stat-value hard">{hardSolved}</span>
            </div>
          </div>

          <div className="daily-progress">
            <p className="progress-label">📅 Daily Progress Streak</p>
            <div className="progress-bar">
              <div id="progressBar" className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <p id="streakInfo" className="streak-info">{totalSolved} problems solved • {progressPercent.toFixed(1)}% progress</p>
          </div>
        </div>
      </div>
    </section>
  );
}
