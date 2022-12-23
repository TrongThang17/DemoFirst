import { AppRegistry } from "react-native";


const sendDataToServer = (username:string, password:string)  => (dispatch:Function) => {
        console.log('starting call to server');  
                dispatch({
                    type:'LOGIN',
                    payload:{
                        username:username,
                        password:password
                    }
               })
               console.log("DOING");
          console.log('DONE')
          
        
    }       


export default sendDataToServer;




