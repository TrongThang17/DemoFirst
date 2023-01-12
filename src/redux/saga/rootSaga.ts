import {all,takeLatest} from 'redux-saga/effects'
import {onLoginSaga,onLogoutSaga} from './authSaga'
import * as t from '../action'

const saga =function* (){
    yield all([
        takeLatest(t.LOGIN_SAGA,onLoginSaga),
        takeLatest(t.LOGOUT_SAGA,onLogoutSaga)
    ])
}

export default saga;