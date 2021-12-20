import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { connect } from 'react-redux';
import { Button, Grid, makeStyles  } from '@material-ui/core';

function Header(props) {

  const useStyles = makeStyles({
    cart: {
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
            <Grid item xs className={classes.cart}>
                            <Button href="#">
                                <Typography>Cart({props.cartReducer.cart.length})</Typography>
                            </Button>
                        </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

const mapStateToProps = state => ({
  cartReducer: state.cartReducer
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);




