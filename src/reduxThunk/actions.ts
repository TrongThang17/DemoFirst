import * as t from './actionType';
import sendData from '../callAPI/sendData';

export const login =(value:any) => async (dispatch:any)=>{
   try{
      dispatch({
        type:t.LOGIN_THUNK
      })

      await sendData(value)
      dispatch({
        type:t.LOGIN_THUNK_SUCCESS,
        payload:{
          username:value.username,
          password:value.password
        }
      })
   }catch(error){
      console.log(error)
   }  
}

 export  function logout () {
  return {
    type:t.LOGOUT_THUNK,
  }
}

