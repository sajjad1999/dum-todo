const defaultState = "sajjad";

const nameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.name;
    default:
      return state;
  }
};

export { nameReducer };
