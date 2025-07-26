import React from 'react'
import "./Home.css"

import { FaRegArrowAltCircleUp } from "react-icons/fa";
import logo from "../../asset/invicon.png"

const Home = () => {
  return (
    <section id='hero'>
    <div className='home-container'>
        <div className='main-container'>
            <div className='square-container' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:"center", padding:"10px"}}>
                <img src={logo} alt="" style={{width:"100%"}} />
            </div>
            <div className='text-container'>
                <h4 className='text'>3D Printing Service</h4>
            </div>
            <div className='circle-container'>

            </div>
        </div>
        <div className='top-navigation'>
              <a href="#hero" style={{textDecoration:"none"}}><FaRegArrowAltCircleUp fontSize={40} /></a>
        </div>
    </div>
    </section>
  )
}

export default Home
