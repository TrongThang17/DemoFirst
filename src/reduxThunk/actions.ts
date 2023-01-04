import * as t from './actionType';


 export  function login   (username:string, password:string) {
    return {
        type:t.LOGIN_THUNK,
        payload:{
            username:username,
            password:password
        }
    }
}

 export  function logout () {
  return {
    type:t.LOGOUT_THUNK,
  }
}

