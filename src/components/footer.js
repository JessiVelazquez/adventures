import React from 'react';
import { adaptV4Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme(adaptV4Theme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },}));

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
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Typography>(c) Jessi Velazquez, 2023</Typography>
        </ThemeProvider>
      </StyledEngineProvider>
    </footer>
  );
}

export default Footer;
