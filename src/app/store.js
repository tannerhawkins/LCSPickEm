import { combineReducers, createStore } from "@reduxjs/toolkit";
import accountReducer from "./account/reducers.js";
import classReducer from "./class/reducers.js";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import moduleReducer from "./module/reducers.js";
import appReducer from "./reducers.js";

const allReducers = combineReducers({
  account: accountReducer,
  class: classReducer,
  module: moduleReducer,
  app: appReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_STATE") {
    state = undefined;
  }

  return allReducers(state, action);
};

export const clearState = () => {
  return {
    type: "CLEAR_STATE",
  };
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
