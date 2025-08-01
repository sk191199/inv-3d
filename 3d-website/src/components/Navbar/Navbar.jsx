import React from 'react'
import Box from '@mui/material/Box'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="navbar">
      <Box className='navbar-box'>
        <ul className='menu-list'>
          <li><a href="https://invtechnologies.in/" style={{textDecoration:"none"}}>Home</a></li>
          <li><a href="#about" style={{textDecoration:"none" }}>About</a></li>
          <li><a href="#other-designs" style={{textDecoration:"none" }}>Products</a></li>
          <li><a href="#contact" style={{textDecoration:"none" }}>Contact</a></li>
        </ul>
      </Box>
    </div>

  )
}

export default Navbar
