import React from 'react'
import './pages.css'

export default function GlobalGourmet() {
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
          <h1>Case Study: Global Gourmet</h1>
          <p>Exploring the design, challenges, and solutions behind building an immersive web portfolio.</p>
        </header>

        <section className="case-section">
          <div className="case-text">
            <h2>Project Overview</h2>
            <p>
              This project aimed to create a visually striking, interactive portfolio using React Three Fiber and Rapier physics. The goal was to blend storytelling with 3D interaction to leave a lasting impression on users.
            </p>
          </div>
          <img src="/projects/globalgourmet_recipemockup.png" alt="Case Study Overview" className="case-image" />
        </section>

        <section className="case-section reverse">
          <div className="case-text">
            <h2>Challenges & Solutions</h2>
            <p>
              One major challenge was ensuring physics interactions remained smooth across screen sizes. We used responsive layout techniques and optimized physics calculations to solve this. Texture mapping and lighting were tuned for realism without heavy performance cost.
            </p>
          </div>
          <video className="case-video" controls>
            <source src="/projects/globalgourmet_recipevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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