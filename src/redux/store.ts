import {  createStore,applyMiddleware } from "@reduxjs/toolkit";
import reducers from "./reducer";

const store = createStore(
    reducers
)

export default store;