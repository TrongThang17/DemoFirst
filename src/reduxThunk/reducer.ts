import initState from './initialState';
import * as t from './action';


const loginReducers = (state = initState, {type,payload}:any) => {
  switch (type) {
    case t.LOGIN_THUNK:
      return {
        ...state,
        isLoading: true,
      };
    case t.LOGIN_THUNK_SUCCESS:
      return{
        ...state,
        username:payload.username,
        password:payload.password,
        isLoading:false
      }
    case t.LOGOUT_THUNK :
      return{
        ...state,
        username:'',
        password:'',
        isLogin:false
      }
    default:
      return state;
  }
};

export default loginReducers;