# adventures

Author: Jessi Velazquez

Deployed Link: [https://adventures-front-end.herokuapp.com/](https://adventures-front-end.herokuapp.com/)

**This appication is currently in its eary stages of development, and thus this README is currently designated primarily for developer notes at this time**

## Idea

**MVP:**

This will be an application where a user can plan their adventures in National Parks based on criteria they set. They search for parks based on criteria, and see information about the parks. They can add parks, activites, and campgrounds to their favorite list, which is attached to their user account. The data is being pulled from the National Parks Service public API.

- Users can add notes/pictures to their favorite activities - trip reports

- Users can build out their profile/about me section

- Users can use GPS to track their trips

- Users can connect with other users and browse their favorites/trip reports


## Dev Resources

**TODO**

- Build out SinglePark component based on the singlePark data coming back from API.

- Use Material UI Image List horizontal for images

- Improve speed of API response of parks by state - believe this could be improved by writing logic to get only the required data (image and park name) in the back end route to NPS API. (in the ```.then``` block)

**NOTES:**

- User Logs In

- User searches parks by state

- User clicks on a park, goes to page about that park

  - do this by updating a redux state item "activePark" with the ```park.parkCode``` from the park object in the return of the parks component. See products.js line 103 in storefront

  - Reducer/Action takes that park code and sets state.See "add item" functions in simplecart.js in storefront

**BUGS:**

- Line 17 in simplecart.js in storefront is the answer to the state.activeParkFullName bug - the ```...state.cartList``` bit - probably gotta call out the individual state item since there are now more than one.

**Resources:**

- NPS API - [https://www.nps.gov/subjects/developer/get-started.htm](https://www.nps.gov/subjects/developer/get-started.htm)

Custom Google Fonts: [https://blog.logrocket.com/3-ways-to-add-custom-fonts-to-your-material-ui-project/](https://blog.logrocket.com/3-ways-to-add-custom-fonts-to-your-material-ui-project/)

## Tech Used

React
Node.js
Redux
Auth0
Material UI


......
