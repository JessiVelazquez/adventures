import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  loginButton: {
    backgroundColor: '#fcbbc9',
  },
}));

function LoginButton(props) {
  const classes = useStyles();
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <Button className={classes.loginButton} onClick={loginWithRedirect}>Log In</Button>
  )
}

export default LoginButton;
