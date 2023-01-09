import * as t from './action'
import sendData from '../callAPI/sendData'
export function login (value:any){
    return async function login_thunk (dispatch:any,getState:any){
        try{
            console.log('action thunk', getState())
            dispatch({
                type:t.LOGIN_THUNK
            })
            await sendData(value)
            dispatch({
                type:t.LOGIN_THUNK_SUCCESS,
                payload:value
            })
        }catch(err){
            console.log(err)
        }
        
    }
}

export function logout(){
    return function logout_thunk(dispatch:any,getState:any){
        dispatch({
            type:t.LOGOUT_THUNK
        })
    }
}

