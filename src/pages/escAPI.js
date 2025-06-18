import React from 'react'
import './pages.css'

export default function EscAPI() {
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
          <h1>Case Study: escAPI</h1>
          <p>This project is a first-person escape room game built with a Three.js scene integrated into React. It features interactive 3D models, animations, camera controls, and object collision detection. The environment includes items like a suitcase, bookshelf, desk, book, and door, which users can interact with to solve puzzles. These puzzles reveal a passcode that unlocks the door, allowing the player to escape.</p>
        </header>

        <section className="case-section">
          <div className="case-text">
            <h2>Project Overview</h2>
            <p>
              We used SQL to create logins, leaderboard data, and save progress. On the website, users can input information to create an account, and passwords are hash encrypted.
            </p>
          </div>
          <img src="/projects/room1.png" alt="Case Study Overview" className="case-image" />
        </section>

        <section className="case-section reverse">
          <div className="case-text">
            <h2>Challenges & Solutions</h2>
            <p>
              This puzzle is a sliding tile puzzle. The image of the number is randomized and users are meant to slide the tiles to form the image of the number, which can be used to unlock the door at the end. 
            </p>
          </div>
          <img src="/projects/room2.png" alt="Case Study Overview" className="case-image" />
        </section>

        
      </div>
    </>
  )
}