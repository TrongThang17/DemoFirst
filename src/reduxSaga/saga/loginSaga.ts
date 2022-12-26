import {put,call} from 'redux-saga/effects'
import * as t from '../action'
function* login (username:string,password:string) {
    yield put({
        type:t.LOGIN_SUCCESS,
        payload:{
            username:username,
            password:password
        }
    })
}


export default function* (action:any){
    yield call(login,action.payload.username, action.payload.password)
} 