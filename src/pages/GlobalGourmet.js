import React from 'react'
import './pages.css'

export default function GlobalGourmet() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
            <a href="/">
                <img src="/logo.png" alt="Logo" />
            </a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <div className="case-study">
        <header className="case-header">
          <h1>Case Study: Global Gourmet Identity Application</h1>
          <p>Global Gourmet is an international food delivery service that was created as a branding project. As a part of an assignment, I was tasked with using the assets provided to contribute to the application of the project.</p>
        </header>

        <section className="case-section">
          <div className="case-text">
            <h2>Animated Lockup</h2>
            <p>
              I was tasked with creating an animated lockup that could be utilized in the recipe video and the app that the other project members were developing. I started with creating a basic diagram of the motion I desired. Then, I created multiple drafts to refine the movement. I utilized animation principles to ensure that the timing of the lockup was smooth and satisfying.
            </p>
          </div>
          <img src="/projects/globalgourmet_recipemockup.png" alt="Case Study Overview" className="case-image" />
        </section>

        <section className="case-section reverse">
          <div className="case-text">
            <h2>Recipe Video</h2>
            <p>
              I created a demo recipe video that would accompany the recipe sheet. In order to properly create a template, I made a storyboard of the necessary points that need to be included in the video. I assembled B roll footage and put them in as place holders. I got a large spread of ingredient and moved the image to give the illusion of a moving camera.
            </p>
          </div>
          <video className="case-video" controls>
            <source src="/projects/globalgourmet_recipevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
    </>
  )
}