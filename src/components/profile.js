import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
    backgroundColor: 'gray',
  },
  userName: {
    fontSize: 40,
  },
  userProfile: {
    display: 'flex',
  },
  userAvatar: {
    margin: 30,
  }
}));

const Profile = (props) => {
  const classes = useStyles();

  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  if (isLoading) {
    return <div>Loading...</div>
  }

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
                <Typography>
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
