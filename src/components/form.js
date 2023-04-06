import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeFullName, changeStateCode, reset } from '../store/stateCodes.js';
import { selectActivity } from '../store/actCodes.js';
import superagent from 'superagent';
import { adaptV4Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(adaptV4Theme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },}));

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    color: '#e0dfdc',
    marginTop: 20,
    marginBottom: 20
  },
  stateMenu: {
    background: 'linear-gradient(45deg, #2d3441 30%, #0e1721 90%)',
    color: '#e0dfdc',
    borderWidth: 1,
    borderColor: '#ae6754',
    borderStyle: 'solid',
    margin: 5,
    marginLeft: 30,
    marginRight: 30,
    padding: 12,
    fontSize: 20
  },
  formTitle: {
    opacity: '75%',
    color: 'black',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 800,
    paddingTop: 180
  },
  selection: {
    float: 'right',
    margin: 10,
    fontSize: 22,
  },
}));

const Form = props => {
  const classes = useStyles();

  const API_SERVER = 'https://adventures-back-end-jessi.herokuapp.com' || 'http://localhost:3002';

  const [anchorElState, setAnchorElState] = React.useState(null);

  const handleClickState = (event) => {
    setAnchorElState(event.currentTarget);
  };

  const handleCloseState = () => {
    setAnchorElState(null);
  };

  const [anchorElActivity, setAnchorElActivity] = React.useState(null);

  const handleClickActivity = (event) => {
    setAnchorElActivity(event.currentTarget);
  };

  const handleCloseActivity = () => {
    setAnchorElActivity(null);
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

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Typography className={classes.formTitle}>
          {props.stateCodeReducer.activeStateFullName ? `${props.stateCodeReducer.activeStateFullName}'s National Parks:` : 'Browse Parks to Get Started!'}
        </Typography>
        <Card className={classes.form}>
          <Button 
            className={classes.stateMenu}
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClickState}
          >
            Browse By State
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorElState}
            keepMounted
            open={Boolean(anchorElState)}
            onClose={handleCloseState}
          >
          {props.stateCodeReducer.stateCodes.map((stateCode, idx) => {
            return (
              <MenuItem key={idx} onClick={() => {
                props.changeStateCode(stateCode.stateCode); //sets state of activeStateCode upon click
                props.changeFullName(stateCode.fullName); //sets state of activeStateFullName
                setAnchorElState(null); //closes menu upon click
              }}>{stateCode.fullName}</MenuItem>
            )
          })}
          </Menu>
          <Button className={classes.stateMenu} aria-controls='simple-menu-act' aria-haspopup='true' onClick={handleClickActivity}>
            Browse By Activity
          </Button>
          <Menu
            id='simple-menu-act'
            anchorEl={anchorElActivity}
            keepMounted
            open={Boolean(anchorElActivity)}
            onClose={handleCloseActivity}
          >
          {activityList.map((activity, idx) => {
            return (
              <MenuItem key={idx} onClick={() => {
                props.selectActivity(activity.id);
                setAnchorElActivity(null);
              }}>
                {activity.name}
              </MenuItem>
            )
          })}
          </Menu>
        </Card>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

const mapStateToProps = state => ({
  stateCodeReducer: state.stateCodeReducer,
  stateFullNameReducer: state.stateFullNameReducer,
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