import {all,takeLatest} from 'redux-saga/effects'
import loginSaga from './loginSaga'


const saga =function* (){
    yield all([
        takeLatest('LOGIN',loginSaga)
    ])
}

export default saga;