import React from 'react';
import { connect } from 'react-redux';
import '../styles/style.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { adaptV4Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoginButton from './loginbutton';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(adaptV4Theme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },}));

const useStyles = makeStyles((theme) => ({
  headerToolBar: {
    background: 'transparent',
    float: 'right',
  },
  header: {
    background: 'linear-gradient(45deg, #2d3441 30%, #0e1721 90%)',
    boxShadow: 'none',
  },
  navLink: {
    background: 'linear-gradient(45deg, #2d3441 30%, #0e1721 90%)',
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    margin: 10,
    padding: 8,
  },
  button: {
    background: 'linear-gradient(45deg, #2d3441 30%, #0e1721 90%)',
    color: 'white',
    borderWidth: 1,
    borderColor: '#ae6754',
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
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Toolbar className={classes.headerToolBar}>
            <Typography className={classes.title}>National Park Explorer</Typography>
            <Button className={classes.button} href={`/`}>Home</Button>
            <Button className={classes.button} href={`/profile`}>Adventurer</Button>
            {isAuthenticated ? (
              <LoginButton className={classes.button}/>
            ) : null}
          </Toolbar>
        </ThemeProvider>
      </StyledEngineProvider>
    </AppBar>
  );
}

export default Header;