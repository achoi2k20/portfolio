import React from 'react'
import './pages.css'

export default function About() {
  return (
    <div className="about-container">
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

      <div className="about-content">
        <div className="about-text">
        <h1>About Me</h1>
        <p>
          My name is Aidan Choi. I am a 22 year old visual designer with a focus on user experience. Growing up with my mom, who is a graphic designer, I always found portraying ideas visually to be the most effective way for me to understand. I would consume so much information from watching movies, TV shows, documentaries, and YouTube videos (video essays are a personal favorite). There was something fascinating about how visual elements could mesh to create an idea that could be received easily. I began video editing and taking art classes to learn more about composition and different mediums.  
        </p>
        <p>
          I decided to continue to explore this line of thinking by majoring in Integrated Design and Media at New York University Tandon School of Engineering. I decided to take a User Experience class, and I instantly developed an interest in the subject. It made me realize how often people can struggle with interacting with websites and programs because they are not designed for them. I began seeing these issues in my day to day life, and it was frustrating. I want to utilize the skills I developed in visual design to create better experiences for users. 
        </p>
        <p>
          I continue to learn about user experience by  taking the Google Certificate course discussing User Experience. I was able to get a deeper understanding of the subject and create some projects. I hope to continue working on this skillset and create accessible projects for everyone.
        </p>
        </div>
        <img src="/about.jpg" alt="Aidan Choi" className="profile-image" />
      </div>
    </div>
  )
}
