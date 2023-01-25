import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { dataReducer } from "./data/reducer";

import { optionsReducer } from "./option/reducer";

const reducer = combineReducers({
  options: optionsReducer,
  data: dataReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
