import React from 'react'
import { Box, Typography, Grid, Link, IconButton } from '@mui/material'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(90deg, #584899 0%, #47d36f 100%)',
        color: '#fff',
        mt: 8,
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 6 },
        borderTopLeftRadius: { xs: 24, md: 48 },
        borderTopRightRadius: { xs: 24, md: 48 },
        boxShadow: '0 -4px 24px rgba(0,0,0,0.15)',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, fontFamily: 'Poppins' }}>
            INV Technologies
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.85 }}>
            Leading provider of 3D printing services, delivering high-quality prototypes and models for all industries.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton component="a" href="https://facebook.com" target="_blank" sx={{ color: '#fff' }}>
              <FaFacebook />
            </IconButton>
            <IconButton component="a" href="https://instagram.com" target="_blank" sx={{ color: '#fff' }}>
              <FaInstagram />
            </IconButton>
            <IconButton component="a" href="https://linkedin.com" target="_blank" sx={{ color: '#fff' }}>
              <FaLinkedin />
            </IconButton>
            <IconButton component="a" href="https://twitter.com" target="_blank" sx={{ color: '#fff' }}>
              <FaTwitter />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Link href="#hero" underline="hover" color="inherit">Home</Link>
            <Link href="#about" underline="hover" color="inherit">About</Link>
            <Link href="#designs" underline="hover" color="inherit">Designs</Link>
            <Link href="/" underline="hover" color="inherit">Products</Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Contact
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <FaMapMarkerAlt style={{ marginRight: 8 }} />
            <Typography variant="body2">123, Main Street, Chennai, India</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <FaEnvelope style={{ marginRight: 8 }} />
            <Typography variant="body2">info@invtechnologies.in</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FaPhone style={{ marginRight: 8 }} />
            <Typography variant="body2">+91 98765 43210</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4, opacity: 0.7, fontSize: 14 }}>
        © {new Date().getFullYear()} INV Technologies. All rights reserved.
      </Box>
    </Box>
  )
}

export default Footer
