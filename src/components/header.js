import React from 'react';
import { connect } from 'react-redux';
import '../styles/style.scss';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LoginButton from './loginbutton';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },});


const useStyles = makeStyles((theme) => ({
  headerToolBar: {
    background: 'transparent',
  },
  header: {
    background: 'transparent',
    boxShadow: 'none',
  },
  navLink: {
    backgroundColor: '#09321F',
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
}));

function Header(props) {
  const classes = useStyles();


  return (
      <AppBar position="fixed" className={classes.header}>
        <Toolbar className={classes.headerToolBar}>
          <ThemeProvider theme={theme}>
            <NavLink id="navLink" className={classes.navLink} to="">HOME</NavLink>
            <NavLink id="navLink" className={classes.navLink} to="/profile">PROFILE</NavLink>
          </ThemeProvider>
          <LoginButton className={classes.navLink}/>
        </Toolbar>
      </AppBar>
  )
}

export default Header;