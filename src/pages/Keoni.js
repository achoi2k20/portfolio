import React from 'react'
import './pages.css'

export default function Keoni() {
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
            <span className="banner-line">Keoni Paoner</span>
            <span className="banner-line banner-line--italic">Case Study.</span>
          </div>
          <p className="home-banner-sub">
            A portfolio site built in Framer for a friend working as a
            full-time UGC creator and social media strategist — designed to
            pitch brands on his creator-first approach to sponsored content.
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
              <p>Web Designer</p>
            </div>
            <div className="cs-meta-item">
              <h4>Tools</h4>
              <p>Framer</p>
            </div>
            <div className="cs-meta-item">
              <h4>Focus</h4>
              <p>Personal Branding<br />Portfolio Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Hero design */}
      <section className="home-banner">
        <span className="home-sec-num">03</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="cs-cat-label">Web Design</span>
            <span className="banner-line">Creator</span>
            <span className="banner-line banner-line--italic">First.</span>
            <p className="home-banner-sub cs-sub-gap">
              The landing page leads with a bold, oversized name treatment and a candid behind-the-camera photo rather than a polished headshot — a deliberate choice to sell his hands-on, creator-first identity before anything else. A single warm yellow accent shape carries through the rest of the page, and two clear calls to action ("Work with me" and "View work") split the audience between brands ready to hire him and visitors browsing his portfolio.
            </p>
          </div>
          <img
            src="/projects/keoni_hero.png"
            alt="Keoni Paoner portfolio hero section"
            className="cs-project-image cs-dark-image"
          />
        </div>
      </section>

      {/* 04 — Social proof */}
      <section className="home-work">
        <span className="home-sec-num">04</span>
        <div className="home-work-inner">
          <div className="home-banner-inner">
            <img
              src="/projects/keoni_brands.png"
              alt="Keoni Paoner stats and brand logo grid"
              className="cs-project-image cs-light-image"
            />
            <div>
              <span className="cs-cat-label cs-cat-label--light">Social Proof</span>
              <h2 className="cs-section-heading">Built on<br /><em>Credibility.</em></h2>
              <p className="cs-section-body">
                Directly below the fold, a stat bar (500M+ total views, 1.1M+ followers, 6 years as a full-time creator) backs up the pitch with numbers before a single word of copy is read. The brand logo grid that follows — ASUS, Corsair, Razer, Pokémon, and a dozen others — reuses the same yellow-and-black system as the hero, so the credibility section never feels bolted on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Case study module */}
      <section className="home-banner">
        <span className="home-sec-num">05</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="cs-cat-label">Portfolio</span>
            <span className="banner-line">Filterable</span>
            <span className="banner-line banner-line--italic">Projects.</span>
            <p className="home-banner-sub cs-sub-gap">
              The Projects section is built as a single reusable module rather than a static grid — tabs let a visitor filter by UGC Videos, Organic Content, or Paid Social, and each entry pairs a short write-up with an embedded video reel, starting with his NZXT campaign. That structure means he can drop in new brand work without needing a new page built for every project.
            </p>
          </div>
          <img
            src="/projects/keoni_projects.png"
            alt="Keoni Paoner filterable projects section featuring NZXT case study"
            className="cs-project-image cs-dark-image"
          />
        </div>
      </section>

      {/* 06 — Closing tagline */}
      <section className="home-tagline-section">
        <p className="home-tagline-text">
          built to be<br />amplified.
        </p>
      </section>
    </div>
  )
}
