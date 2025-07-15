import React, { use } from 'react';
import ButtonAppBar from './Narbar.jsx'; // Import the Narbar component
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { useState,useEffect } from 'react';

const App = () => {
    const [attraction, setAttraction] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = () => {
        setLoading(true);
        fetch("https://randomuser.me/api/?results=6")
          .then((res) => res.json())
          .then((result) => {
            setAttraction(result.results);
            setLoading(false);
            console.log(result);
          })
          .catch((error) => {
            console.error('Error:', error);
            setLoading(false);
          });
    };

    useEffect(() => {
        fetchUsers();
    }, [])

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        pointerEvents: 'none',
      }
    }}>
      <ButtonAppBar />
      
      <Container maxWidth="lg" sx={{ paddingTop: 6, paddingBottom: 6, position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ 
              color: 'white',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              marginBottom: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Random Users
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255,255,255,0.9)',
              fontWeight: '300',
              marginBottom: 4,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            For Production
          </Typography>
          
          <Button
            variant="contained"
            startIcon={<RefreshIcon />}
            onClick={fetchUsers}
            disabled={loading}
            sx={{
              background: 'linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px 32px',
              borderRadius: '30px',
              fontSize: '1.1rem',
              textTransform: 'none',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              '&:hover': {
                background: 'linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.2))',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              },
              '&:disabled': {
                background: 'rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)',
              }
            }}
          >
            {loading ? 'Loading...' : 'Refresh Users'}
          </Button>
        </Box>

        {/* Users Grid */}
        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {attraction.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index} sx={{ display: 'flex' }}>
              <Card 
                sx={{ 
                  width: '100%',
                  height: '500px', // Fixed exact height
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  overflow: 'hidden', // Changed from visible to hidden
                  '&:hover': {
                    transform: 'translateY(-15px) scale(1.02)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
                    '& .user-avatar': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
                    }
                  }
                }}
              >
                <CardContent 
                  sx={{ 
                    textAlign: 'center', 
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Avatar Section */}
                  <Box>
                    <Avatar
                      src={item.picture.large}
                      alt={`${item.name.first} ${item.name.last}`}
                      className="user-avatar"
                      sx={{
                        width: 120,
                        height: 120,
                        margin: '0 auto 24px auto',
                        border: '5px solid white',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease',
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                      }}
                    />
                  </Box>

                  {/* Name Section - Fixed Height with Dynamic Font Size */}
                  <Box sx={{ 
                    minHeight: '80px', 
                    maxHeight: '80px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: (() => {
                          const fullName = `${item.name.first} ${item.name.last}`;
                          if (fullName.length > 20) return { xs: '1.1rem', md: '1.2rem' };
                          if (fullName.length > 15) return { xs: '1.2rem', md: '1.3rem' };
                          return { xs: '1.3rem', md: '1.4rem' };
                        })(),
                        lineHeight: 1.1,
                        textAlign: 'center',
                        wordBreak: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      {item.name.first} {item.name.last}
                    </Typography>
                  </Box>
                  
                  {/* Email Section - Fixed Height with Smart Truncation */}
                  <Box sx={{ 
                    minHeight: '60px', 
                    maxHeight: '60px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginBottom: 2,
                    overflow: 'hidden'
                  }}>
                    <Chip 
                      icon={<EmailIcon sx={{ color: '#667eea !important' }} />}
                      label={(() => {
                        const email = item.email;
                        if (email.length > 28) return `${email.substring(0, 25)}...`;
                        if (email.length > 25) return `${email.substring(0, 22)}...`;
                        return email;
                      })()}
                      variant="outlined"
                      sx={{ 
                        borderColor: '#667eea',
                        color: '#667eea',
                        fontSize: item.email.length > 25 ? '0.75rem' : '0.85rem',
                        padding: '8px 4px',
                        maxWidth: '100%',
                        height: 'auto',
                        '& .MuiChip-label': {
                          padding: '0 8px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(102, 126, 234, 0.1)',
                          transform: 'scale(1.05)',
                        },
                        transition: 'all 0.2s ease'
                      }}
                    />
                  </Box>
                  
                  {/* Location Section - Fixed Height with Smart Text Sizing */}
                  <Box sx={{ 
                    minHeight: '60px',
                    maxHeight: '60px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: 1,
                    padding: 2,
                    background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08))',
                    borderRadius: 3,
                    border: '1px solid rgba(102, 126, 234, 0.1)',
                    marginBottom: 2,
                    overflow: 'hidden'
                  }}>
                    <LocationOnIcon sx={{ color: '#667eea', fontSize: '1.2rem', flexShrink: 0 }} />
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#555',
                        fontWeight: '600',
                        fontSize: (() => {
                          const location = `${item.location.city}, ${item.location.country}`;
                          if (location.length > 25) return '0.8rem';
                          if (location.length > 20) return '0.85rem';
                          return '0.9rem';
                        })(),
                        textAlign: 'center',
                        lineHeight: 1.1,
                        wordBreak: 'break-word',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {item.location.city}, {item.location.country}
                    </Typography>
                  </Box>

                  {/* Age & Gender Section - Fixed Height */}
                  <Box sx={{ 
                    minHeight: '40px', 
                    maxHeight: '40px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                    <Chip 
                      icon={<PersonIcon sx={{ fontSize: '1rem' }} />}
                      label={`${item.gender.charAt(0).toUpperCase() + item.gender.slice(1)} • ${item.dob.age} years old`}
                      size="small"
                      sx={{
                        background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                        color: '#667eea',
                        fontWeight: '500',
                        border: 'none',
                        fontSize: '0.75rem',
                        height: '32px',
                        '& .MuiChip-icon': {
                          fontSize: '0.9rem'
                        }
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {attraction.length === 0 && !loading && (
          <Box sx={{ textAlign: 'center', marginTop: 6 }}>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Click "Refresh Users" to load amazing people!
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
export default App