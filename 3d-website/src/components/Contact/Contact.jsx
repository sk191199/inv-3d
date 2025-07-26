import React, { useState } from 'react'
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  InputAdornment,
} from '@mui/material'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaUser, FaRegCommentDots } from 'react-icons/fa'

const Contact = () => {
  // State for form fields
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // WhatsApp send handler
  const handleWhatsAppSend = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    // Format message for WhatsApp
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`
    // WhatsApp API link
    const whatsappUrl = `https://wa.me/919248200200?text=${text}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id='contact'>
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #fdfbfb 0%, #a79dd1 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 8 },
      }}
    >
      <Paper
        elevation={10}
        sx={{
          borderRadius: 6,
          maxWidth: 1100,
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          boxShadow: '0 8px 40px 0 rgba(88,72,153,0.25)',
        }}
      >
        {/* Left Side - Contact Info */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #584899 60%, #47d36f 100%)',
            color: '#fff',
            p: { xs: 4, md: 6 },
            flex: 1.1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 4,
            minWidth: { xs: '100%', md: 350 },
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'Poppins', mb: 1 }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              We'd love to hear from you! Reach out for any queries, collaborations, or just to say hi.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FaMapMarkerAlt style={{ marginRight: 12, fontSize: 22 }} />
            <Typography variant="body2">123, Main Street, Chennai, India</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FaEnvelope style={{ marginRight: 12, fontSize: 20 }} />
            <Typography variant="body2">info@invtechnologies.in</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FaPhone style={{ marginRight: 12, fontSize: 20 }} />
            <Typography variant="body2">+91 9248200200</Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <IconButton component="a" href="https://facebook.com" target="_blank" sx={{ color: '#fff', mx: 0.5 }}>
              <FaFacebook />
            </IconButton>
            <IconButton component="a" href="https://instagram.com" target="_blank" sx={{ color: '#fff', mx: 0.5 }}>
              <FaInstagram />
            </IconButton>
            <IconButton component="a" href="https://linkedin.com" target="_blank" sx={{ color: '#fff', mx: 0.5 }}>
              <FaLinkedin />
            </IconButton>
            <IconButton component="a" href="https://twitter.com" target="_blank" sx={{ color: '#fff', mx: 0.5 }}>
              <FaTwitter />
            </IconButton>
          </Box>
        </Box>
        {/* Right Side - Contact Form */}
        <Box
          sx={{
            flex: 1.5,
            p: { xs: 4, md: 6 },
            background: 'rgba(255,255,255,0.97)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box component="form" sx={{ width: '100%', maxWidth: 420 }} onSubmit={handleWhatsAppSend}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#584899', fontFamily: 'Poppins' }}>
              Send us a Message
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUser style={{ color: '#47d36f' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  type="email"
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaEnvelope style={{ color: '#47d36f' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  required
                  multiline
                  minRows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaRegCommentDots style={{ color: '#47d36f' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{
                    background: 'linear-gradient(90deg, #584899 0%, #47d36f 100%)',
                    color: '#fff',
                    fontWeight: 'bold',
                    borderRadius: 3,
                    boxShadow: '0 4px 16px rgba(71,211,111,0.15)',
                    py: 1.5,
                    fontSize: 18,
                    letterSpacing: 1,
                    '&:hover': {
                      background: 'linear-gradient(90deg, #47d36f 0%, #584899 100%)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Box>
    </section>
  )
}

export default Contact
