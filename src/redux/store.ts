import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducerLogin from './Reducer/reducerLogin';
import reducerTask from './Reducer/reducerTask';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/rootSaga'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    sagaMiddleware,thunk
]


const rootReducer = combineReducers({
  reducerLogin,reducerTask
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,compose(applyMiddleware(...middlewares))
);
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);


export  {store, persistor};