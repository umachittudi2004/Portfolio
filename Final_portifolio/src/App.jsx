import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import {Projects} from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills/>} />
      </Routes>
      <Navbar />
    </>
  )
}

export default App
