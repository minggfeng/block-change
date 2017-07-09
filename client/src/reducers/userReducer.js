const initialState = {
  openLogin: false,
  openSignup: false,
  email: '',
  wallet: '',
  debit: 0,
  password: '',
  password2: '',
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
    case 'UPDATE_USER_EMAIL':
      return Object.assign({
        ...state,
        email: action.email,
      });
    case 'UPDATE_USER_WALLET':
      return Object.assign({
        ...state,
        wallet: action.wallet,
      });
    case 'UPDATE_USER_DEBIT':
      return Object.assign({
        ...state,
        debit: action.debit,
      });
    case 'UPDATE_USER_PASSWORD':
      return Object.assign({
        ...state,
        password: action.password,
      });
    case 'VALIDATE_USER_PASSWORD':
      return Object.assign({
        ...state,
        password2: action.password2,
      });
    default:
      return state;
  }
};
