import React from 'react'
import BandScene from '../components/BandScene'
import './pages.css'

export default function Home() {
  return (
    <div className="fullscreen-container">
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
      <BandScene />
    </div>
  )
}