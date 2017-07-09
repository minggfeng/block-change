// export const sampleAction = (/* input */) => {
//   return {
//     type: 'SAMPLE_ACTION',
//     // input
//   };
// };


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
