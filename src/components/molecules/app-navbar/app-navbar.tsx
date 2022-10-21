import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BasicMenu from '../menu';

const NavBar: React.FC = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{"color": "#DAAD86", "backgroundColor": "#659DBD"}}>
        <Toolbar>
          <BasicMenu />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{"textAlign": "center"}}>
            Mobile Equine and Housecall Service
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar