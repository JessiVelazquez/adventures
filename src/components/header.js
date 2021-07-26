import React from 'react';
import { connect } from 'react-redux';
import '../styles/style.scss';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
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
    backgroundColor: '#2d3441',
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    margin: 10,
    padding: 8,
  },
  loginButton: {
    margin: 10,
  },
}));

function Header(props) {
  const classes = useStyles();


  return (
      <AppBar position="fixed" className={classes.header}>
        <ThemeProvider theme={theme}>
          <Toolbar className={classes.headerToolBar}>
            <Link id="navLink" className={classes.navLink} href="">HOME</Link>
            <Link id="navLink" className={classes.navLink} href="/profile">PROFILE</Link>
            <LoginButton className={classes.loginButton}/>
          </Toolbar>
        </ThemeProvider>
      </AppBar>
  )
}

export default Header;