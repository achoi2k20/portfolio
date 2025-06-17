import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

export default function About() {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <header>
        <h1>About Me</h1>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/projects" style={{ margin: '0 10px' }}>Projects</Link>
        </nav>
      </header>

      <section style={{ maxWidth: 800, margin: '0 auto', textAlign: 'left' }}>
        <p>
          Hello! I am Your Name, a developer passionate about 3D web experiences using React and Three.js.
          I love building interactive animations and exploring physics simulations in the browser.
        </p>
        <p>
          Contact me at <a href="mailto:youremail@example.com">youremail@example.com</a>.
        </p>
      </section>

      <footer style={{ marginTop: 60, fontSize: 14, color: '#666' }}>
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}
