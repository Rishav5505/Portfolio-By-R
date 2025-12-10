import React, { useEffect, useState } from 'react';

export default function GitHub() {
  const [repos, setRepos] = useState([]);
  const [totalRepos, setTotalRepos] = useState('--');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'Vinay1727';

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    setLoading(true);
    setError(null);

    try {
      // Fetch user data for total repos count
      const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
      if (!userResponse.ok) throw new Error('User fetch failed');

      const userData = await userResponse.json();
      setTotalRepos(userData.public_repos || '0');

      // Fetch repositories sorted by updated date (most recent first)
      const reposResponse = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
      );
      if (!reposResponse.ok) throw new Error('Repos fetch failed');

      const reposData = await reposResponse.json();

      // Filter out forks and sort by stars and updated date
      const filteredRepos = reposData
        .filter(repo => !repo.fork) // Remove forked repos
        .sort((a, b) => {
          // Sort by stars first, then by updated date
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at) - new Date(a.updated_at);
        })
        .slice(0, 6); // Get top 6 repos

      setRepos(filteredRepos);
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      setError('Unable to load repositories. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Get language color based on programming language
  const getLanguageColor = (lang) => {
    const colors = {
      JavaScript: '#f1e05a',
      Python: '#3572A5',
      Java: '#b07219',
      HTML: '#e34c26',
      CSS: '#563d7c',
      TypeScript: '#2b7489',
      'Jupyter Notebook': '#DA5B0B',
      C: '#555555',
      'C++': '#f34b7d',
      Go: '#00ADD8',
      Rust: '#dea584',
      PHP: '#4F5D95',
      Ruby: '#701516',
      Swift: '#ffac45',
    };
    return colors[lang] || '#8b949e';
  };

  return (
    <section id="github" className="section github">
      <header className="section-header">
        <h2>GITHUB REPOSITORIES</h2>
        <p>Explore my open-source projects and code contributions on GitHub.</p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
          Total Public Repositories: <strong>{totalRepos}</strong>
        </p>
      </header>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
          <div className="loading-spinner" style={{
            display: 'inline-block',
            width: '40px',
            height: '40px',
            border: '4px solid var(--border-color)',
            borderTop: '4px solid var(--accent)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{ marginTop: '16px' }}>Loading repositories...</p>
        </div>
      ) : error ? (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
          <p>❌ {error}</p>
          <button
            onClick={fetchGitHubRepos}
            className="button primary"
            style={{ marginTop: '16px' }}
          >
            Retry
          </button>
        </div>
      ) : (
        <>
          <div className="github-grid">
            {repos.map((repo) => (
              <article key={repo.id} className="github-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0 }}>{repo.name}</h3>
                  {repo.stargazers_count > 0 && (
                    <span style={{
                      fontSize: '0.9rem',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      ⭐ {repo.stargazers_count}
                    </span>
                  )}
                </div>

                {repo.language && (
                  <p className="github-lang" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: getLanguageColor(repo.language),
                      display: 'inline-block'
                    }}></span>
                    {repo.language}
                  </p>
                )}

                <p className="github-desc">
                  {repo.description || 'No description available'}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '12px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  marginTop: '12px',
                  marginBottom: '12px'
                }}>
                  {repo.forks_count > 0 && (
                    <span>🔀 {repo.forks_count} forks</span>
                  )}
                  <span>📅 Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button secondary"
                >
                  View on GitHub
                </a>
              </article>
            ))}
          </div>

          <div className="github-cta">
            <p>Want to see all my projects? Visit my GitHub profile for more repositories and contributions.</p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button primary"
            >
              View Full GitHub Profile ({totalRepos} repos)
            </a>
          </div>
        </>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
