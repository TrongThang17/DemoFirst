import * as t from '../action'

export function onChangeLanguaue(language:any){
    return  function onChangeLanguaue(dispatch:any,getState:any){
        try{
              dispatch({
                type:t.CHANGE_LANGUAGE,
                payload:{
                    language
                }
            })     
        }catch(err){
            console.log('this is thunk function',err)
        }
    }
}





