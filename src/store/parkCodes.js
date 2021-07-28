let initialState = {
  activeParkCode: 'yo'
}

//===========REDUCER===========\\
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'SELECT PARK':
      console.log({payload});
      return { ...state, activeParkCode: payload}

      default:
        return state;
  }
}

//==========ACTIONS===========||
export const selectPark = (park) => {
  return {
    type: 'SELECT PARK',
    payload: park
  }
}
