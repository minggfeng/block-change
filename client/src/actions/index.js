// userReducerActions
export const openLoginDialog = () => {
  return {
    type: 'OPEN_LOGIN',
    openLogin: true,
  };
};

export const closeLoginDialog = () => {
  return {
    type: 'CLOSE_LOGIN',
    openLogin: false,
  };
};

export const openSignupDialog = () => {
  return {
    type: 'OPEN_SIGNUP',
    openSignup: true,
  };
};

export const closeSignupDialog = () => {
  return {
    type: 'CLOSE_SIGNUP',
    openSignup: false,
  };
};

export const saveProjects = (projects) => {
  return {
    type: 'SAVE_PROJECTS',
    projects,
  };
};

export const updateUserEmail = (email) => {
  return {
    type: 'UPDATE_USER_EMAIL', 
    email,
  };
};

export const updateUserWallet = (wallet) => {
  return {
    type: 'UPDATE_USER_WALLET', 
    wallet,
  };
};

export const updateUserDebit = (debit) => {
  return {
    type: 'UPDATE_USER_DEBIT',
    debit,
  }
}
export const updateUserPassword = (password) => {
  return {
    type: 'UPDATE_USER_PASSWORD', 
    password,
  };
};

export const validateUserPassword = (password2) => {
  return {
    type: 'VALIDATE_USER_PASSWORD', 
    password2,
  };
};