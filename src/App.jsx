import React from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Popular from './component/popularPrud';
import About from './component/About';
import Footer from './component/Footer';

function App() {


  return (
      <>
      <Navbar />
      < Hero />
      <Popular />
      <About />
      <Footer />
      </>
  )
}

export default App;
