import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import loginReducers from '../reduxThunk/reducer';
import loginReducer from '../reduxSaga/reducer/reducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../reduxSaga/saga/rootSaga'


const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    sagaMiddleware,thunk
]

const rootReducer = combineReducers({
   loginReducers, loginReducer
});

const store = createStore(
  rootReducer,compose(applyMiddleware(...middlewares))
  
);

sagaMiddleware.run(rootSaga);


export default store;