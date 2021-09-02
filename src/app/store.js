import { combineReducers, configureStore } from '@reduxjs/toolkit';
import accountReducer from './account/reducers.js';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const reducer = combineReducers({accountReducer})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore(persistedReducer);
export const persistor = persistStore(store);
