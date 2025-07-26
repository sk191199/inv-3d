import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import './About.css'


import img3d from '../../asset/3d_1.png'
import img3d2 from '../../asset/3d_2.png'





const About = () => {
  return (
    <section id='about'>
        <Box className='about-container'>
          <Typography variant="h4" color='#fff' sx={{alignSelf:"center", fontWeight:"bold", fontFamily:"poppins"}}>About</Typography>
          <Box className='about-content-one'>
            <img src={img3d} alt="" className='about_img'/>
            <Box className='about-content-text'>
              <Typography variant="p" >
                INV Technologies is a leading provider of 3D printing services, specializing in creating high-quality prototypes and models for various industries. Our state-of-the-art technology and expertise allow us to deliver precise and intricate designs that meet the unique needs of our clients. Whether you need rapid prototyping, custom parts, or complex geometries, we have the capabilities to bring your ideas to life with speed and accuracy. Our 3D printing services are ideal for product development, engineering, and design applications. We work with a wide range of materials, including plastics, metals, and composites, to ensure that your final product meets the highest standards. Our team of skilled professionals works closely with you to ensure that your project is completed on time and to your specifications. We utilize advanced materials and techniques to produce durable and functional 3D printed parts.</Typography>
            </Box>
          </Box>
          <Box className='about-content-one'> 
            <Box className='about-content-text'>
              <Typography variant="p" >
                3D printing is a revolutionary technology that allows for the creation of three-dimensional objects from a digital file. It has transformed the way products are designed, manufactured, and prototyped. At INV Technologies, we offer a range of 3D printing services to meet the needs of various industries, including automotive, aerospace, healthcare, and consumer goods. Our advanced 3D printing capabilities enable us to produce high-quality parts with intricate designs and complex geometries. We utilize a variety of materials, including plastics, metals, and composites, to ensure that your final product meets the highest standards of quality and performance.</Typography>
            </Box>
            <img src={img3d2} alt="" className='about_img'/>
          </Box>
          
        </Box>
    </section>
  )
}

export default About
