import {all,takeEvery,takeLatest} from 'redux-saga/effects'
import loginSaga from './loginSaga'
import logoutSaga from './logoutSaga'
import * as t from '../action'

const saga =function* (){
    yield all([
        takeLatest(t.LOGIN_SAGA,loginSaga),
        takeLatest('LOGOUT',logoutSaga)
    ])
}

export default saga;