import * as t from '../action'

export function addTodo(id:number,title:string,describe:string){
    return  function onAddTodo(dispatch:any,getState:any){
        try{
              dispatch({
                type:t.ADD_TODO,
                payload:{
                    id,
                    title,
                    describe
                }
            })     
        }catch(err){
            console.log('this is thunk function',err)
        }
    }
}
export function deleteTodo(arr:[]){
    return function onDeleteTodo(dispatch:any,getState:any){
        try{
            dispatch({
                type:t.DELETE_TODO,
                payload: arr
            })
        }catch(err){
            console.log(err)
        }
    }
}





