import React from 'react'
import BandScene from '../components/BandScene'
import { Link } from 'react-router-dom'
import './pages.css'

export default function Home() {
  return (
    <div className="fullscreen-container">
      <BandScene />
    </div>
  )
}