import React from 'react'
import BandScene from '../components/BandScene'
import './pages.css'

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="fullscreen-container">
        <nav className="navbar home-navbar">
          <div className="nav-logo">
            <a href="/">
              <img src="/logo.png" alt="Logo" />
            </a>
          </div>
          <ul className="nav-links home-nav-links">
            <li><a href="/projects">PROJECTS <span className="nav-arrow">↗</span></a></li>
            <li><a href="/about">ABOUT <span className="nav-arrow">↗</span></a></li>
          </ul>
        </nav>
        <BandScene />
      </div>

      {/* Dark editorial banner */}
      <section className="home-banner">
        <span className="home-sec-num">01</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="banner-line">design that</span>
            <span className="banner-line">speaks for</span>
            <span className="banner-line banner-line--italic">itself.</span>
          </div>
          <p className="home-banner-sub">
            Crafting digital experiences that bridge aesthetics and function —
            from research and strategy to pixels and code.
          </p>
        </div>
      </section>

      {/* Work / Projects section */}
      <section className="home-work">
        <span className="home-sec-num home-sec-num--right">02</span>
        <div className="home-work-inner">
          <h2 className="home-work-title">work.</h2>
          <div className="home-work-grid">
            <div className="home-work-cat">
              <h3>UX &amp; Product Design</h3>
              <ul>
                <li><a href="/projects/globalgourmet">Global Gourmet</a></li>
                <li><a href="/projects/funtent">Funtent</a></li>
                <li><a href="/projects/ux4xr">UX4XR</a></li>
                <li><a href="/projects/escapi">escAPI</a></li>
              </ul>
            </div>
            <div className="home-work-cat">
              <h3>Development</h3>
              <ul>
                <li className="home-work-plain">Interactive 3D Experiences</li>
                <li className="home-work-plain">UI Component Systems</li>
                <li className="home-work-plain">React Applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual project showcase */}
      <section className="home-showcase">
        <span className="home-sec-num">03</span>
        <div className="home-showcase-inner">
          <a href="/projects/secuvy" className="home-showcase-link">
            <div className="home-showcase-card">
              <img src="/projects/secuvy_solutionbrief_p1.png" alt="Secuvy Solution Brief" />
              <div className="home-showcase-label">
                <span className="showcase-title">Secuvy Solution Brief</span>
                <span className="showcase-type">Document Design</span>
              </div>
            </div>
          </a>
          <a href="/projects/secuvy" className="home-showcase-link">
            <div className="home-showcase-card">
              <img src="/projects/website_draft1.png" alt="Secuvy Website Draft" />
              <div className="home-showcase-label">
                <span className="showcase-title">Secuvy Website</span>
                <span className="showcase-type">Web Design</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Closing tagline */}
      <section className="home-tagline-section">
        <p className="home-tagline-text">
          find beauty<br />in the details.
        </p>
      </section>
    </div>
  )
}
