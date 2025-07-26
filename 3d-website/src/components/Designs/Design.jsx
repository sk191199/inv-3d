import React, { useEffect, useRef } from 'react'
import './Design.css'

import img1 from '../../asset/d1.png'
import img2 from '../../asset/d2.png'
import img3 from '../../asset/d3.png'
import img4 from '../../asset/d4.png'
import img5 from '../../asset/d5.png'
import img6 from '../../asset/d6.png'
import img7 from '../../asset/d7.png'
import img8 from '../../asset/d8.png'
import img9 from '../../asset/d9.png'
import Typography from '@mui/material/Typography'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

const Design = () => {
  const sliderRef = useRef(null)

  useEffect(() => {
    let angle = 0
    const interval = setInterval(() => {
      angle += 1
      if (sliderRef.current) {
        sliderRef.current.style.transform = `perspective(1000px) rotateY(${angle}deg)`
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="designs" style={{marginTop:"2.5rem", padding:"2rem"}}>
      <Typography variant="h4" color="initial" sx={{textAlign:"center", fontFamily:"Poppins", fontWeight:"bold"}}>Our Designs</Typography>
      <div className='banner'>
        <div className='slider' ref={sliderRef}>
          {images.map((img, i) => (
            <div
              className='carousel-item'
              key={i}
              style={{
                transform: `rotateY(${i * (360 / images.length)}deg) translateZ(300px)`
              }}
            >
              <img src={img} alt={`carousel-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Design
