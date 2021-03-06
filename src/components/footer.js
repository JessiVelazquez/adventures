import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },});

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#e0dfdc',
    paddingBottom: 20,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer id="footer" className={classes.root}>
      <ThemeProvider theme={theme}>
        <Typography>(c) Jessi Velazquez</Typography>
      </ThemeProvider>
    </footer>
  )
}

export default Footer;
