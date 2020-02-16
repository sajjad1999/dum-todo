import { createStore, combineReducers, applyMiddleware } from "redux";
import { nameReducer } from "./reducers/index";

const checkName = state => next => action => {
  if (action.name === state.getState().name) {
    return console.log("error");
  }
  next(action);
};

const store = createStore(
  combineReducers({
    name: nameReducer
  }),
  applyMiddleware(checkName)
);

export default store;
