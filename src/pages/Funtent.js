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
          <p>Exploring the design, challenges, and solutions behind building an immersive web portfolio.</p>
        </header>

        <section className="case-section">
          <div className="case-text">
            <h2>Project Overview</h2>
            <p>
              This project aimed to create a visually striking, interactive portfolio using React Three Fiber and Rapier physics. The goal was to blend storytelling with 3D interaction to leave a lasting impression on users.
            </p>
          </div>
          <img src="/projects/FUNTENT+Wireframe.png" alt="Case Study Overview" className="case-image" />
        </section>

        <section className="case-section">
          <div className="case-text">
            <h2>Outcome</h2>
            <p>
              The final site performs well across devices, offers unique visual interactions, and has received strong feedback from users and employers. It stands as a testament to modern web development combining design and engineering.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}