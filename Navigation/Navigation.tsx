import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../src/screen/Login";
import Home from "../src/screen/Home";
import Signip from "../src/screen/Signup";
import { useSelector } from "react-redux";
const stack = createNativeStackNavigator();


const Navigation:React.FC = () =>{
    const isLogin = useSelector((state:any)=>state.reducer.isLogin)

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
                        </>  
                       ) 
                    }                                                                                                                             
                </stack.Navigator>
            </NavigationContainer>
       
    )
}

export default Navigation