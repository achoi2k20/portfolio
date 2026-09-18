import React from 'react'
import './pages.css'

export default function RoyalThaiSpa() {
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
            <span className="banner-line">Royal Thai Spa</span>
            <span className="banner-line banner-line--italic">Redesign.</span>
          </div>
          <p className="home-banner-sub">
            A cultural redesign concept for an existing San Francisco spa's
            website, built around Thai temple architecture and lacquerware
            color instead of the generic wellness-site template.
          </p>
          <p className="home-banner-sub cs-sub-gap">
            <em>Concept project — an unsolicited redesign of sfroyalthaispa.com for portfolio purposes, not a live client site.</em>
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
              <p>HTML &amp; CSS</p>
            </div>
            <div className="cs-meta-item">
              <h4>Focus</h4>
              <p>Cultural Branding<br />Visual Identity</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Palette & type */}
      <section className="home-banner">
        <span className="home-sec-num">03</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="cs-cat-label">Visual Identity</span>
            <span className="banner-line">A Palette</span>
            <span className="banner-line banner-line--italic">Rooted in Place.</span>
            <p className="home-banner-sub cs-sub-gap">
              The original site leaned on generic spa-industry stock imagery and a default template palette. This redesign pulls its colors directly from Thai temple materials — lacquer red, jade, and gold leaf, warmed by a jasmine-white ground — and pairs Pridi, a Thai-Latin serif, for display type with Sarabun for body copy, so Thai and English text share one typeface family instead of two mismatched systems.
            </p>
          </div>
          <img
            src="/projects/royalthai_hero.png"
            alt="Royal Thai Spa redesigned hero section with temple-arch frame"
            className="cs-project-image cs-dark-image"
          />
        </div>
      </section>

      {/* 04 — Temple architecture */}
      <section className="home-work">
        <span className="home-sec-num home-sec-num--right">04</span>
        <div className="home-work-inner">
          <div className="home-banner-inner">
            <img
              src="/projects/royalthai_services.png"
              alt="Service cards shaped like Thai temple chedi arches"
              className="cs-project-image cs-light-image"
            />
            <div>
              <span className="cs-cat-label cs-cat-label--light">Layout</span>
              <h2 className="cs-section-heading">Temple<br /><em>Architecture.</em></h2>
              <p className="cs-section-body">
                Service cards are shaped like a chedi's silhouette instead of sitting in plain rectangles, each topped with a hand-drawn line icon rather than a stock photo. Every service gets a bilingual label — the Thai name in gold above the English name — so the site reads as genuinely Thai rather than Thai-themed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Symbolism over stock photography */}
      <section className="home-banner">
        <span className="home-sec-num">05</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="cs-cat-label">Illustration</span>
            <span className="banner-line">Symbolism,</span>
            <span className="banner-line banner-line--italic">Not Stock Photos.</span>
            <p className="home-banner-sub cs-sub-gap">
              The About section swaps a generic interior photo for a custom lotus medallion — the lotus is a recurring symbol of purity and renewal in Thai culture, so it carries meaning a stock photo can't. The same gold linework reappears as thin ornamental dividers between sections, tying the page together as one continuous piece rather than a stack of unrelated blocks.
            </p>
          </div>
          <img
            src="/projects/royalthai_about.png"
            alt="Custom lotus medallion illustration in the about section"
            className="cs-project-image cs-dark-image"
          />
        </div>
      </section>

      {/* 06 — Custom map */}
      <section className="home-work">
        <span className="home-sec-num home-sec-num--right">06</span>
        <div className="home-work-inner">
          <div className="home-banner-inner">
            <img
              src="/projects/royalthai_map.png"
              alt="Illustrated location map styled to match the site's jade and gold palette"
              className="cs-project-image cs-light-image"
            />
            <div>
              <span className="cs-cat-label cs-cat-label--light">Detail</span>
              <h2 className="cs-section-heading">A Map<br /><em>Worth Framing.</em></h2>
              <p className="cs-section-body">
                Even the location finder gets the same treatment: an illustrated map in the site's jade and gold rather than a default embedded Google Maps frame, which would have broken the visual system at the one place most visitors check right before they book. Consistency was the whole point — no section was left as an unstyled default.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Closing tagline */}
      <section className="home-tagline-section">
        <p className="home-tagline-text">
          renew, recover,<br />relax.
        </p>
      </section>
    </div>
  )
}
