import React from 'react'
import './pages.css'

export default function Funtent() {
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
            <span className="banner-line">Funtent</span>
            <span className="banner-line banner-line--italic">Case Study.</span>
          </div>
          <p className="home-banner-sub">
            For my user experience design class, I created an app for curated
            child-friendly content based on user research. I conducted user
            research and created a problem statement, then developed
            wireframes and prototypes for the product.
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
              <p>UX Designer</p>
            </div>
            <div className="cs-meta-item">
              <h4>Deliverables</h4>
              <p>Problem Statement<br />Wireframes<br />Prototype</p>
            </div>
            <div className="cs-meta-item">
              <h4>Focus</h4>
              <p>User Research<br />Parental Controls</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Mockup */}
      <section className="home-banner">
        <span className="home-sec-num">03</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="cs-cat-label">Product Design</span>
            <span className="banner-line">The</span>
            <span className="banner-line banner-line--italic">Mockup.</span>
            <p className="home-banner-sub cs-sub-gap">
              With all of the interviews and preliminary research done, I created a mockup after multiple prototypes. The prototype is functional, and meant to display the processes a user would go through on this app. Parents can add filters to content and approve/reject content that their child would like to watch. There is also a rating system where parents can rate the appropriateness of content.
            </p>
          </div>
          <img
            src="/projects/FUNTENT+Wireframe.png"
            alt="Funtent Wireframe Mockup"
            className="cs-project-image cs-dark-image"
          />
        </div>
      </section>

      {/* 04 — Closing tagline */}
      <section className="home-tagline-section">
        <p className="home-tagline-text">
          built for<br />curious minds.
        </p>
      </section>
    </div>
  )
}
