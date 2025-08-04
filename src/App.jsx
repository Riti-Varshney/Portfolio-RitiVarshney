import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import EducationCertifications from './Components/EducationCertifications'
import ContactSection from './Components/ContactSection'
import Navbar from './Components/Navbar'
function App() {
 

  return (
    <>
       <Navbar />
      <main className="pt-20">
        <section id="hero"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><EducationCertifications/></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience/></section>
        <section id="contact"><ContactSection /></section>
      </main>
    </>
  )
}

export default App
