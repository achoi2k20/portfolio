import React from 'react'
import './pages.css'


export default function Projects() {
  return (
    <div className="projects-container">
      <nav className="navbar">
        <div className="nav-logo">
            <a href="/">
                <img src="/logo.png" alt="Logo" />
            </a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      <div className="projects-text">
        <h1>Projects</h1>
        <p>Here are some of the projects I’ve worked on.</p>

        <div className="project-list">
          <div className="project-item">
            <h2>🎨 3D Portfolio</h2>
            <p>A fully interactive 3D portfolio with physics-based card drag and drop.</p>
          </div>
          <div className="project-item">
            <h2>📲 UI Component Library</h2>
            <p>Reusable React UI components for design systems and apps.</p>
          </div>
          <div className="project-item">
            <h2>🧠 AI Chat Assistant</h2>
            <p>A GPT-powered assistant integrated with custom APIs and chat history.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
