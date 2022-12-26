import {put,call} from 'redux-saga/effects'
import * as t from '../action'
function* logout () {
    yield put({
        type:t.LOGOUT_SUCCESS,      
    })
}


export default function* (){
    yield call(logout)
} 