import React from 'react'
import './pages.css'

export default function Ux4xr() {
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
          <h1>Case Study: UX4XR IDM Floor Redesign</h1>
          <p>For my UX4XR course,  me and a partner were tasked with redesigning the IDM floor at 370 Jay Street. We were told to use Unity and Blender to create a VR experience.</p>
        </header>

        <section className="case-section">
          <div className="case-text">
            <h2>Project Overview</h2>
            <p>
              We conducted several user interviews discussing what worked and what did not on the IDM floor. We found that desk layouts were not ideal, classrooms could be bigger, and there could be more common space.
            </p>
          </div>
          <img src="/projects/new_idm_floor_layout.png" alt="Case Study Overview" className="case-image" />
        </section>

        <section className="case-section reverse">
          <div className="case-text">
            <h2>Prototyping</h2>
            <p>
             This is the prototype that we created of the space. We implemented what we learned from the user interviews into the classrooms and overall floor. We eliminated the rooms in the middle to free up space for more classroom area, as well as furnishing the hall to allow for more common space. 
            </p>
          </div>
          <video className="case-video" controls>
            <source src="/projects/ux4xr_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className="case-section">
          <div className="case-text">
            <h2>Outcome</h2>
            <p>
              Once we finished our prototype, we had user feedback sessions, where we received notes on our progress. Some points they mentioned included focusing on adding tables for workspace outside of the classroom and shifting couches more toward the vending machine to better utilize the space.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}