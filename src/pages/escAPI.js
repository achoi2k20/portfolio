import React from 'react'
import './pages.css'

export default function EscAPI() {
  return (
    <div className="home-wrapper">
      <nav className="navbar cs-nav">
        <div className="nav-logo">
          <a href="/"><img src="/logo.png" alt="Logo" /></a>
        </div>
        <ul className="nav-links home-nav-links">
          <li><a href="/projects">PROJECTS <span className="nav-arrow">↗</span></a></li>
          <li><a href="/about">ABOUT <span className="nav-arrow">↗</span></a></li>
        </ul>
      </nav>

      {/* 01 — Hero */}
      <section className="home-banner cs-hero">
        <span className="home-sec-num">01</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="banner-line">escAPI</span>
            <span className="banner-line banner-line--italic">Escape Room.</span>
          </div>
          <p className="home-banner-sub">
            A first-person escape room game built with a Three.js scene
            integrated into React. It features interactive 3D models,
            animations, camera controls, and object collision detection. The
            environment includes items like a suitcase, bookshelf, desk,
            book, and door, which users can interact with to solve puzzles.
            These puzzles reveal a passcode that unlocks the door, allowing
            the player to escape.
          </p>
        </div>
      </section>

      {/* 02 — Overview */}
      <section className="home-work">
        <span className="home-sec-num home-sec-num--right">02</span>
        <div className="home-work-inner">
          <h2 className="home-work-title">overview.</h2>
          <div className="cs-meta">
            <div className="cs-meta-item">
              <h4>Role</h4>
              <p>Full-Stack Developer</p>
            </div>
            <div className="cs-meta-item">
              <h4>Tools</h4>
              <p>Three.js<br />React<br />SQL</p>
            </div>
            <div className="cs-meta-item">
              <h4>Focus</h4>
              <p>3D Interaction<br />Game Logic</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Project Overview */}
      <section className="home-banner">
        <span className="home-sec-num">03</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="cs-cat-label">Development</span>
            <span className="banner-line">Project</span>
            <span className="banner-line banner-line--italic">Overview.</span>
            <p className="home-banner-sub cs-sub-gap">
              We used SQL to create logins, leaderboard data, and save progress. On the website, users can input information to create an account, and passwords are hash encrypted.
            </p>
          </div>
          <img
            src="/projects/room1.png"
            alt="escAPI Room One"
            className="cs-project-image cs-dark-image"
          />
        </div>
      </section>

      {/* 04 — Challenges & Solutions */}
      <section className="home-work">
        <span className="home-sec-num">04</span>
        <div className="home-work-inner">
          <div className="home-banner-inner">
            <img
              src="/projects/room2.png"
              alt="escAPI Sliding Tile Puzzle"
              className="cs-project-image cs-light-image"
            />
            <div>
              <span className="cs-cat-label cs-cat-label--light">Puzzle Design</span>
              <h2 className="cs-section-heading">Challenges<br /><em>&amp; Solutions.</em></h2>
              <p className="cs-section-body">
                This puzzle is a sliding tile puzzle. The image of the number is randomized and users are meant to slide the tiles to form the image of the number, which can be used to unlock the door at the end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Closing tagline */}
      <section className="home-tagline-section">
        <p className="home-tagline-text">
          puzzles solved,<br />one clue at a time.
        </p>
      </section>
    </div>
  )
}
