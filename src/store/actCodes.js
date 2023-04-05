let initialState = {
  selectedActivity: ''
}

// ========= REDUCER ============ \\

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'SELECT ACT':
      console.log({payload});
      return { ...state, selectedActivity: payload}

      default:
        return state;
  }
}

// ========= ACTIONS ============ \\

export const selectActivity = (activity) => {
  return {
    type: 'SELECT ACT',
    payload: activity
  }
}