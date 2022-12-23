import { LOGIN, LOGOUT } from "../action/action";


const initState = {
    username:'',
    password:''
}

const loginReducer =(state=initState, {type,payload}:any) =>{
    switch(type){
        case LOGIN :
            return {
                ...state,
                username:payload.username,
                password:payload.password,
            }
        case LOGOUT : 
            return {
                ...state,
                username:'',
                password:''
            }
        default : 
             return state;
    }
}

export default loginReducer;