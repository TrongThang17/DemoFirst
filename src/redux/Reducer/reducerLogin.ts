import initData from "../data/initData"
import * as f from '../action'
import { formToJSON } from "axios"

const reducerLogin = (state = initData, { type, payload }: any) => {
    switch (type) {
        case f.LOGIN_SAGA:
            return {
                ...state,
                isLoading: true
            }
        case f.LOGIN_THUNK:
            return {
                ...state,
                isLoading: true,
            }
        case f.LOGIN_SAGA_SUCCESS:
            return {
                ...state,
                username: payload.username,
                password: payload.password,
                // isLogin:true,
                // isLoading:false
            }
        case f.LOGIN_THUNK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLogin: true
            }
        case f.LOGOUT_SAGA:
            return {
                ...state,
                isLoading: true
            }
        case f.LOGOUT_SAGA_SUCCESS:
            return {
                ...state,
                username: '',
                password: '',
                isLogin: false,
                isLoading: false
            }
        case f.LOGOUT_THUNK:
            return {
                isLoading: true,
            }
        case f.LOGOUT_THUNK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLogin: false
            }
        case f.SIGNUP_THUNK:
            return {
                isLoading: true,

            }
        case f.SIGNUP_THUNK_SUCCESS:
            return {
                isLoading: false,
                isLogin: true
            }
        case f.ERROR:
            return {
                isLoading: false
            }
        default:
            return state;
    }
}

export default reducerLogin;