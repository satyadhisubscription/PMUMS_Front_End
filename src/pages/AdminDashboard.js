import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Button,
} from '@mui/material';
import {
  AdminPanelSettings,
  People,
  AccountBalance,
  Description,
  Edit,
  Delete,
  CheckCircle,
  Cancel,
  TrendingUp,
} from '@mui/icons-material';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [recentUsers, setRecentUsers] = useState([]);

  // Mock data - replace with actual API calls
  const adminStats = [
    {
      title: 'कुल उपयोगकर्ता',
      value: '2,847',
      icon: <People sx={{ fontSize: 40 }} />,
      color: '#1a237e',
      growth: '+18%',
      subtitle: 'सभी पंजीकृत सदस्य'
    },
    {
      title: 'कुल फंड',
      value: '₹45,67,890',
      icon: <AccountBalance sx={{ fontSize: 40 }} />,
      color: '#d32f2f',
      growth: '+12%',
      subtitle: 'संचित राशि'
    },
    {
      title: 'लंबित अनुमोदन',
      value: '23',
      icon: <Description sx={{ fontSize: 40 }} />,
      color: '#f57c00',
      growth: '-5%',
      subtitle: 'अनुमोदन की प्रतीक्षा में'
    },
    {
      title: 'मासिक वृद्धि',
      value: '156',
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: '#388e3c',
      growth: '+22%',
      subtitle: 'नए पंजीकरण'
    },
  ];

  // Mock recent users data
  useEffect(() => {
    setRecentUsers([
      { id: 1, name: 'राजेश कुमार', email: 'rajesh@example.com', status: 'active', registeredDate: '2024-12-20', role: 'USER' },
      { id: 2, name: 'प्रिया शर्मा', email: 'priya@example.com', status: 'pending', registeredDate: '2024-12-25', role: 'USER' },
      { id: 3, name: 'अमित वर्मा', email: 'amit@example.com', status: 'active', registeredDate: '2024-12-28', role: 'USER' },
      { id: 4, name: 'सुनीता देवी', email: 'sunita@example.com', status: 'inactive', registeredDate: '2024-12-15', role: 'USER' },
    ]);
  }, []);

  return (
    <Layout>
      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a237e 0%, #d32f2f 50%, #f57c00 100%)',
        position: 'relative',
        overflow: 'hidden',
        py: 4
      }}>
        {/* Floating Background Elements */}
        <Box sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          borderRadius: '50% 40% 60% 30%',
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-30px) rotate(15deg)' }
          }
        }} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Admin Header */}
          <Paper 
            elevation={24} 
            sx={{ 
              mb: 4,
              borderRadius: 4,
              background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 20px 40px rgba(26, 35, 126, 0.3)',
            }}
          >
            <Box sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <AdminPanelSettings sx={{ 
                    fontSize: 48,
                    color: '#d32f2f'
                  }} />
                  <Box>
                    <Typography variant="h4" sx={{ 
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #d32f2f 0%, #f57c00 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1
                    }}>
                      एडमिन डैशबोर्ड
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#666' }}>
                      प्रबंधन नियंत्रण केंद्र
                    </Typography>
                  </Box>
                </Box>
                <Chip 
                  label={`स्वागत है, ${user?.name || 'Admin'}`}
                  color="error"
                  sx={{ 
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    py: 2.5,
                    px: 1
                  }}
                />
              </Box>
            </Box>
          </Paper>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {adminStats.map((stat, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card
                  elevation={12}
                  sx={{
                    borderRadius: 3,
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 15px 30px rgba(26, 35, 126, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(26, 35, 126, 0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}80 100%)`,
                          color: 'white',
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: stat.growth.startsWith('+') ? '#4caf50' : '#f44336',
                          fontWeight: 'bold',
                          fontSize: '0.875rem',
                        }}
                      >
                        {stat.growth}
                      </Typography>
                    </Box>
                    <Typography variant="h4" sx={{ 
                      fontWeight: 'bold', 
                      color: stat.color,
                      mb: 1 
                    }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 600, mb: 0.5 }}>
                      {stat.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#999' }}>
                      {stat.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Recent Users Table */}
          <Paper 
            elevation={24} 
            sx={{ 
              mb: 4,
              borderRadius: 4,
              background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 20px 40px rgba(26, 35, 126, 0.3)',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ p: 3, borderBottom: '2px solid #f0f0f0' }}>
              <Typography variant="h5" sx={{ 
                fontWeight: 'bold',
                color: '#1a237e'
              }}>
                हाल के उपयोगकर्ता
              </Typography>
            </Box>
            
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1a237e' }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1a237e' }}>नाम</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1a237e' }}>ईमेल</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1a237e' }}>पंजीकरण तिथि</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1a237e' }}>स्थिति</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1a237e' }}>भूमिका</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1a237e' }}>कार्रवाई</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentUsers.map((user) => (
                    <TableRow 
                      key={user.id}
                      sx={{ 
                        '&:hover': { backgroundColor: '#f9f9f9' },
                        transition: 'background-color 0.2s'
                      }}
                    >
                      <TableCell>{user.id}</TableCell>
                      <TableCell sx={{ fontWeight: 500 }}>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{new Date(user.registeredDate).toLocaleDateString('hi-IN')}</TableCell>
                      <TableCell>
                        <Chip
                          icon={user.status === 'active' ? <CheckCircle /> : <Cancel />}
                          label={
                            user.status === 'active' ? 'सक्रिय' :
                            user.status === 'pending' ? 'लंबित' : 'निष्क्रिय'
                          }
                          color={
                            user.status === 'active' ? 'success' :
                            user.status === 'pending' ? 'warning' : 'error'
                          }
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={user.role}
                          color="primary"
                          size="small"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton size="small" color="primary" title="संपादित करें">
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="error" title="हटाएं">
                          <Delete fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="primary">
                सभी उपयोगकर्ता देखें
              </Button>
            </Box>
          </Paper>

          {/* Quick Actions */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={12}
                sx={{ 
                  p: 3,
                  borderRadius: 3,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                  textAlign: 'center'
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: '#1a237e', fontWeight: 'bold' }}>
                  उपयोगकर्ता प्रबंधन
                </Typography>
                <Button variant="contained" fullWidth color="primary" sx={{ mb: 1 }}>
                  उपयोगकर्ता जोड़ें
                </Button>
                <Button variant="outlined" fullWidth color="primary">
                  सभी देखें
                </Button>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={12}
                sx={{ 
                  p: 3,
                  borderRadius: 3,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                  textAlign: 'center'
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: '#d32f2f', fontWeight: 'bold' }}>
                  रिपोर्ट्स
                </Typography>
                <Button variant="contained" fullWidth color="error" sx={{ mb: 1 }}>
                  रिपोर्ट जनरेट करें
                </Button>
                <Button variant="outlined" fullWidth color="error">
                  इतिहास देखें
                </Button>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={12}
                sx={{ 
                  p: 3,
                  borderRadius: 3,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                  textAlign: 'center'
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: '#388e3c', fontWeight: 'bold' }}>
                  सेटिंग्स
                </Typography>
                <Button variant="contained" fullWidth sx={{ mb: 1, bgcolor: '#388e3c', '&:hover': { bgcolor: '#2e7d32' } }}>
                  सिस्टम कॉन्फ़िगर करें
                </Button>
                <Button variant="outlined" fullWidth sx={{ color: '#388e3c', borderColor: '#388e3c' }}>
                  अनुमति प्रबंधित करें
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default AdminDashboard;
