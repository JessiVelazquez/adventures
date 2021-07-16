import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LoginButton from './components/loginbutton';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#c7e6f0',
  }
}));

function App(props) {
  const classes = useStyles();


  return (
    <>
      <Switch>
        <Route className={classes.root} exact path="/" width={1}>
          <LoginButton />
        </Route>
      </Switch>
    </>
  )
}


export default App;

