import {put,call} from 'redux-saga/effects'
import * as t from '../action'



export default function* (){
    yield put({
        type:t.LOGOUT_SAGA_SUCCESS,      
    })
} 