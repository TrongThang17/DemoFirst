import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducers from '../reduxThunk/reducer';

const rootReducer = combineReducers({
   loginReducers
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export default store