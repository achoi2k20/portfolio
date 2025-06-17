import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

export default function Projects() {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <header>
        <h1>Projects</h1>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
        </nav>
      </header>

      <section style={{ maxWidth: 800, margin: '0 auto', textAlign: 'left' }}>
        <article style={{ marginBottom: 20 }}>
          <h2>Project 1: Awesome 3D Band</h2>
          <p>A cool interactive 3D band created with React Three Fiber and physics.</p>
          <a href="https://github.com/yourusername/3d-band" target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </article>

        <article style={{ marginBottom: 20 }}>
          <h2>Project 2: Another Project</h2>
          <p>Description of another project here.</p>
        </article>

        {/* Add more projects here */}
      </section>

      <footer style={{ marginTop: 60, fontSize: 14, color: '#666' }}>
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}
