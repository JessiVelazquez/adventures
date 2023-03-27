import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import superagent from 'superagent';
import { changeStateCode, changeFullName, reset } from '../store/stateCodes.js';
import { selectPark } from '../store/parkCodes.js';
import * as actions from '../store/api-actions.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },});

const API_SERVER = 'https://adventures-back-end-jessi.herokuapp.com' || 'http://localhost:3002';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    maxHeight: 500,
    overflowX: 'auto',
  },
  card: {
    background: '#2d3441',
    color: 'white',
    display: 'inline-block',
    width: 220,
    height: 260,
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
}));

const Parks = props => {
  const classes = useStyles();

  //-------State Items-------------\\
  let selectedState = props.stateCodeReducer.activeStateCode;
  let selectedActivity = props.actReducer.selectedActivity;
  // let selectedStateFullName = props.stateCodeReducer.activeStateFullName;
  // let activePark = props.parkCodeReducer.activeParkCode;

  const [parkList, setParkList] = useState([]);

  const useSelectedState = () => {
    useEffect(() => {
      if (selectedState) {
        const URL = `${API_SERVER}/parks/${selectedState}`
        superagent
          .get(URL)
          .then(response => {
            setParkList(response.body);
          })
          .catch((err) => {
            console.log('Error retrieving data');
          })
      }
    }, [selectedState]);
  }

  const useSelectedActivity = () => {
    useEffect(() => {
      if (selectedActivity) {
        const URL = `${API_SERVER}/activities/parks/${selectedActivity}`
        superagent
          .get(URL)
          .then(response => {
            console.log('RS BODY', response.body[0].parks);
            setParkList(response.body[0].parks);
          })
          .catch((err) => {
            console.log('Error retrieving data');
          })
      }
    }, [selectedActivity]);
  }

  useSelectedState();
  useSelectedActivity();

  return (
    <Container className={classes.root}>
      {parkList.map(park => {
        return (
          <ThemeProvider theme={theme}>
            <Card className={classes.card}>
              <CardMedia className={classes.media}/>
              <CardContent>
                <Typography className={classes.parkCardTitle}>
                  {park.fullName}
                </Typography>
                <NavLink to={{
                  pathname: `/parks/:${park.parkCode}`,
                  state: park,
                }}
                >
                {park.images ? (
                  <img
                    className={classes.parkImage}
                    src={park.images[0] ? park.images[0].url : null}
                    alt={park.images[0] ? park.images[0].title : null}
                    width='185'
                    height='185'
                    onClick={() => props.selectPark(park.parkCode)}
                  />
                ) :
                  <Typography 
                    onClick={() => {
                      props.selectPark(park.parkCode);
                      props.changeStateCode(park.states[0]);
                    }}>
                    {park.url}
                  </Typography>
                }
                </NavLink>
              </CardContent>
            </Card>
          </ThemeProvider>
        )
      })}
    </Container>
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