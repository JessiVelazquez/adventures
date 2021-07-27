import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LoginButton from './loginbutton';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },});

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
    <ThemeProvider theme={theme}>
      <Typography className={classes.welcome}>Welcome, Adventurer!</Typography>
      <center>
        <LoginButton className={classes.button} id="welcomeLogin"/>
      </center>
    </ThemeProvider>
  )
}

export default Welcome;
