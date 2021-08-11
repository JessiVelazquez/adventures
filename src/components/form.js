import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeFullName, changeStateCode, reset } from '../store/stateCodes.js';
import { selectActivity } from '../store/actCodes.js';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },});

const useStyles = makeStyles((theme) => ({
  form: {
    background: 'none',
    color: '#e0dfdc',
    marginTop: 80,
    borderWidth: .5,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
  stateMenu: {
    background: 'linear-gradient(45deg, #2d3441 30%, #0e1721 90%)',
    color: '#e0dfdc',
    borderWidth: 1,
    borderColor: '#ae6754',
    borderStyle: 'solid',
    margin: 5,
    fontSize: 18,
  },
  selection: {
    float: 'right',
    margin: 10,
    fontSize: 22,
  },
}));

const Form = props => {
  const classes = useStyles();

  const API_SERVER = 'https://adventures-backend.herokuapp.com' || 'http://localhost:3002';

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    const URL = `${API_SERVER}/activities`
    superagent
      .get(URL)
      .then(response => {
        setActivityList(response.body);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  // console.log('ACTLIST---', activityList);
  console.log('STATE ACT', props.actReducer.selectedActivity);

  return (
    <ThemeProvider position="fixed" theme={theme}>
      <Card className={classes.form} position="fixed">
        <Button position="fixed" className={classes.stateMenu} aria-contols='simple-menu' aria-haspopup='true' onClick={handleClick}>
          Search By State
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        {props.stateCodeReducer.stateCodes.map(stateCode => {
          return (
            <MenuItem onClick={() => {
              props.changeStateCode(stateCode.stateCode); //sets state of activeStateCode upon click
              setAnchorEl(null); //closes menu upon click
            }}>{stateCode.fullName}</MenuItem>
          )
        })}
        </Menu>
        <Button position="fixed" className={classes.stateMenu} aria-contols='simple-menu-act' aria-haspopup='true' onClick={handleClick2}>
          Search By Activity
        </Button>
        <Menu
          id='simple-menu-act'
          anchorEl={anchorEl2}
          keepMounted
          open={Boolean(anchorEl2)}
          onClose={handleClose2}
        >
        {activityList.map(activity => {
          return (
            <MenuItem onClick={() => {
              props.selectActivity(activity.id);
              setAnchorEl2(null);
            }}>
              {activity.name}
            </MenuItem>
          )
        })}
        </Menu>
        {props.stateCodeReducer.activeStateCode ? (
          <Typography className={classes.selection}>Selected State: {props.stateCodeReducer.activeStateCode}</Typography>
        ) : null}
      </Card>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  stateCodeReducer: state.stateCodeReducer,
  actReducer: state.actReducer
});

const mapDispatchToProps = dispatch => ({
  changeStateCode: (stateCode) => dispatch(changeStateCode(stateCode)),
  changeFullName: (fullName) => dispatch(changeFullName(fullName)),
  selectActivity: (activity) => dispatch(selectActivity(activity)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);


//Write a form that updates redux state upon form selections for state, activities, parks, whatnot.

//Use redux state to build request.query.params to send to make axios API calls to back end routes.

//IDEA - have user select park, then update state to that parkCode, then be able to search for campgrounds, activities, alerts, etc based on that park.