import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import loginReducers from '../reduxThunk/reducer';
import loginReducer from '../reduxSaga/reducer/reducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../reduxSaga/saga/rootSaga'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    sagaMiddleware,thunk
]


const rootReducer = combineReducers({
   loginReducers, loginReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,compose(applyMiddleware(...middlewares))
);
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga);


export  {store,persistor};