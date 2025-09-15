import React from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Popular from './component/popularPrud';
import About from './component/About';
import CTA from './component/CTA';
import Footer from './component/Footer';

function App() {


  return (
      <>
      <Navbar />
      < Hero />
      <Popular />
      <About />
      <CTA />
      <Footer />
      </>
  )
}

export default App;
