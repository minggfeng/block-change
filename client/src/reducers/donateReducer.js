const initialState = {
  showDonate: false,
  projectInFocus: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DONATE':
      return Object.assign({}, state, { showDonate: !state.showDonate });

    case 'SET_PROJECT_IN_FOCUS':
      return Object.assign({}, state, { projectInFocus: action.projectInFocus });

    default:
      return state;
  }
};
