import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';
import { adaptV4Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';

const theme = createTheme(adaptV4Theme({
  typography: {
    fontFamily: [
      'Zen Loop',
      'cursive',
    ].join(','),
  },}));

const API_SERVER = 'https://adventures-back-end-jessi.herokuapp.com' || 'http://localhost:3002';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 200,
  },
  singleParkCard: {
    background: 'linear-gradient(45deg, #2d3441 30%, #162230 90%)',
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    alignContent: 'center',
  },
  parkTitle: {
    fontSize: 36,
    textAlign: 'center',
    color: 'whitesmoke',
  },
  parkSubTitle: {
    color: 'whitesmoke',
    fontSize: 24,
  },
  imageListItem: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderRadius: 3,
    margin: 5,
  },
  chip: {
    margin: 5,
  },
  actList: {
    width: '100%',
  },
}));

const SinglePark = (props) => {
  const classes = useStyles();

  let selectedState = props.stateCodeReducer.activeStateCode;
  let activePark = props.parkCodeReducer.activeParkCode;

  const [park, setPark] = useState([]);
  const [images, setImages] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const URL = `${API_SERVER}/parks/${selectedState}/${activePark}`
    superagent
      .get(URL)
      .then(response => {
        setPark(response.body[0]);
        setImages(response.body[0].images);
        setActivities(response.body[0].activities);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <Container className={classes.root}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Card className={classes.singleParkCard}>
            <CardContent>
              <Typography className={classes.parkTitle}>
                {park.fullName}
              </Typography>
              <Typography className={classes.parkSubTitle}>
                Photo Gallery:
              </Typography>
              <ImageList className={classes.imageList} cols={2.5}>
                {images.map(image => {
                  return (
                    <ImageListItem key={image.url} className={classes.imageListItem}>
                      <img src={image.url} alt={image.title}/>
                      <ImageListItemBar
                        title={image.title}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                        actionIcon={
                          <IconButton aria-label={`star ${image.title}`} size="large">
                            <StarBorderIcon id="starIcon" className={classes.title} />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  );
                })}
              </ImageList>
              <Typography className={classes.parkSubTitle}>
                Activities:
              </Typography>
              <List className={classes.actList}>
                {activities.map(activity => {
                  return (
                    <Chip className={classes.chip} label={activity.name} />
                  )
                })}
              </List>
            </CardContent>
          </Card>
        </ThemeProvider>
      </StyledEngineProvider>
    </Container>
  );
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