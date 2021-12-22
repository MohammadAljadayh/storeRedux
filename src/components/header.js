
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  makeStyles  } from '@material-ui/core';
import SimpleCart from './cart';

function Header() {

  const useStyles = makeStyles({
    Cart: {
        textAlign: "right"
    }
})
const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Store Redux
            </Typography>
            <SimpleCart  />
          </Toolbar>
     
        </AppBar>
        
      </Box>
    )
}

export default Header;
