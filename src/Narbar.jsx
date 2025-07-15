import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import PeopleIcon from "@mui/icons-material/People";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: 'none',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar sx={{ padding: '0 24px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar 
              sx={{ 
                background: 'linear-gradient(45deg, #fff, rgba(255,255,255,0.8))',
                color: '#667eea',
                width: 40,
                height: 40
              }}
            >
              <PeopleIcon />
            </Avatar>
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                fontWeight: 'bold',
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                letterSpacing: '0.5px'
              }}
            >
              UserHub
            </Typography>
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Button 
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)',
                backdropFilter: 'blur(10px)',
                background: 'rgba(255,255,255,0.1)',
                fontWeight: 'bold',
                padding: '8px 24px',
                borderRadius: '25px',
                textTransform: 'none',
                '&:hover': {
                  borderColor: 'white',
                  background: 'rgba(255,255,255,0.2)',
                }
              }}
            >
              LOGIN
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
