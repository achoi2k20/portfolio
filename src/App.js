import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import GlobalGourmet from './pages/GlobalGourmet'
import EscAPI from './pages/escAPI'
import Ux4xr from './pages/ux4xr'
import Funtent from './pages/Funtent'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects/ux4xr" element={<Ux4xr />} />
      <Route path="/projects/funtent" element={<Funtent />} />
      <Route path="/projects/globalgourmet" element={<GlobalGourmet />} />
      <Route path="/projects/escapi" element={<EscAPI />} />
    </Routes>
  )
}
