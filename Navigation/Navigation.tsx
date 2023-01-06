import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../src/screen/Login";
import Home from "../src/screen/Home";
import Signin from "../src/screen/Signin";
import { useSelector } from "react-redux";
const stack = createNativeStackNavigator();


const Navigation:React.FC = () =>{
    const isLogin = useSelector((state:any)=>state.loginReducers.isLogin)
    return  (    
            <NavigationContainer>
                <stack.Navigator screenOptions={{headerShown:false}}>  
                    {!isLogin ? 
                    (  
                        <>
                            <stack.Screen name={'Login'} component={Login}/>
                            <stack.Screen name={'Signin'} component={Signin}/>
                        </>
                    )     :   
                    ( 
                        <>
                            <stack.Screen name={'Home'} component={Home} />    
                        </>  
                       ) 
                    }                                                                                                                             
                </stack.Navigator>
            </NavigationContainer>
       
    )
}

export default Navigation