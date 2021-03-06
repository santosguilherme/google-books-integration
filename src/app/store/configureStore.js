import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }

  store.runSaga = sagaMiddleware.run;

  return store;
}
