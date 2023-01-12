import initTask from '../data/initTask'
import * as f from '../action'
import { array } from 'yup';

const reducerTask = (state=initTask,{type,payload}:any) =>{
    switch(type){
        case f.ADD_TODO :{
            const id = payload.id++;
            const title = payload.title;
            const describe = payload.describe;
            return {
                ...state,
                list:[...state.list,{id,title,describe}]
            }
        }  
        case f.DELETE_TODO :{
            return {
                ...state,
                list:state.list.filter((todo:any)=> !payload.includes(todo.id))
            };
        }  
        case f.UPDATE_TODO :
            return {

            }      
        default :
            return state;
    }
}

export default reducerTask;