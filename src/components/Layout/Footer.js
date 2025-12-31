import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#1E3A8A',
        color: 'white',
        mt: 'auto',
        width: '100%',
        py: 1
      }}
    >
      <Container maxWidth={false} sx={{ px: 2 }}>
        <Grid container spacing={3}>
          {/* Logo and Description Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  p: 1
                }}
              >
                <img 
                  src="/logo.png" 
                  alt="PMUMS Logo" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain' 
                  }} 
                />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ 
                  fontWeight: 600,
                  fontFamily: 'Poppins',
                  color: '#FF9933',
                  fontSize: '1rem',
                  lineHeight: 1.2
                }}>
                  प्राथमिक शिक्षक संघ (पी.एम.यू.एम.एस.)
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.85rem',
                  fontFamily: 'Poppins'
                }}>
                  शिक्षकों का संगठन, शिक्षकों के लिए, शिक्षकों द्वारा
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ 
              color: 'rgba(255,255,255,0.9)',
              fontSize: '0.9rem',
              fontFamily: 'Poppins',
              lineHeight: 1.6,
              textAlign: 'justify'
            }}>
              हमारा उद्देश्य मध्यप्रदेश के शिक्षकों के लिए एक सहायगी तंत्र
              तैयार करना है ताकि संकट की घड़ी में परिवार अकेला न पड़े।
              <br />
              संगठन शिक्षक एकता, मानवीय सेवा और पारस्परिकता के
              सिद्धांतों पर आधारित है।
            </Typography>
          </Grid>

          {/* Support Section */}
          <Grid item xs={12} md={2.5}>
            <Typography variant="h6" sx={{ 
              mb: 0.5,
              fontWeight: 600,
              color: '#FF9933',
              fontSize: '1.1rem',
              fontFamily: 'Poppins'
            }}>
              Support
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 0.5
            }}>
              <Typography variant="body2" sx={{ 
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.9rem',
                fontFamily: 'Poppins',
                lineHeight: 1.5
              }}>
                • स्वच्छा दानदाताओं हेतु सहयोग
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.9rem',
                fontFamily: 'Poppins',
                lineHeight: 1.5
              }}>
                • सुविधान/नक्शावक सहायता टीम
              </Typography>
            </Box>
          </Grid>

          {/* Important Links Section */}
          <Grid item xs={12} md={2.5}>
            <Typography variant="h6" sx={{ 
              mb: 0.5,
              fontWeight: 600,
              color: '#FF9933',
              fontSize: '1.1rem',
              fontFamily: 'Poppins'
            }}>
              महत्वपूर्ण लिंक
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 0.5
            }}>
              {[
                { text: 'हमारे बारे में', href: '/about' },
                { text: 'शिक्षक सूची', href: '/teachers' },
                { text: 'दान करें', href: '/donate' },
                { text: 'नियमावली', href: '/rules' },
                { text: 'संपर्क करें', href: '/contact' }
              ].map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  sx={{ 
                    color: 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontFamily: 'Poppins',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      color: '#FFA500',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Details Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ 
              mb: 0.5,
              fontWeight: 600,
              color: '#FF9933',
              fontSize: '1.1rem',
              fontFamily: 'Poppins'
            }}>
              संपर्क विवरण
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 0.5
            }}>
              {/* Office Address */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOn sx={{ 
                  color: '#FF9933',
                  fontSize: '1.2rem',
                  mt: 0.2
                }} />
                <Box>
                  <Typography variant="body2" sx={{ 
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.9rem',
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    mb: 0.5
                  }}>
                    पंजीकृत कार्यालय: 06/13/01/14617/23
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.85rem',
                    fontFamily: 'Poppins',
                    lineHeight: 1.4
                  }}>
                    गण्पतियां टेक, हरू टेक उच, दानापुर, अहमदाबाद - 472001
                  </Typography>
                </Box>
              </Box>

              {/* Phone */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ 
                  color: '#FF9933',
                  fontSize: '1.2rem'
                }} />
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '0.9rem',
                  fontFamily: 'Poppins'
                }}>
                  +91 96851 25103
                </Typography>
              </Box>

              {/* Email */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ 
                  color: '#FF9933',
                  fontSize: '1.2rem'
                }} />
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '0.9rem',
                  fontFamily: 'Poppins'
                }}>
                  help@pmums.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ 
          borderTop: '1px solid rgba(255,255,255,0.2)',
          mt: 1,
          pt: 0.5,
          textAlign: 'center'
        }}>
          <Typography variant="body2" sx={{ 
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.85rem',
            fontFamily: 'Poppins'
          }}>
            © 2025 PMUMS | All Rights Reserved | Designed & Managed by Jyoti Global Ventures
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;