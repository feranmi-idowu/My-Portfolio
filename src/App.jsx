import { useState } from 'react'
import Hero from "./components/hero";
import About from './components/about';
import Projects from './components/project';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
