import React from 'react'
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'
import { FaRobot, FaFont, FaCubes } from 'react-icons/fa'
import './Other.css'

// Example images (replace with your own assets for production)
import text3d from '../../asset/d1.png'
import robo3d from '../../asset/d2.png'
import macro3d from '../../asset/d3.png'

const categories = [
  {
    title: 'Text 3D Printed Designs',
    icon: <FaFont size={38} color="#584899" />,
    image: text3d,
    desc: 'Personalized 3D printed names, logos, and custom typography for gifts, branding, and decor. Precision-crafted with vibrant colors and unique finishes.',
  },
  {
    title: 'Robo 3D Printed Designs',
    icon: <FaRobot size={38} color="#47d36f" />,
    image: robo3d,
    desc: 'Intricate robot models, parts, and collectibles. From miniatures to functional robotics, our prints combine detail and durability for hobbyists and professionals.',
  },
  {
    title: 'Micro to Macro 3D Printed Designs',
    icon: <FaCubes size={38} color="#f7d24a" />,
    image: macro3d,
    desc: 'From tiny mechanical parts to large-scale prototypes, we deliver high-precision 3D prints in a variety of materials and sizes for every industry need.',
  },
]

const Other = () => {
  return (
    <section id="other-designs">
      <Box className="other-root">
        <Typography variant="h3" className="other-title" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', mb: 2 }}>
          Explore Unique 3D Printed Designs
        </Typography>
        <Typography variant="h6" className="other-subtitle" sx={{ mb: 5, color: '#584899', fontFamily: 'Poppins' }}>
          From personalized text to futuristic robots and everything in between, discover our never-seen-before 3D creations.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((cat, idx) => (
            <Grid item xs={12} sm={6} md={4} key={cat.title}>
              <Card className="other-card" sx={{
                borderRadius: 5,
                boxShadow: '0 8px 32px 0 rgba(71,211,111,0.12)',
                background: 'linear-gradient(135deg, #fff 60%, #f7d24a10 100%)',
                transition: 'transform 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.04) rotate(-1deg)',
                  boxShadow: '0 12px 40px 0 rgba(88,72,153,0.18)',
                }
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 3 }}>
                  {cat.icon}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  <CardMedia
                    component="img"
                    image={cat.image}
                    alt={cat.title}
                    sx={{
                      height: { xs: 180, md: 220 },
                      width: { xs: 220, md: 260 },
                      objectFit: 'contain',
                      borderRadius: 4,
                      my: 2,
                      boxShadow: '0 4px 24px rgba(71,211,111,0.08)',
                      background: '#f7f7fa'
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Poppins', mb: 1, color: '#584899', textAlign: 'center' }}>
                    {cat.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333', fontFamily: 'Poppins', textAlign: 'center' }}>
                    {cat.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  )
}

export default Other
