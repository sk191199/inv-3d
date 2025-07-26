import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Design from './components/Designs/Design'
import About from './components/About/About'


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Design/>
      <About/>
    </div>
  )
}

export default App
