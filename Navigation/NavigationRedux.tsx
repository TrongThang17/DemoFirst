import React from "react";

import HomeScreen from "../src/screenRedux/HomeScreen";
import LoginScreen from "../src/screenRedux/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../src/screenRedux/Login";
import { Provider } from "react-redux";
import store from "../src/redux/store";
const stack = createNativeStackNavigator();
const NavigationRedux:React.FC = () =>{
 return(
  <Provider store={store}>
     
        <stack.Navigator screenOptions={{headerShown:false}}>
          <stack.Screen name="Login" component={Login} />
          <stack.Screen name="LoginScreen" component={LoginScreen}   />
          <stack.Screen name="HomeScreen" component={HomeScreen} />
        </stack.Navigator>
    
  </Provider>
 
 )
}

export default NavigationRedux;