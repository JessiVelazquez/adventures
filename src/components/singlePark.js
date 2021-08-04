import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },});

  const API_SERVER = 'https://adventures-backend.herokuapp.com' || 'http://localhost:3002';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 200,
  },
}));

const SinglePark = (props) => {
  const classes = useStyles();

  let selectedState = props.stateCodeReducer.activeStateCode;
  let activePark = props.parkCodeReducer.activeParkCode;

  // console.log('selectedState', props.stateCodeReducer.activeStateCode);
  // console.log('activepark', activePark);
  // console.log('STATE', props.parkCodeReducer);

  const REACT_APP = 'http://localhost:3000';

  const [park, setPark] = useState([]);  

  useEffect(() => {
    const URL = `${API_SERVER}/parks/${selectedState}/${activePark}`
    superagent
      .get(URL)
      .then(response => {
        setPark(response.body[0]);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  console.log('single park ---', park);

  return (
    <Container className={classes.root}>
      <ThemeProvider theme={theme}>
        <Card>
          <CardMedia />
          <CardContent>
            <Typography>
              {park.fullName}
            </Typography>
          </CardContent>
        </Card>
      </ThemeProvider>
    </Container>
  )
}

const mapStateToProps = state => ({
  stateCodeReducer: state.stateCodeReducer,
  parkCodeReducer: state.parkCodeReducer
});

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(actions.getRemoteData()),
  changeStateCode: (stateCode) => dispatch(changeStateCode(stateCode)),
  changeFullName: (fullName) => dispatch(changeFullName(fullName)),
  selectPark: (park) => dispatch(selectPark(park)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePark);