import React, { useImperativeHandle } from 'react';
import { connect } from 'react-redux';
import { changeStateCode, reset } from '../store/stateCodes.js';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  stateMenu: {
    marginTop: 80,
    display: 'flex',
  },
}));

const Form = props => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log('ActiveStateCode', props.stateCodeReducer.activeStateCode);

  return (
    <div>
      <Button className={classes.stateMenu} aria-contols='simple-menu' aria-haspopup='true' onClick={handleClick}>
        Select State
      </Button>
      <Menu
        id='simple-menu'
        annchorEl={anchorEl}
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
    </div>
  );
};

const mapStateToProps = state => ({
  stateCodeReducer: state.stateCodeReducer
});

const mapDispatchToProps = dispatch => ({
  changeStateCode: (stateCode) => dispatch(changeStateCode(stateCode)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);


//Write a form that updates redux state upon form selections for state, activities, parks, whatnot.

//Use redux state to build request.query.params to send to make axios API calls to back end routes.

//IDEA - have user select park, then update state to that parkCode, then be able to search for campgrounds, activities, alerts, etc based on that park.