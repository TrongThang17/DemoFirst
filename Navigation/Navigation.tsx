import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../src/screen/Login";
import Home from "../src/screen/Home";
import AddTodo from "../src/screen/AddTodo";
import Signip from "../src/screen/Signup";
import TodoDetail from "../src/screen/TodoDetail";
import React,{useState,useEffect} from "react";
import {auth} from '../src/Firebase/firebase'
const stack = createNativeStackNavigator();


const Navigation:React.FC = () =>{
    const [user,setUser] = useState();
    useEffect(()=>{
        auth.onAuthStateChanged((user:any)=>{
            setUser(user)
        })
    },[])
   
    return  (    
            <NavigationContainer>
                 <stack.Navigator screenOptions={{headerShown:false}}>  
                    {!user ?
                    (  
                        <>
                            <stack.Screen name={'Login'} component={Login}/>
                            <stack.Screen name={'Signup'} component={Signip}/>
                        </>
                    )     :    
                     (
                        <> 
                            <stack.Screen name={'Home'} component={Home} />
                            <stack.Screen name={'AddTodo'} component={AddTodo} />  
                            <stack.Screen name={'TodoDetail'} component={TodoDetail} />                
                         </>  
                       ) 
                     }                                                                                                                        
                </stack.Navigator> 
               
            </NavigationContainer>
       
    )
}

export default Navigation