import {put,call} from 'redux-saga/effects'
import * as t from '../action'
import sendData from '../../callAPI/sendData'




function* onLoginSaga (action:any):any{
    sendData(action.payload)
    yield put({type:t.LOGIN_SAGA_SUCCESS,payload:action.payload})
    console.log('here are actions ', action)
} 

function* onLogoutSaga (){
    yield put({
        type:t.LOGOUT_SAGA_SUCCESS,      
    })
} 

export  {
    onLoginSaga, onLogoutSaga
}