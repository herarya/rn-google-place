import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import {rootSaga} from './sagas/root-saga';

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);
// TO-DO: crete store is deprecated , please used RTK later
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;
