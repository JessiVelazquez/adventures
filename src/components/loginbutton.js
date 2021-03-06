import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },});

const useStyles = makeStyles((theme) => ({
  loginButton: {
    background: 'linear-gradient(45deg, #2d3441 30%, #0e1721 90%)',
    color: 'white',
    borderWidth: 1,
    borderColor: '#ae6754',
    borderStyle: 'solid',
    margin: 10,
  },
}));

function LoginButton(props) {
  const classes = useStyles();

  const {
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();

  return isAuthenticated ? (
    <ThemeProvider theme={theme}>
      <Button
        className={classes.loginButton}
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </Button>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <Button 
        type="button" 
        className={classes.loginButton}
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    </ThemeProvider>
  );
}

export default LoginButton;
