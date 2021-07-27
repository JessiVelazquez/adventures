import React from 'react';
import { connect } from 'react-redux';
import '../styles/style.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    float: 'right',
  },
  header: {
    background: 'linear-gradient(45deg, #2d3441 30%, #162230 90%)',
    boxShadow: 'none',
  },
  navLink: {
    background: 'linear-gradient(45deg, #2d3441 30%, #9b9fa3 90%)',
    // backgroundColor: '#2d3441',
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    margin: 10,
    padding: 8,
  },
  button: {
    backgroundColor: '#2d3441',
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    margin: 10,
  },
  title: {
    fontSize: 40,
    marginRight: 50,
  },
}));

function Header(props) {
  const classes = useStyles();

  const {
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();

  const REACT_APP = 'http://localhost:3000';

  return (
      <AppBar position="fixed" className={classes.header}>
        <ThemeProvider theme={theme}>
          <Toolbar className={classes.headerToolBar}>
            <Typography className={classes.title}>National Park Explorer</Typography>
            <Button className={classes.button} href={`${REACT_APP}/`}>Home</Button>
            <Button className={classes.button} href={`${REACT_APP}/profile`}>Adventurer</Button>
            {isAuthenticated ? (
              <LoginButton className={classes.button}/>
            ) : null}
          </Toolbar>
        </ThemeProvider>
      </AppBar>
  )
}

export default Header;