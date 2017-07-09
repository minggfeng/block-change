const initialState = {
  openLogin: false,
  openSignup: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return Object.assign({
        ...state,
        openLogin: action.openLogin,
      });
    case 'CLOSE_LOGIN':
      return Object.assign({
        ...state,
        openLogin: action.openLogin,
      });
    case 'OPEN_SIGNUP':
      return Object.assign({
        ...state,
        openSignup: action.openSignup,
      });
    case 'CLOSE_SIGNUP':
      return Object.assign({
        ...state,
        openSignup: action.openSignup,
      });
    default:
      return state;
  }
};
