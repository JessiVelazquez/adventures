let initialState = {
  activeParkCode: ''
}

// =========== REDUCER =========== \\

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'SELECT PARK':
      return { ...state, activeParkCode: payload}

      default:
        return state;
  }
}

// ========== ACTIONS =========== ||

export const selectPark = (park) => {
  return {
    type: 'SELECT PARK',
    payload: park
  }
}
