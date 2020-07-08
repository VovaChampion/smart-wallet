import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'expenses',
  storage: AsyncStorage,
  // whitelist: ['expenses'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

// const middleware = applyMiddleware(thunk, logger);
const middleware = applyMiddleware(thunk);

const store = createStore(pReducer, middleware);

const persistor = persistStore(store);

export { persistor, store };