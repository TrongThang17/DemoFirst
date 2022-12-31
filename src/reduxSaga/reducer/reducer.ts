import * as t from '../action'

const initData = {
    username:'',
    password:'',
    isLoading:false
};

const loginReducer = (state=initData,{type,payload}:any) =>{
    switch(type){
        case t.LOGIN :
            return {
                ...state,
               isLoading:true,
            }
        case t.LOGIN_SUCCESS :
            return{
                ...state,
                username:payload.username,
                password:payload.password,
                isLoading:false,
            }
        case t.LOGOUT :
            return{
                ...state,
                isLoading:true,
            }
        case t.LOGOUT_SUCCESS:
            return {
                username:'',
                password:'',
                isLoading:true,
            }
        default :
            return state;
    }
}

export default loginReducer;