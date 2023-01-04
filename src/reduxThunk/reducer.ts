import initState from './initialState';
import * as t from './actionType';


const loginReducers = (state = initState, {type,payload}:any) => {
  switch (type) {
    case t.LOGIN_THUNK:
      return {
        ...state,
        username:payload.username,
        password:payload.password,
        isLogin: true,
      };
    case t.LOGOUT_THUNK :
      return{
        username:'',
        password:'',
        isLogin:false
      }
    default:
      return state;
  }
};

export default loginReducers;