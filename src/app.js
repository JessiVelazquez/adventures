import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@mui/styles';
import Profile from './components/profile.js';
import Form from './components/form';
import Parks from './components/parks.js';
import Welcome from './components/welcome.js';
import SinglePark from './components/singlePark.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  root: {
    backgroundColor: '#c7e6f0'
  }
}) 

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#c7e6f0',
  }
}));

console.log('useStyles', useStyles);

function App(props) {
  const classes = useStyles();

  const {
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();

  let selectedState = props.stateCodeReducer.activeStateCode;
  let activePark = props.parkCodeReducer.activeParkCode;

  return (
    <ThemeProvider theme={theme}>
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
          <Route 
            exact
            path={`/parks/:${activePark}`}
            component={(props) => <SinglePark {...props} />}
            >
          </Route>
        </Switch>
      </>
    </ThemeProvider>
  )
}


const mapStateToProps = state => ({
  stateCodeReducer: state.stateCodeReducer,
  parkCodeReducer: state.parkCodeReducer
});

const mapDispatchToProps = dispatch => ({
  changeStateCode: (stateCode) => dispatch(changeStateCode(stateCode)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

