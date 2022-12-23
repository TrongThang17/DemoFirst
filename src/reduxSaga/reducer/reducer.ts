import * as t from '../action'

const initData = {
    username:'',
    password:''
};

const loginReducer = (state=initData,{type,payload}:any) =>{
    switch(type){
        case t.LOGIN :
            return {
                ...state,
                username:payload.username,
                password:payload.password
            }
        case t.LOGIN_SUCCESS :
            return{

            }
        default :
            return state;
    }
}

export default loginReducer;