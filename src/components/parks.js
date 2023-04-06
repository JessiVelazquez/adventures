import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import superagent from 'superagent';
import { changeStateCode, changeFullName, reset } from '../store/stateCodes.js';
import { selectPark } from '../store/parkCodes.js';
import * as actions from '../store/api-actions.js';
import { adaptV4Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';


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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    margin: 'auto',
    maxHeight: 'auto',
    overflowX: 'auto'
  },
  card: {
    background: '#2d3441',
    color: 'white',
    display: 'inline-block',
    width: 220,
    height: 'auto',
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
  closePopoverButton: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent:'center',
    background: '#0e1721',
    color: '#e0dfdc',
    borderWidth: 1,
    borderColor: '#ae6754',
    borderStyle: 'solid',
    margin: 10,
    fontSize: 20,
  },
  popoverText: {
    fontSize: 32,
    fontWeight: 800
  },
  popoverSubText: {
    fontSize: 26,
    fontWeight: 800,
    padding: 10
  },
  paper: {
    background: 'linear-gradient(45deg, #cd7b5b 30%, #fdef9e 90%)',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center', 
    justifyContent:'center',
    padding: 20
  }
}));

const Parks = props => {
  const classes = useStyles();
  const { user } = useAuth0();
  const anchorRef = useRef(null);

  // ------- State Setup ------------- \\

  let selectedState = props.stateCodeReducer.activeStateCode;
  let selectedActivity = props.actReducer.selectedActivity;

  const [parkList, setParkList] = useState([]);
  const [selectedPark, setSelectedPark] = useState(null);

  // ---------- Effect hooks ----------- \\

  useEffect(() => {
    if (selectedState) {
      const URL = `${API_SERVER}/parks/${selectedState}`;
      superagent
        .get(URL)
        .then(response => {
          setParkList(response.body);
        })
        .catch((err) => {
          console.log('Error retrieving data');
        });
    } else if (selectedActivity) {
      const URL = `${API_SERVER}/activities/parks/${selectedActivity}`;
      superagent
        .get(URL)
        .then(response => {
          setParkList(response.body[0].parks);
        })
        .catch((err) => {
          console.log('Error retrieving data');
        });
    }
  }, [selectedState, selectedActivity]);

  // ------------- Methods ---------------- \\

  const addTrip = (user, park) => {
    const URL = `${API_SERVER}/trips`
      superagent
        .post(URL)
        .send({ user, park })
        .then(response => {
          console.log('success', response);
        })
        .catch((err) => {
          console.log('error: ', err);
        })
  }

  const handlePopoverOpen = (park) => {
    setSelectedPark(park);
  };
  
  const handlePopoverClose = () => {
    setSelectedPark(null);
  };


  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container className={classes.root}>
          {parkList.map((park, idx) => {
            return (
              <Card key={idx} className={classes.card}>
                <CardContent>
                  <Typography className={classes.parkCardTitle}>
                    {park.fullName}
                  </Typography>
                  <NavLink to={{
                    pathname: `/parks/:${park.parkCode}`,
                    state: park
                  }}
                  >
                    {park.images ? (
                      <img
                        className={classes.parkImage}
                        src={park.images[0] ? park.images[0].url : null}
                        alt={park.images[0] ? park.images[0].title : null}
                        width='185'
                        height='185'
                        onClick={() => {
                          props.selectPark(park.parkCode);
                          props.changeStateCode(park.states[0]);
                        }}
                      />
                    ) :
                      <Typography 
                        onClick={() => {
                          props.selectPark(park.parkCode);
                          props.changeStateCode(park.states[0]);
                        }}
                      >
                        {park.url}
                      </Typography>
                    }
                  </NavLink>
                  <div onClick={() => handlePopoverOpen(park)}>
                    <Button
                      className={classes.addTripButton}
                      aria-controls='simple-menu-act'
                      aria-haspopup='true' 
                      onClick={() => {
                        addTrip(user, park);
                      }}
                    >
                      Add Trip!
                    </Button>
                  </div>
                  <Popover
                    open={selectedPark === park}
                    onClose={handlePopoverClose}
                    anchorEl={anchorRef.current}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                  >
                    <Paper className={classes.paper}>
                      <Typography
                        className={classes.popoverText}
                      >
                        You're going to {park.fullName}!
                      </Typography>
                      <Typography
                      className={classes.popoverSubText}
                      >
                        (Go to 'My Trips' to Start Planning)
                      </Typography>
                      <Button
                        className={classes.closePopoverButton}
                        aria-controls='simple-menu-act'
                        aria-haspopup='true' 
                        onClick={() => handlePopoverClose()}
                      >
                        Close
                      </Button>
                    </Paper>
                  </Popover>
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

export default connect(mapStateToProps, mapDispatchToProps)(Parks);