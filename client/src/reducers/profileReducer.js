const initialState = {
  currentUserId: '',
  currentUserPassword: '',
  currentUserWallet: '',
  currentUserDebit: '',
  currentUserEmail: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_USER':
      return Object.assign({
        currentUserId: action.userId,
        currentUserPassword: action.password,
        currentUserWallet: action.wallet,
        currentUserDebit: action.debit,
        currentUserEmail: action.email,
      });
    default:
      return state;
  };

}