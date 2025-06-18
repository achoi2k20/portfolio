import React from 'react'
import './pages.css'
import { Link } from 'react-router-dom'


export default function Projects() {
  return (
    <div className="projects-container">
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

      <div className="projects-text">
        <h1>Projects</h1>
        <p>Here are some of the projects I’ve worked on.</p>

        <div className="project-list">
            <div className="project-card">
                <Link to="/projects/ux4xr" className="project-link">
                    <video className="project-media" controls muted loop>
                        <source src="/projects/ux4xr_demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="project-info">
                        <h2>UX4XR IDM Floor Redesign</h2>
                        <p>Using user interviews and research, I redesigned the Integrated Design and Media floor at 370 Jay Street. I utilized Unity and Blender to simulate the classrooms and scale of the floor. It is designed to be used with VR headsets as well.</p>
                    </div>
                </Link>
            </div>
      
           <div className="project-card">
                <Link to="/projects/funtent" className="project-link">
                <img src="/projects/funtentmockup.png" alt="Project Screenshot" className="project-media" />
                <div className="project-info">
                    <h2>FUNTENT</h2>
                    <p>Mockups of screens for FUNTENT, child-friendly streaming service created for UX Design course. Created problem statement, wireframed and prototyped mobile application, and conducted user research.</p>
                </div>
                </Link>
            </div>
            <div className="project-card">
                <Link to="/projects/globalgourmet" className="project-link">
                <video className="project-media" controls muted loop>
                    <source src="/projects/globalgourmet_animatedlockupfinal.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="project-info">
                    <h2>Global Gourmet Identity Application</h2>
                    <p>Created products for Global Gourmet and applied brand guidelines. Created recipe sheets that are a part of food package, recipe video that accompanies the sheet, and an animated lockup to be used in videos and other applications.</p>
                </div>
                </Link>
            </div>
            <div className="project-card">
                <Link to="/projects/escapi" className="project-link">
                <img src="/projects/room1.png" alt="Project Screenshot" className="project-media" />
                <div className="project-info">
                    <h2>escAPI</h2>
                    <p>This project is a first-person escape room game built with a Three.js scene integrated into React. It features interactive 3D models, animations, camera controls, and object collision detection.</p>
                </div>
                </Link>
            </div>
            <div className="project-card">
                <img src="/projects/twitchmockup.png" alt="Project Screenshot" className="project-media" />
                <div className="project-info">
                    <h2>Twitch Mobile Redesign</h2>
                    <p>Twitch's mobile redesign brings a sleek, more intuitive user experience, making it easier than ever to discover and engage with content on the go. The update introduces a refreshed interface with streamlined navigation, improved performance, and enhanced video player features. </p>
                </div>
            </div>
            <div className="project-card">
                <img src="/projects/youtubemockup.png" alt="Project Screenshot" className="project-media" />
                <div className="project-info">
                    <h2>Youtube Live Redesign</h2>
                    <p>Youtube's live feature has been under utilized. I have taken user reviews and created a different UI, improving discoverability and functionality.</p>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}
