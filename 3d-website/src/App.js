import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Design from './components/Designs/Design'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Other from './components/Otherdesign/Other'


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Design/>
      <About/>
      <Other/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
