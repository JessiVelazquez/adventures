import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LoginButton from './loginbutton';


const useStyles = makeStyles((theme) => ({

}));

function Header(props) {
  const classes = useStyles();


  return (
    <div>
      <LoginButton />
    </div>
  )
}

export default Header;