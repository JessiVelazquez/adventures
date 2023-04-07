# adventures

Author: Jessi Velazquez

Deployed Link: [https://adventures-jessi.herokuapp.com/](https://adventures-jessi.herokuapp.com/)

Back End Repo: [https://github.com/JessiVelazquez/adventures_backEnd](https://github.com/JessiVelazquez/adventures_backEnd)

Back End Deployment: [https://adventures-back-end-jessi.herokuapp.com/](https://adventures-back-end-jessi.herokuapp.com/)

Routes:
- /users
- /trips/:user (example ```/trips?email=myemail@gmail.com```

**This application is currently in its early stages of development, and thus this README is currently designated primarily for developer notes at this time**

## Idea

**MVP:**

This will be an application where a user can plan their adventures in National Parks based on criteria they set. They search for parks based on criteria, and see information about the parks. They can add parks to their list of trips, and add events to the trip such as hikes, lodging, and various other adventes. Trips are viewable in the 'My Trips' section of the front end. The data is being pulled from the National Parks Service public API.

Some future ideas:
- Users can add notes/pictures to their favorite activities - trip reports

- Users can build out their profile/about me section

- Trip reports for hikes, etc

- Users can connect with other users and browse their favorites/trip reports


## Dev Resources

**TODO**

1. Continue to build out SinglePark component based on the singlePark data coming back from API. Render different parts of API response on page => these may eventually become dynamic components.

  - Make activity chips click responsive => add them as "interests" in user profile.

  - Camping/lodging component either on SinglePark or linked to from button on SinglePark.

  - Check for current weather reports at parks.

3. Improve speed of API response of parks by state - believe this could be improved by writing logic to get only the required data (image and park name) in the back end route to NPS API (in the ```.then``` block).

5. Build different search criteria?

  - Build out form component to include more search menus => by activity (```/activities/parks/id={}```), by topic?


**Resources:**

- NPS API - [https://www.nps.gov/subjects/developer/get-started.htm](https://www.nps.gov/subjects/developer/get-started.htm)

Custom Google Fonts: [https://blog.logrocket.com/3-ways-to-add-custom-fonts-to-your-material-ui-project/](https://blog.logrocket.com/3-ways-to-add-custom-fonts-to-your-material-ui-project/)

## Tech Used

React
Node.js
Redux
MongoDB (Back End)
Auth0
Material UI
Heroku
