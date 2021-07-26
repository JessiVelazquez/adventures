import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';
import { changeStateCode, changeFullName, reset } from '../store/stateCodes.js';
import * as actions from '../store/api-actions.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const API_SERVER = 'http://localhost:3002';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
  },
}));

const Parks = props => {
  const classes = useStyles();

  let selectedState = props.stateCodeReducer.activeStateCode;
  let selectedStateFullName = props.stateCodeReducer.activeStateFullName;

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
    }, []);
  }

  useSelectedState();

  console.log('PARK LIST', parkList);

  return (
    <Container className={classes.root}>
      <Typography>Selected State: {selectedState}</Typography>
      {parkList.map(park => {
        return (
          <p>{park.fullName}</p>
        )
      })}
    </Container>
  );
};

const mapStateToProps = state => ({
  stateCodeReducer: state.stateCodeReducer
});

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(actions.getRemoteData()),
  changeStateCode: (stateCode) => dispatch(changeStateCode(stateCode)),
  changeFullName: (fullName) => dispatch(changeFullName(fullName)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Parks);

// set up axios calls for API queries, using the params listed on NPS API side for query params (stateCode, parkCode, limit, etc)