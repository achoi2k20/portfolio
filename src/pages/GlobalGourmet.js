import React from 'react'
import './pages.css'

export default function GlobalGourmet() {
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
            <span className="banner-line">Global Gourmet</span>
            <span className="banner-line banner-line--italic">Identity.</span>
          </div>
          <p className="home-banner-sub">
            Global Gourmet is an international food delivery service that was
            created as a branding project. As a part of an assignment, I was
            tasked with using the assets provided to contribute to the
            application of the project.
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
              <p>Motion &amp; Brand Designer</p>
            </div>
            <div className="cs-meta-item">
              <h4>Deliverables</h4>
              <p>Animated Lockup<br />Recipe Video</p>
            </div>
            <div className="cs-meta-item">
              <h4>Focus</h4>
              <p>Motion Design<br />Brand Application</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Animated Lockup */}
      <section className="home-banner">
        <span className="home-sec-num">03</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="cs-cat-label">Motion Design</span>
            <span className="banner-line">Animated</span>
            <span className="banner-line banner-line--italic">Lockup.</span>
            <p className="home-banner-sub cs-sub-gap">
              I was tasked with creating an animated lockup that could be utilized in the recipe video and the app that the other project members were developing. I started with creating a basic diagram of the motion I desired. Then, I created multiple drafts to refine the movement. I utilized animation principles to ensure that the timing of the lockup was smooth and satisfying.
            </p>
          </div>
          <img
            src="/projects/globalgourmet_recipemockup.png"
            alt="Global Gourmet Recipe Mockup"
            className="cs-project-image cs-dark-image"
          />
        </div>
      </section>

      {/* 04 — Recipe Video */}
      <section className="home-work">
        <span className="home-sec-num">04</span>
        <div className="home-work-inner">
          <div className="home-banner-inner">
            <video className="cs-project-video cs-light-image" controls>
              <source src="/projects/globalgourmet_recipevideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div>
              <span className="cs-cat-label cs-cat-label--light">Video Production</span>
              <h2 className="cs-section-heading">Recipe<br /><em>Video.</em></h2>
              <p className="cs-section-body">
                I created a demo recipe video that would accompany the recipe sheet. In order to properly create a template, I made a storyboard of the necessary points that need to be included in the video. I assembled B roll footage and put them in as place holders. I got a large spread of ingredient and moved the image to give the illusion of a moving camera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Closing tagline */}
      <section className="home-tagline-section">
        <p className="home-tagline-text">
          flavor meets<br />motion.
        </p>
      </section>
    </div>
  )
}
