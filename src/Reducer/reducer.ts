import initData from "../data/initData"
import * as ft from '../reduxSaga/action'
import * as fs from '../reduxThunk/action'
const reducer = (state=initData,{type,payload}:any) =>{
    switch(type){
        case ft.LOGIN_SAGA :
            return {
                ...state,
                isLoading:true
            }
        case fs.LOGIN_THUNK:
            return{
                ...state,
                isLoading: true,
            }
        case ft.LOGIN_SAGA_SUCCESS :
            return{
                ...state,
                username:payload.username,
                password:payload.password,
                isLogin:true,
                isLoading:false
            }
        case fs.LOGIN_THUNK_SUCCESS:
            return{
                ...state,
                username:payload.username,
                password:payload.password,
                isLoading:false,
                isLogin:true
            }
        case ft.LOGOUT_SAGA :
            return{
                ...state,
                isLoading:true
            }
        case ft.LOGOUT_SAGA_SUCCESS:
            return {
                ...state,
                username:'',
                password:'',
                isLogin:false,
                isLoading:false
            }
        case fs.LOGOUT_THUNK :
            return{
                ...state,
                username:'',
                password:'',
                isLoading:false,
                isLogin:false
            }
        default :
            return state;
    }
}

export default reducer;