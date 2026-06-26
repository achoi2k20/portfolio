import React from 'react'
import './pages.css'

export default function Secuvy() {
  return (
    <div className="home-wrapper">
      <nav className="navbar secuvy-nav">
        <div className="nav-logo">
          <a href="/"><img src="/logo.png" alt="Logo" /></a>
        </div>
        <ul className="nav-links home-nav-links">
          <li><a href="/projects">PROJECTS <span className="nav-arrow">↗</span></a></li>
          <li><a href="/about">ABOUT <span className="nav-arrow">↗</span></a></li>
        </ul>
      </nav>

      {/* 01 — Hero */}
      <section className="home-banner secuvy-hero">
        <span className="home-sec-num">01</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="banner-line">Secuvy</span>
            <span className="banner-line banner-line--italic">Case Study.</span>
          </div>
          <p className="home-banner-sub">
            Visual design for Secuvy — a data intelligence platform specializing in privacy,
            compliance, and AI-powered data discovery. Deliverables span brand collateral
            and web design concepts.
          </p>
        </div>
      </section>

      {/* 02 — Overview */}
      <section className="home-work">
        <span className="home-sec-num home-sec-num--right">02</span>
        <div className="home-work-inner">
          <h2 className="home-work-title">overview.</h2>
          <div className="secuvy-meta">
            <div className="secuvy-meta-item">
              <h4>Role</h4>
              <p>Visual Designer</p>
            </div>
            <div className="secuvy-meta-item">
              <h4>Deliverables</h4>
              <p>Solution Brief<br />Website Design</p>
            </div>
            <div className="secuvy-meta-item">
              <h4>Focus</h4>
              <p>Document Design<br />Web Design<br />Brand Collateral</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Solution Brief */}
      <section className="home-banner">
        <span className="home-sec-num">03</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="secuvy-cat-label">Document Design</span>
            <span className="banner-line">Solution</span>
            <span className="banner-line banner-line--italic">Brief.</span>
            <p className="home-banner-sub secuvy-sub-gap">
              A polished sales and marketing collateral piece designed to communicate
              Secuvy's core value proposition. The layout balances technical credibility
              with visual clarity — pairing structured content with intentional whitespace
              and a strong typographic hierarchy.
            </p>
          </div>
          <img
            src="/projects/secuvy_solutionbrief_p1.png"
            alt="Secuvy Solution Brief"
            className="secuvy-project-image secuvy-dark-image"
          />
        </div>
      </section>

      {/* 04 — Website Design */}
      <section className="home-work">
        <span className="home-sec-num">04</span>
        <div className="home-work-inner">
          <div className="home-banner-inner">
            <img
              src="/projects/website_draft1.png"
              alt="Secuvy Website Design"
              className="secuvy-project-image secuvy-light-image"
            />
            <div>
              <span className="secuvy-cat-label secuvy-cat-label--light">Web Design</span>
              <h2 className="secuvy-section-heading">Website<br /><em>Design.</em></h2>
              <p className="secuvy-section-body">
                A website concept built to reflect Secuvy's brand as a sophisticated and
                trustworthy data platform. The design emphasizes clean layout, strong
                typographic hierarchy, and purposeful use of negative space to let the
                product story breathe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Closing tagline */}
      <section className="home-tagline-section">
        <p className="home-tagline-text">
          designed with<br />intention.
        </p>
      </section>
    </div>
  )
}
