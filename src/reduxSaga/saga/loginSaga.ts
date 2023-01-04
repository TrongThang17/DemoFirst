import {put,call} from 'redux-saga/effects'
import * as t from '../action'
import sendData from '../callAPI/sendData'




export default function* (action:any):any{
    sendData(action)
    yield put({type:t.LOGIN_SAGA_SUCCESS,payload:action.payload})
    console.log('here are actions ', action)
} 