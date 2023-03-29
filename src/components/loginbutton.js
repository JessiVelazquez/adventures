import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { adaptV4Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(adaptV4Theme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },}));

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
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Button
          className={classes.loginButton}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </Button>
      </ThemeProvider>
    </StyledEngineProvider>
  ) : (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Button 
          type="button" 
          className={classes.loginButton}
          onClick={() => loginWithRedirect()}
        >
          Log In
        </Button>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default LoginButton;
