import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar: React.FC = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{"color": "#DAAD86", "backgroundColor": "#659DBD"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{"textAlign": "center"}}>
            Mobile Equine and Housecall Service
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar