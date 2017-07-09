const initialState = {
  projects: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_PROJECTS':
      return Object.assign({}, state, { projects: action.projects });
    case 'ADD_PROJECTS':
      return Object.assign({}, state, { projects: state.projects.concat(action.newProjects) });
    default:
      return state;
  }
};
