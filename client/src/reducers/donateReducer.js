const initialState = {
  showDonate: false,
  projectInFocus: {},
  balance: '',
  projectBalance: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DONATE':
      return Object.assign({}, state, { showDonate: !state.showDonate });

    case 'SET_PROJECT_IN_FOCUS':
      return Object.assign({}, state, { projectInFocus: action.projectInFocus });

    case 'SET_BALANCE':
      return Object.assign({}, state, { balance: action.balance });

    case 'SET_PROJECT_BALANCE':
      return Object.assign({}, state, { projectBalance: action.projectBalance });

    default:
      return state;
  }
};
