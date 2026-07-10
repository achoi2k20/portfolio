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
            <div className="secuvy-writeup secuvy-writeup--inline secuvy-writeup--dark">
              <div className="secuvy-writeup-block secuvy-writeup-block--inline">
                <span className="secuvy-writeup-label">Overview</span>
                <p className="secuvy-section-body">
                  A single-page sales document designed to communicate Secuvy's value proposition to enterprise buyers. The brief introduces the problem, solution, and key outcomes in a structured, scannable layout — built for a sales or partnership context with Hammerspace.
                </p>
              </div>
              <div className="secuvy-writeup-block secuvy-writeup-block--inline">
                <span className="secuvy-writeup-label">Design decisions</span>
                <p className="secuvy-section-body">
                  The layout uses a clear two-column structure: a wider editorial column on the left for narrative content, and a tighter sidebar on the right for quick-reference information (target outcomes, audience, sectors, deployment). A dark navy header callout draws immediate attention to the "Target Outcomes" section. The bottom strip of three feature tiles (Autoclassification, Contextual Linkage, Trusted Data Plane) anchors the page with product proof points without disrupting the reading flow above.
                </p>
              </div>
              <div className="secuvy-writeup-block secuvy-writeup-block--inline">
                <span className="secuvy-writeup-label">What works</span>
                <p className="secuvy-section-body">
                  Strong visual hierarchy — the bold headline "Your AI Is Ingesting Unclassified Data." is provocative and specific. The sidebar isolates key buyer questions (Who's it for? What sectors? How do I deploy?) so decision-makers can scan without reading the full doc. The Secuvy brand blue is used sparingly to maintain professionalism.
                </p>
              </div>
            </div>
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
              <div className="secuvy-writeup secuvy-writeup--inline">
                <div className="secuvy-writeup-block secuvy-writeup-block--inline">
                  <span className="secuvy-writeup-label">Overview</span>
                  <p className="secuvy-section-body">
                    A full marketing homepage for an enterprise data security company. The site spans multiple distinct sections — hero, problem/solution, feature comparison, platform overview, CTA, and footer — designed to convert both technical and executive buyers visiting from different entry points.
                  </p>
                </div>
                <div className="secuvy-writeup-block secuvy-writeup-block--inline">
                  <span className="secuvy-writeup-label">Design decisions</span>
                  <p className="secuvy-section-body">
                    The hero leads with social proof (a podcast guest appearance) rather than a product screenshot — a deliberate credibility-first choice for an enterprise audience that is skeptical of vendor claims. A dark background with glowing blue accents signals a modern security product. The "Before Secuvy / With Secuvy" comparison table is one of the strongest UX decisions: it directly mirrors how buyers frame the problem internally ("what's our situation today vs. with this vendor?"). The four platform pillars are presented as equal-weight cards, avoiding hierarchy that would imply any one capability is more important.
                  </p>
                </div>
                <div className="secuvy-writeup-block secuvy-writeup-block--inline">
                  <span className="secuvy-writeup-label">What works</span>
                  <p className="secuvy-section-body">
                    The headline "Data Security Shouldn't Require a PhD in RegEx" is audience-savvy — it speaks directly to security practitioners frustrated by legacy tooling. The page structure moves from problem awareness, proof, solution, CTA in a logical narrative arc. The footer is comprehensive without being cluttered, giving enterprise buyers the product taxonomy they need to understand the platform's scope.
                  </p>
                </div>
              </div>
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
