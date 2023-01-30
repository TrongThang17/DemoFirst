import * as t from '../action'
import { getAuth, deleteUser } from "firebase/auth"
import {auth} from '../../Firebase/firebase'
// export function login (value:any){
//     return async function onLoginThunk (dispatch:any,getState:any){
//         try{
            
//             dispatch({
//                 type:t.LOGIN_THUNK
//             })
//             await sendData(value)
//             dispatch({
//                 type:t.LOGIN_THUNK_SUCCESS,
//                 payload:value
//             })
//             console.log('action thunk', getState())
//         }catch(err){
//             console.log(err)
//         }
//     }
// }

export function login (value:any){
    return  function onLoginThunk (dispatch:any,getState:any){
        try{
            dispatch({
                type:t.LOGIN_THUNK
            })
             auth
            .signInWithEmailAndPassword(value.email,value.password)
            .then(userCredentials=>{
                const user = userCredentials.user;
                if(user){
                    dispatch({
                        type:t.LOGIN_THUNK_SUCCESS,
                        payload:value
                    })
                }
            })
            .catch(err => console.log(err.message))
            
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
        auth
        .currentUser?.delete
        
    }
}




