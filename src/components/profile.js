import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { adaptV4Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(adaptV4Theme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },}));

console.log('theme', theme);

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
  },
  profileHeader: {
    fontSize: 40,
    textAlign: 'center',
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  return isAuthenticated && (
    <StyledEngineProvider injectFirst>
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
            <Typography className={classes.profileHeader}>
              Coming Soon: Account Settings
            </Typography>
          </CardActionArea>
        </Card>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Profile;
