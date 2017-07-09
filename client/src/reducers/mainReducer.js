const initialState = {
  projects: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_PROJECTS':
      return Object.assign(state, action.projects);

    default:
      return state;
  }
};
