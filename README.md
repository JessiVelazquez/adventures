# adventures

Author: Jessi Velazquez

**This appication is currently in its eary stages of development, and thus this README is currently designated for developer notes at this time**

## Idea

**MVP:**

This will be an application where a user can get recommendations for hiking adventures based on criteria they set. They can add the hikes to their favorite list, which is attached to their user account. The hikes will be queried from a public API.

**MORE:**

- Users can add notes/pictures to their favorite hikes - trip reports

- Users can build out their profile/about me section

- Users can use GPS to track their hikes

- Users can connect with other users and browse their favorites/trip reports


## Dev Resources

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

<!-- Hiker API: 
[https://www.trailforks.com/about/api/](https://www.trailforks.com/about/api/)

[https://documenter.getpostman.com/view/2071749/RzZDiGp8](https://documenter.getpostman.com/view/2071749/RzZDiGp8) -->


## Tech Used

React
Node.js
Redux
Auth0
Material UI


......
