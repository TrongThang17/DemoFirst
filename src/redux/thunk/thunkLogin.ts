import * as t from '../action'
import {auth} from '../../Firebase/firebase'
import { Alert } from 'react-native'

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
                        
                    })
                } 
            })
            .catch((error) => {
                dispatch({
                    type: t.ERROR
                })
                if (error.code === 'auth/user-not-found') {
                    Alert.alert('That email address is not exist!');
                  }
              
                if (error.code === 'auth/wrong-password') {
                    Alert.alert('Wrong password !!');
                  }
                if (error.code === 'auth/network-request-failed') {
                    Alert.alert('Cannot connect to server ! please check your network ');
                  }
                console.log(error)
            })   
          
        }catch(err){
            console.log(err)
        }
    }
}

export function signup (value:any){
    return  function onSignupThunk (dispatch:any,getState:any){
        try{
            dispatch({
                type:t.SIGNUP_THUNK
            })
             auth
            .createUserWithEmailAndPassword(value.email,value.password)
            .then(userCredentials=>{
                const user = userCredentials.user;
                if(user){
                    user.updateProfile({
                        displayName:value.lastname + ' ' + value.firstname
                    }).then( 
                        dispatch({
                        type:t.SIGNUP_THUNK_SUCCESS,
                        
                    }))  
                }
            })
            .catch((error) =>{
                dispatch({
                    type: t.ERROR
                })
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('That email address is already in use!');
                  }
              
                  if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                  }
            })
            
        }catch(err){
            console.log(err)
        }
    }
}

export function logout(){
    return  function onLogoutThunk(dispatch:any,getState:any){
        dispatch({
            type:t.LOGOUT_THUNK
        })
         auth
        .signOut()
        .then(dispatch({
            type: t.LOGIN_THUNK_SUCCESS
        }))
    }
}




