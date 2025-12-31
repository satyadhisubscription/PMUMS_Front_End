import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  Button
} from '@mui/material';

const SelfDonation = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: 3,
          p: 4,
          boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 600,
            mb: 4,
            color: '#1E3A8A',
            fontFamily: 'Poppins'
          }}
        >
          सहयोग
        </Typography>

        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Image Section */}
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              src="/profile.jpg"   // replace with real image path
              sx={{
                width: 150,
                height: 150,
                mx: 'auto',
                mb: 2,
                borderRadius: 2
              }}
            />
            <Typography sx={{ fontWeight: 600 }}>
              Name : Ashok Kumar
            </Typography>
            <Typography sx={{ fontSize: 14, color: '#555' }}>
              Registration Number : PMUMS20245896
            </Typography>
            <Typography sx={{ fontSize: 14, color: '#555' }}>
              Registration Date : 02/05/2024
            </Typography>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={8}>
            <Typography
              sx={{
                mb: 3,
                lineHeight: 1.8,
                fontFamily: 'Poppins',
                color: '#444'
              }}
            >
              PMUMS के सुचारू संचालन के लिए आपका सहयोग महत्वपूर्ण है।
              संस्था के दैनिक संचालन, तकनीकी प्रबंधन, दस्तावेजीकरण,
              वेबसाइट/डेटाबेस, सर्वर, मीटिंग, आयोजन एवं संचालन से
              जुड़े अन्य प्रशासनिक खर्चों को पूरा करने के लिए
              संचालन सहयोग (Operational Donation) की आवश्यकता होती है।
            </Typography>

            {/* Nominee Section */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
              {/* First Row - 2 buttons */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  sx={{
                    py: 2,
                    px: 4,
                    backgroundColor: '#1E3A8A',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#152b6b'
                    }
                  }}
                >
                  <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'white' }}>
                    श्रीमती सपना अहिरवार (Wife)
                  </Typography>
                </Button>
                
                <Button
                  variant="contained"
                  sx={{
                    py: 2,
                    px: 4,
                    backgroundColor: '#1E3A8A',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#152b6b'
                    }
                  }}
                >
                  <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'white' }}>
                    बॉबी अहिरवार (Son)
                  </Typography>
                </Button>
              </Box>

              {/* Second Row - 2 buttons */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  sx={{
                    py: 2,
                    px: 4,
                    borderColor: '#1E3A8A',
                    color: '#1E3A8A',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#152b6b',
                      backgroundColor: '#f0f4ff'
                    }
                  }}
                >
                  <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                    Nominee 3
                  </Typography>
                </Button>
                
                <Button
                  variant="outlined"
                  sx={{
                    py: 2,
                    px: 4,
                    borderColor: '#1E3A8A',
                    color: '#1E3A8A',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#152b6b',
                      backgroundColor: '#f0f4ff'
                    }
                  }}
                >
                  <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                    Nominee 4
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SelfDonation;
