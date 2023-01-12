import * as t from '../action'
import sendData from '../../callAPI/sendData'
export function login (value:any){
    return async function onLoginThunk (dispatch:any,getState:any){
        try{
            
            dispatch({
                type:t.LOGIN_THUNK
            })
            await sendData(value)
            dispatch({
                type:t.LOGIN_THUNK_SUCCESS,
                payload:value
            })
            console.log('action thunk', getState())
        }catch(err){
            console.log(err)
        }
    }
}

export function logout(){
    return function onLogoutThunk(dispatch:any,getState:any){
        dispatch({
            type:t.LOGOUT_THUNK
        })
    }
}




