import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import superagent from 'superagent';
import { changeStateCode, changeFullName, reset } from '../store/stateCodes.js';
import { adaptV4Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import { selectPark } from '../store/parkCodes.js';


const theme = createTheme(adaptV4Theme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },}));

const API_SERVER = 'https://adventures-back-end-jessi.herokuapp.com' || 'http://localhost:3002';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    maxHeight: 'auto',
    overflowX: 'auto',
    background: 'linear-gradient(45deg, #2d3441 30%, #0e1721 90%)',
    color: '#e8e6e3',
    borderWidth: 1.5,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
  card: {
    background: '#2d3441',
    color: 'white',
    display: 'inline-block',
    width: 220,
    height: 300,
    margin: 10,
    borderWidth: 1.5,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
  parkCardTitle: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  parkImage: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent:'center'
  },
  addTripButton: {
    background: '#0e1721',
    color: '#e0dfdc',
    borderWidth: 1,
    borderColor: '#ae6754',
    borderStyle: 'solid',
    margin: 10,
    fontSize: 18,
  },
  tripsHeader: {
    fontSize: 40,
    textAlign: 'center',
  },
}));

const Trips = props => {
  const classes = useStyles();
  const { user } = useAuth0();

  // ------- State Setup ------------- \\

  let selectedState = props.stateCodeReducer.activeStateCode;

  const [trips, setTrips] = useState([]);

  // ---------- Effect hooks ----------- \\

  useEffect(() => {
    const URL = `${API_SERVER}/trips?email=${user.email}`
    superagent
      .get(URL)
      .then(response => {
        console.log('response body: ', response);
        setTrips(response.body);
      })
      .catch((err) => {
        console.log('Error retrieving data', err);
      })
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container className={classes.root}>
          <Typography className={classes.tripsHeader}>
            Build Your Adventures Here!
          </Typography>
          {trips.map((trip, idx) => {
            return (
              <Card key={idx}  className={classes.card}>
                <CardContent>
                  <Typography className={classes.parkCardTitle}>
                    {trip.park.fullName}
                  </Typography>
                  {/* <NavLink to={{
                    pathname: `/parks/:${trip.park.parkCode}`,
                    state: trip.park,
                  }}
                  > */}
                  {trip.park.images ? (
                    <img
                      className={classes.parkImage}
                      src={trip.park.images[0] ? trip.park.images[0].url : null}
                      alt={trip.park.images[0] ? trip.park.images[0].title : null}
                      width='185'
                      height='185'
                      onClick={() => props.selectPark(trip.park.parkCode)}
                    />
                  ) :
                    <Typography 
                      onClick={() => {
                        props.selectPark(trip.park.parkCode);
                        props.changeStateCode(trip.park.states[0]);
                      }}
                    >
                      {trip.park.url}
                    </Typography>
                  }
                  {/* </NavLink> */}
                </CardContent>
              </Card>
            );
          })}
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

const mapStateToProps = state => ({
  stateCodeReducer: state.stateCodeReducer,
  parkCodeReducer: state.parkCodeReducer,
  actReducer: state.actReducer
});

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(actions.getRemoteData()),
  changeStateCode: (stateCode) => dispatch(changeStateCode(stateCode)),
  changeFullName: (fullName) => dispatch(changeFullName(fullName)),
  selectPark: (park) => dispatch(selectPark(park)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Trips);