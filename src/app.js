import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import Profile from './components/profile.js';
import Form from './components/form';
import Parks from './components/parks.js';
import Welcome from './components/welcome.js';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#c7e6f0',
  }
}));

function App(props) {
  const classes = useStyles();

  const {
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();

  return (
    <>
      <Switch>
        <Route className={classes.root} exact path="/" width={1}>
          {isAuthenticated ? (
            <Form />
          ) : <Welcome />}
          <Parks />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </>
  )
}


const mapStateToProps = state => ({
  stateCodeReducer: state.stateCodeReducer
});

const mapDispatchToProps = dispatch => ({
  changeStateCode: (stateCode) => dispatch(changeStateCode(stateCode)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

