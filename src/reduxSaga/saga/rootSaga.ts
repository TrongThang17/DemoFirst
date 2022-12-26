import {all,takeEvery,takeLatest} from 'redux-saga/effects'
import loginSaga from './loginSaga'
import logoutSaga from './logoutSaga'


const saga =function* (){
    yield all([
        takeLatest('LOGIN',loginSaga),
        takeLatest('LOGOUT',logoutSaga)
    ])
}

export default saga;