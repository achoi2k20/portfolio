import React from 'react'
import './pages.css'

export default function Sift() {
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
            <span className="banner-line">Sift</span>
            <span className="banner-line banner-line--italic">Case Study.</span>
          </div>
          <p className="home-banner-sub">
            A mobile app concept that finds the companies holding your
            personal data and helps you ask them, in bulk, to delete it.
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
              <p>Research, UX, UI</p>
            </div>
            <div className="cs-meta-item">
              <h4>Timeline</h4>
              <p>8 Weeks, Solo</p>
            </div>
            <div className="cs-meta-item">
              <h4>Tools</h4>
              <p>Figma<br />FigJam</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Problem */}
      <section className="home-banner">
        <span className="home-sec-num">03</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="cs-cat-label">Research</span>
            <span className="banner-line">The</span>
            <span className="banner-line banner-line--italic">Problem.</span>
            <p className="home-banner-sub cs-sub-gap">
              Most people can legally ask companies to delete their data, and almost none do. They can't remember every service they signed up for, the request forms are buried, and they never find out whether a request worked. Sift builds the list for you, sorts it by what you still use, sends requests in bulk, and tracks every reply.
            </p>
            <p className="home-banner-sub cs-sub-gap">
              <em>Concept project — the research figures, quotes, and test results throughout this case study are illustrative placeholders for portfolio purposes.</em>
            </p>
          </div>
          <img
            src="/projects/sift_hero.png"
            alt="Sift landing screen with a data footprint visualization"
            className="cs-project-image cs-dark-image"
          />
        </div>
      </section>

      {/* 04 — Barriers */}
      <section className="home-work">
        <span className="home-sec-num home-sec-num--right">04</span>
        <div className="home-work-inner">
          <span className="cs-cat-label">Findings</span>
          <h2 className="cs-section-heading">Three Barriers<br /><em>Kept Coming Up.</em></h2>
          <p className="cs-section-body">
            I interviewed 8 people and surveyed 52 about how they handle their personal data online. The same three blockers surfaced again and again:
          </p>
          <div className="cs-meta">
            <div className="cs-meta-item">
              <h4>Don't Know Where to Start</h4>
              <p>6 of 8 couldn't name more than five companies that hold their data.</p>
            </div>
            <div className="cs-meta-item">
              <h4>Scared to Break Something</h4>
              <p>Deleting the wrong account can mean losing history or a shared login, so people avoid touching any of it.</p>
            </div>
            <div className="cs-meta-item">
              <h4>Sending It Feels Pointless</h4>
              <p>7 of 8 wouldn't know whether a request had worked. 41 of 52 had never sent one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Design */}
      <section className="home-banner">
        <span className="home-sec-num">05</span>
        <div className="home-banner-inner">
          <div className="home-banner-text">
            <span className="cs-cat-label">Design</span>
            <span className="banner-line">Look, Choose,</span>
            <span className="banner-line banner-line--italic">Follow Through.</span>
            <p className="home-banner-sub cs-sub-gap">
              I tested three ways to present a long list of companies. Grouping by the person's own behavior — still using, not used in a year, never used — helped people decide fastest and felt safest. I also renamed the primary action "Ask to delete," since companies decide when and how to comply, not the person requesting it. Each company's detail screen states what you'd lose before you commit, and every sent request gets a visible status and a response deadline.
            </p>
          </div>
          <img
            src="/projects/sift_phones.png"
            alt="Sift footprint, company detail, and request timeline screens"
            className="cs-project-image cs-dark-image"
          />
        </div>
      </section>

      {/* 06 — Testing */}
      <section className="home-work">
        <span className="home-sec-num home-sec-num--right">06</span>
        <div className="home-work-inner">
          <span className="cs-cat-label">Validation</span>
          <h2 className="cs-section-heading">What Testing<br /><em>Changed.</em></h2>
          <p className="cs-section-body">
            I ran two rounds of moderated usability tests with five people each. Task success rose from 60% to 94%, and median time to send a first request fell from 4:10 to 1:25.
          </p>
          <div className="cs-writeup cs-writeup--inline">
            <div className="cs-writeup-block cs-writeup-block--inline">
              <span className="cs-writeup-label">Saw</span>
              <p className="cs-section-body">
                Participants hesitated at "Delete," unsure whether it was immediate or permanent.
              </p>
            </div>
            <div className="cs-writeup-block cs-writeup-block--inline">
              <span className="cs-writeup-label">Changed</span>
              <p className="cs-section-body">
                Renamed it "Ask to delete" and added a "what happens next" note before the request sends.
              </p>
            </div>
            <div className="cs-writeup-block cs-writeup-block--inline">
              <span className="cs-writeup-label">Saw</span>
              <p className="cs-section-body">
                Some worried about removing an account they still needed.
              </p>
            </div>
            <div className="cs-writeup-block cs-writeup-block--inline">
              <span className="cs-writeup-label">Changed</span>
              <p className="cs-section-body">
                Recently used accounts default to "Keep" instead of "Remove."
              </p>
            </div>
            <div className="cs-writeup-block cs-writeup-block--inline">
              <span className="cs-writeup-label">Saw</span>
              <p className="cs-section-body">
                Nobody could tell where a sent request stood.
              </p>
            </div>
            <div className="cs-writeup-block cs-writeup-block--inline">
              <span className="cs-writeup-label">Changed</span>
              <p className="cs-section-body">
                Added a status timeline with a response deadline for every request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Next steps */}
      <section className="home-work">
        <span className="home-sec-num home-sec-num--right">07</span>
        <div className="home-work-inner">
          <span className="cs-cat-label">Reflection</span>
          <h2 className="cs-section-heading">What I'd<br /><em>Do Next.</em></h2>
          <p className="cs-section-body">
            Grouping by the person's own behavior made the biggest difference — it turned an overwhelming inventory into a short set of decisions. Next I'd test with people who don't yet care about privacy, and design a clear next step for companies that never reply.
          </p>
        </div>
      </section>

      {/* 08 — Closing tagline */}
      <section className="home-tagline-section">
        <p className="home-tagline-text">
          your data,<br />your call.
        </p>
      </section>
    </div>
  )
}
