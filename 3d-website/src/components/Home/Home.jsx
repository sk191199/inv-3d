import React from 'react'
import "./Home.css"
import Typography from '@mui/material/Typography'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='main-container'>
            <div className='square-container' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:"center"}}>
                <Typography variant="h1" color="#fff" sx={{fontFamily:"poppins"}} >3D</Typography>
            </div>
            <div className='text-container'>
                <h4 className='text'>3D Printing Service</h4>
            </div>
            <div className='circle-container'>

            </div>

        </div>
    </div>
  )
}

export default Home
