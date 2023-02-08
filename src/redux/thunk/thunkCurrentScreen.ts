import * as t from '../action'

export function sendCurrentScreen(currentScreen:string){
    return  function onSendCurrentScreen(dispatch:any,getState:any){
        try{
              dispatch({
                type:t.SEND_CURRENT_SCREEN,
                payload:{
                    currentScreen
                }
            })     
        }catch(err){
            console.log('this is thunk function',err)
        }
    }
}





