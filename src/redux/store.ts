import {  createStore,applyMiddleware } from "@reduxjs/toolkit";
import reducers from "./reducer";
import thunk from 'redux-thunk'


const middleware = [thunk]
const store = createStore(
    reducers, applyMiddleware(...middleware)
)

export default store;