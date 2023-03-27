# adventures

Author: Jessi Velazquez

Deployed Link: [https://adventures-jessi.herokuapp.com/](https://adventures-jessi.herokuapp.com/) - NOTE please try refreshing page if this link displays an error on first load, working on solving this problem.

Back End Repo: [https://github.com/JessiVelazquez/adventures_backEnd](https://github.com/JessiVelazquez/adventures_backEnd)

Back End Deployment: [https://adventures-back-end-jessi.herokuapp.com/](https://adventures-back-end-jessi.herokuapp.com/)

Routes:
- /users

**This application is currently in its early stages of development, and thus this README is currently designated primarily for developer notes at this time**

## Idea

**MVP:**

This will be an application where a user can plan their adventures in National Parks based on criteria they set. They search for parks based on criteria, and see information about the parks. They can add parks, activities, and campgrounds to their favorite list, which is attached to their user account. The data is being pulled from the National Parks Service public API.

- Users can add notes/pictures to their favorite activities - trip reports

- Users can build out their profile/about me section

- Users can use GPS to track their trips

- Users can connect with other users and browse their favorites/trip reports


## Dev Resources

**TODO**

1. Continue to build out SinglePark component based on the singlePark data coming back from API. Render different parts of API response on page => these may eventually become dynamic components.

  - Make Modal pop up on clicking of images.

  - Make activity chips click responsive => add them as "interests" in user profile.

  - Camping/lodging component either on SinglePark or linked to from button on SinglePark.

  - Current alerts either in modal, accordian, or separate component.

2. Make Form component visible under header on all routes except ```/profile```.

3. Improve speed of API response of parks by state - believe this could be improved by writing logic to get only the required data (image and park name) in the back end route to NPS API (in the ```.then``` block).

4. Start to build out profile "favorites" list - where a user can add any park, campground, activity etc to their favorites, and see favorites in their profile page.

  - "Favorites" will be a precursor to the trip planner/calender app => this is down the road.

5. Build different search criteria?

  - Build out form component to include more search menus => by activity (```/activities/parks/id={}```), by topic?

**NOTES:**

- User Logs In

- User searches parks by state

- User clicks on a park, goes to page about that park

  - do this by updating a redux state item "activePark" with the ```park.parkCode``` from the park object in the return of the parks component. See products.js line 103 in storefront.

  - Reducer/Action takes that park code and sets state. See "add item" functions in simplecart.js in storefront.

**BUGS:**

- Line 17 in simplecart.js in storefront is the answer to the state.activeParkFullName bug - the ```...state.cartList``` bit - probably gotta call out the individual state item since there are now more than one.

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
