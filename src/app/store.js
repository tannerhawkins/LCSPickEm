import { combineReducers, createStore } from "@reduxjs/toolkit";
import accountReducer from "./account/reducers.js";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const allReducers = combineReducers({
  account: accountReducer,
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
