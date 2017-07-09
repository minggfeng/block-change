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
  console.log('action', projects);
  return {
    type: 'SAVE_PROJECTS',
    projects,
  };
};
