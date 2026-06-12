import React from 'react'
import Band from '../components/Band'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Environment, Lightformer } from '@react-three/drei'
import './BandScene.css'

export default function BandScene() {
  return (
    <div className="bandscene-container">

      <span className="hero-index">Aidan Choi — 2026</span>

      {/* Text behind */}
      <div className="text-side-left">
        <span className="hero-eyebrow">Portfolio</span>
        <h1>Start now.<br />Think later.</h1>
      </div>

      {/* Band on top */}
      <div className="band-overlay">
        <Canvas
          camera={{ position: [0, 0, 13], fov: 25 }}
          style={{ height: '100vh', width: '100vw', pointerEvents: 'auto' }}
        >
          <ambientLight intensity={Math.PI} />
          <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
            <Band />
          </Physics>
          <Environment>
            <Lightformer intensity={2} position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={10} position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Canvas>
      </div>
      <div className="text-side-right">
        <span className="hero-eyebrow">Based in Mountain View, CA</span>
        <p>A collection of works in UX design, product thinking, and interactive development.</p>
      </div>

      <div className="hero-scroll-hint">
        <div className="hero-scroll-line"></div>
        <span>Scroll</span>
      </div>

    </div>
  )
}
