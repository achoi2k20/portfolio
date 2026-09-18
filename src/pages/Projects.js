import React from 'react'
import './pages.css'
import { Link } from 'react-router-dom'

export default function Projects() {
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
            <span className="banner-line">selected</span>
            <span className="banner-line banner-line--italic">work.</span>
          </div>
          <p className="home-banner-sub">
            A collection of UX, product, and visual design projects — from
            research-driven prototypes to branded digital experiences.
          </p>
        </div>
      </section>

      {/* 02 — Project grid */}
      <section className="home-work">
        <span className="home-sec-num home-sec-num--right">02</span>
        <div className="home-work-inner">
          <h2 className="home-work-title">projects.</h2>
          <div className="projects-grid">
            <Link to="/projects/royalthaispa" className="projects-card-link">
              <div className="projects-card">
                <img src="/projects/royalthai_hero.png" alt="Royal Thai Spa" className="projects-card-media" />
                <div className="projects-card-label">
                  <span className="projects-card-title">Royal Thai Spa</span>
                  <span className="projects-card-type">Web Design</span>
                </div>
              </div>
            </Link>

            <Link to="/projects/sift" className="projects-card-link">
              <div className="projects-card">
                <img src="/projects/sift_hero.png" alt="Sift" className="projects-card-media" />
                <div className="projects-card-label">
                  <span className="projects-card-title">Sift</span>
                  <span className="projects-card-type">Product &amp; UX Design</span>
                </div>
              </div>
            </Link>

            <Link to="/projects/keoni" className="projects-card-link">
              <div className="projects-card">
                <img src="/projects/keoni_hero.png" alt="Keoni Paoner" className="projects-card-media" />
                <div className="projects-card-label">
                  <span className="projects-card-title">Keoni Paoner</span>
                  <span className="projects-card-type">Web Design</span>
                </div>
              </div>
            </Link>

            <Link to="/projects/ux4xr" className="projects-card-link">
              <div className="projects-card">
                <video className="projects-card-media" src="/projects/ux4xr_demo.mp4" autoPlay muted loop playsInline />
                <div className="projects-card-label">
                  <span className="projects-card-title">UX4XR IDM Floor Redesign</span>
                  <span className="projects-card-type">UX Research &amp; Design</span>
                </div>
              </div>
            </Link>

            <Link to="/projects/funtent" className="projects-card-link">
              <div className="projects-card">
                <img src="/projects/funtentmockup.png" alt="Funtent" className="projects-card-media" />
                <div className="projects-card-label">
                  <span className="projects-card-title">Funtent</span>
                  <span className="projects-card-type">UX Design</span>
                </div>
              </div>
            </Link>

            <Link to="/projects/globalgourmet" className="projects-card-link">
              <div className="projects-card">
                <video className="projects-card-media" src="/projects/globalgourmet_animatedlockupfinal.mp4" autoPlay muted loop playsInline />
                <div className="projects-card-label">
                  <span className="projects-card-title">Global Gourmet Identity</span>
                  <span className="projects-card-type">Brand &amp; Motion</span>
                </div>
              </div>
            </Link>

            <Link to="/projects/escapi" className="projects-card-link">
              <div className="projects-card">
                <img src="/projects/room1.png" alt="escAPI" className="projects-card-media" />
                <div className="projects-card-label">
                  <span className="projects-card-title">escAPI</span>
                  <span className="projects-card-type">Development</span>
                </div>
              </div>
            </Link>

            <div className="projects-card">
              <img src="/projects/twitchmockup.png" alt="Twitch Mobile Redesign" className="projects-card-media" />
              <div className="projects-card-label">
                <span className="projects-card-title">Twitch Mobile Redesign</span>
                <span className="projects-card-type">UI Redesign</span>
              </div>
            </div>

            <div className="projects-card">
              <img src="/projects/youtubemockup.png" alt="Youtube Live Redesign" className="projects-card-media" />
              <div className="projects-card-label">
                <span className="projects-card-title">Youtube Live Redesign</span>
                <span className="projects-card-type">UI Redesign</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Closing tagline */}
      <section className="home-tagline-section">
        <p className="home-tagline-text">
          let's build<br />something great.
        </p>
      </section>
    </div>
  )
}
