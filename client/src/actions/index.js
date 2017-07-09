// userReducerActions
export const resetUser = () => {
  return {
    type: 'RESET_USER',
  };
};

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
};

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

export const toggleDonate = () => {
  return {
    type: 'TOGGLE_DONATE',
  };
};

export const setProjectInFocus = (projectInFocus) => {
  return {
    type: 'SET_PROJECT_IN_FOCUS',
    projectInFocus,
  };
};

export const userLogin = () => {
  return {
    type: 'USER_LOGIN',
    loggedin: true,
  };
};

export const userLogout = () => {
  return {
    type: 'USER_LOGOUT',
    loggedin: false,
  };
};

// currentUser actions
export const updateCurrentUser = (userId, password, email, wallet, debit) => {
  return {
    type: 'UPDATE_CURRENT_USER',
    userId, 
    password,
    email,
    wallet,
    debit,
  };
};
