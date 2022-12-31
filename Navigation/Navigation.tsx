import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../src/screen/Login";
import Home from "../src/screen/Home";
const stack = createNativeStackNavigator();


const Navigation:React.FC = () =>{
    return(    
            <NavigationContainer>
                <stack.Navigator screenOptions={{headerShown:false}}>                       
                            <stack.Screen name={'Login'} component={Login}/>
                            <stack.Screen name={'Home'} component={Home} />                                                                                                     
                </stack.Navigator>
            </NavigationContainer>
       
    )
}

export default Navigation