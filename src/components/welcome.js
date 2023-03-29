import React from 'react';
import { adaptV4Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import LoginButton from './loginbutton';

const theme = createTheme(adaptV4Theme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },}));

const useStyles = makeStyles((theme) => ({
  welcome: {
    color: '#e0dfdc',
    marginTop: 250,
    textAlign: 'center',
    fontSize: 72,
  },
}));

function Welcome() {
  const classes = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Typography className={classes.welcome}>Welcome, Adventurer!</Typography>
        <center>
          <LoginButton />
        </center>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Welcome;
