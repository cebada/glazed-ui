import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, StoreEnhancer } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancers = [applyMiddleware(sagaMiddleware)];

const store = configureStore({
  reducer: rootReducer,
  enhancers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

sagaMiddleware.run(rootSaga);

export const AppDispatch = store.dispatch;

export default store;
