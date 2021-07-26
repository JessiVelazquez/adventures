import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';
import { changeStateCode, changeFullName, reset } from '../store/stateCodes.js';
import * as actions from '../store/api-actions.js';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Auth0Context } from '@auth0/auth0-react';

const API_SERVER = 'http://localhost:3002';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 60,
    maxHeight: 500,
    overflowX: 'auto',
  },
  card: {
    display: 'inline-block',
    width: 220,
    height: 220,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
  parkCardTitle: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 12,
  },
  parkImage: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent:'center'
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
    }, [selectedState]);
  }

  useSelectedState()

  console.log('PARK LIST', parkList);
  // console.log('FULL NAME', selectedStateFullName);

  return (
    <Container className={classes.root}>
      <Typography position="fixed">Selected State: {selectedState}</Typography>
      {parkList.map(park => {
        return (
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={park.images[0].url}
              title={park.images[0].title}
            />
            <CardContent>
              <Typography className={classes.parkCardTitle}>
                {park.fullName}
              </Typography>
              <img
                className={classes.parkImage}
                src={park.images[0].url}
                alt={park.images[0].title}
                width='150'
                height='150'
              />
            </CardContent>
          </Card>
          // <p>{park.fullName}</p>
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