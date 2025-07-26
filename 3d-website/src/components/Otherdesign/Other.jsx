import React from 'react'
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'
import { FaRobot, FaFont, FaCubes } from 'react-icons/fa'
import './Other.css'

import text3d from '../../asset/inv-text.png'
import robo3d from '../../asset/robot-3d.png'
import macro3d from '../../asset/micro3d.png'

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
      <Box className="other-root" sx={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #fdfbfb 0%, #a79dd1 100%)',
        py: { xs: 4, md: 8 },
        px: { xs: 1, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Typography variant="h3" className="other-title" sx={{
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          mb: 2,
          textAlign: 'center',
          color: '#584899'
        }}>
          Explore Unique 3D Printed Designs
        </Typography>
        <Typography variant="h6" className="other-subtitle" sx={{
          mb: 5,
          color: '#584899',
          fontFamily: 'Poppins',
          textAlign: 'center',
          maxWidth: 700
        }}>
          From personalized text to futuristic robots and everything in between, discover our never-seen-before 3D creations.
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {categories.map((cat, idx) => (
            <Grid item xs={12} sm={6} md={4} key={cat.title} sx={{ display: 'flex' }}>
              <Card className="other-card"
                sx={{
                  borderRadius: 6,
                  boxShadow: '0 8px 32px 0 rgba(71,211,111,0.12)',
                  background: 'linear-gradient(135deg, #fff 60%, #f7d24a10 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '100%',
                  minHeight: 480,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  padding: 0,
                }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pt: 4,
                  width: '100%',
                  minHeight: 60
                }}>
                  {cat.icon}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    minHeight: { xs: 180, md: 220 },
                    px: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={cat.image}
                    alt={cat.title}
                    sx={{
                      height: { xs: 140, md: 180 },
                      width: 'auto',
                      maxWidth: '80%',
                      objectFit: 'contain',
                      borderRadius: 4,
                      boxShadow: '0 4px 24px rgba(71,211,111,0.08)',
                      background: '#f7f7fa',
                      mx: 'auto',
                      display: 'block',
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Poppins',
                      mb: 1,
                      color: '#584899',
                      textAlign: 'center',
                    }}
                  >
                    {cat.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#333',
                      fontFamily: 'Poppins',
                      textAlign: 'center',
                    }}
                  >
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
