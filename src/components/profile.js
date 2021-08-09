import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },});

const useStyles = makeStyles((theme) => ({
  userCard: {
    marginTop: 30,
    background: 'linear-gradient(45deg, #2d3441 30%, #0e1721 90%)',
    color: '#e8e6e3',
    borderWidth: 1.5,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
  userName: {
    fontSize: 40,
  },
  userEmail: {
    fontSize: 25,
  },
  userProfile: {
    display: 'flex',
  },
  userAvatar: {
    margin: 30,
    width: theme.spacing(9),
    height: theme.spacing(9),
  }
}));

const Profile = (props) => {
  const classes = useStyles();

  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  return (
    isAuthenticated && (
      <ThemeProvider theme={theme}>
        <Card id="profileCard" className={classes.userCard}>
          <CardActionArea>
            <div className={classes.userProfile}>
              <Avatar className={classes.userAvatar} alt="profileImage" src={user.picture} />
              <CardContent>
                <Typography className={classes.userName}>
                  {user.name}
                </Typography>
                <Typography className={classes.userEmail}>
                  {user.email}
                </Typography>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      </ThemeProvider>
    )
  );
};

export default Profile;
