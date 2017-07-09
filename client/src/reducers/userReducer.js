const initialState = {
  openLogin: false,
  openSignup: false,

};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return Object.assign(state, action.openLogin);

    default:
      return state;
  }
};
