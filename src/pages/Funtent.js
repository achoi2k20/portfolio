import React from 'react'
import './pages.css'

export default function Funtent() {
  return (
    <>
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
      <div className="case-study">
        <header className="case-header">
          <h1>Case Study: Funtent</h1>
          <p>For my user experience design class, I created an app for curated child-friendly content based on user research. I conducted user research and created a problem statement, then developed wireframes and prototypes for the product.</p>
        </header>

        <section className="case-section">
          <div className="case-text">
            <h2>Mockup</h2>
            <p>
              With all of the interviews and preliminary research done, I created a mockup after multiple prototypes. The prototype is functional, and meant to display the processes a user would go through on this app. Parents can add filters to content and approve/reject content that their child would like to watch. There is also a rating system where parents can rate the appropriateness of content.
            </p>
          </div>
          <img src="/projects/FUNTENT+Wireframe.png" alt="Case Study Overview" className="case-image" />
        </section>

      
      </div>
    </>
  )
}