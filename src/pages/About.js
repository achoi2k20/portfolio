import React from 'react'
import './pages.css'

export default function About() {
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
            <span className="banner-line">about</span>
            <span className="banner-line banner-line--italic">me.</span>
          </div>
          <p className="home-banner-sub">
            Visual designer with a focus on user experience — bridging aesthetics,
            research, and code to build things that feel considered.
          </p>
        </div>
      </section>

      {/* 02 — Bio */}
      <section className="home-work">
        <span className="home-sec-num home-sec-num--right">02</span>
        <div className="home-work-inner">
          <div className="home-banner-inner">
            <img src="/about.jpg" alt="Aidan Choi" className="cs-project-image cs-light-image" />
            <div>
              <div className="cs-bio-text">
                <p className="cs-section-body">
                  My name is Aidan Choi. I am a 22 year old visual designer with a focus on user experience. Growing up with my mom, who is a graphic designer, I always found portraying ideas visually to be the most effective way for me to understand. I would consume so much information from watching movies, TV shows, documentaries, and YouTube videos (video essays are a personal favorite). There was something fascinating about how visual elements could mesh to create an idea that could be received easily. I began video editing and taking art classes to learn more about composition and different mediums.
                </p>
                <p className="cs-section-body">
                  I decided to continue to explore this line of thinking by majoring in Integrated Design and Media at New York University Tandon School of Engineering. I decided to take a User Experience class, and I instantly developed an interest in the subject. It made me realize how often people can struggle with interacting with websites and programs because they are not designed for them. I began seeing these issues in my day to day life, and it was frustrating. I want to utilize the skills I developed in visual design to create better experiences for users.
                </p>
                <p className="cs-section-body">
                  I continue to learn about user experience by taking the Google Certificate course discussing User Experience. I was able to get a deeper understanding of the subject and create some projects. I hope to continue working on this skillset and create accessible projects for everyone.
                </p>
              </div>
              <div className="cs-meta">
                <div className="cs-meta-item">
                  <h4>Focus</h4>
                  <p>User Experience<br />Visual Design</p>
                </div>
                <div className="cs-meta-item">
                  <h4>Education</h4>
                  <p>NYU Tandon School of Engineering<br />Integrated Design &amp; Media</p>
                </div>
                <div className="cs-meta-item">
                  <h4>Currently</h4>
                  <p>Google UX Design Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Closing tagline */}
      <section className="home-tagline-section">
        <p className="home-tagline-text">
          always learning,<br />always building.
        </p>
      </section>
    </div>
  )
}
