import React from 'react';
import { connect } from 'react-redux';
import '../styles/style.scss';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LoginButton from './loginbutton';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  headerToolBar: {
    background: '#498F6F',
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
      <AppBar position="fixed">
        <Toolbar className={classes.headerToolBar}>
          <NavLink id="navLink" className={classes.navLink} to="" >Home</NavLink>
          <NavLink id="navLink" className={classes.navLink} to="/profile">PROFILE</NavLink>
          <LoginButton className={classes.navLink}/>
        </Toolbar>
      </AppBar>
  )
}

export default Header;