import React from 'react'
import './pages.css'

export default function Ux4xr() {
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
            <span className="banner-line">UX4XR</span>
            <span className="banner-line banner-line--italic">Floor Redesign.</span>
          </div>
          <p className="home-banner-sub">
            For my UX4XR course, me and a partner were tasked with redesigning
            the IDM floor at 370 Jay Street. We were told to use Unity and
            Blender to create a VR experience.
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
              <p>UX Researcher &amp; Designer</p>
            </div>
            <div className="cs-meta-item">
              <h4>Tools</h4>
              <p>Unity<br />Blender</p>
            </div>
            <div className="cs-meta-item">
              <h4>Focus</h4>
              <p>Spatial Design<br />User Interviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Project Overview */}
      <section className="home-banner">
        <span className="home-sec-num">03</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="cs-cat-label">Research</span>
            <span className="banner-line">Project</span>
            <span className="banner-line banner-line--italic">Overview.</span>
            <p className="home-banner-sub cs-sub-gap">
              We conducted several user interviews discussing what worked and what did not on the IDM floor. We found that desk layouts were not ideal, classrooms could be bigger, and there could be more common space.
            </p>
          </div>
          <img
            src="/projects/new_idm_floor_layout.png"
            alt="New IDM Floor Layout"
            className="cs-project-image cs-dark-image"
          />
        </div>
      </section>

      {/* 04 — Prototyping */}
      <section className="home-work">
        <span className="home-sec-num">04</span>
        <div className="home-work-inner">
          <div className="home-banner-inner">
            <video className="cs-project-video cs-light-image" controls>
              <source src="/projects/ux4xr_demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div>
              <span className="cs-cat-label cs-cat-label--light">Prototype</span>
              <h2 className="cs-section-heading">Proto<em>typing.</em></h2>
              <p className="cs-section-body">
                This is the prototype that we created of the space. We implemented what we learned from the user interviews into the classrooms and overall floor. We eliminated the rooms in the middle to free up space for more classroom area, as well as furnishing the hall to allow for more common space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Outcome */}
      <section className="home-work">
        <span className="home-sec-num home-sec-num--right">05</span>
        <div className="home-work-inner">
          <span className="cs-cat-label">Outcome</span>
          <h2 className="cs-section-heading">Out<em>come.</em></h2>
          <p className="cs-section-body">
            Once we finished our prototype, we had user feedback sessions, where we received notes on our progress. Some points they mentioned included focusing on adding tables for workspace outside of the classroom and shifting couches more toward the vending machine to better utilize the space.
          </p>
        </div>
      </section>

      {/* 06 — Closing tagline */}
      <section className="home-tagline-section">
        <p className="home-tagline-text">
          space shaped by<br />feedback.
        </p>
      </section>
    </div>
  )
}
