import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../src/screen/Login";
import Home from "../src/screen/Home";
import AddTodo from "../src/screen/AddTodo";
import Signip from "../src/screen/Signup";
import TodoDetail from "../src/screen/TodoDetail";
import { useSelector } from "react-redux";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
const stack = createNativeStackNavigator();


const Navigation:React.FC = () =>{
    const isLogin = useSelector((state:any)=>state.reducerLogin.isLogin)
  
    return  (    
            <NavigationContainer>
                 <stack.Navigator screenOptions={{headerShown:false}}>  
                    {!isLogin ?
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