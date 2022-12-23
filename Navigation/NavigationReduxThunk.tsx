import React from "react";

import LoginScreenThunk from "../src/screenReduxThunk/LoginScreenThunk";
import HomeScreenThunk from "../src/screenReduxThunk/HomeScreenThunk";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import { store } from "../src/reduxThunk/store";
const stack = createNativeStackNavigator();
const NavigationReduxThunk:React.FC = () =>{
 return(
  <Provider store={store}>

        <stack.Navigator screenOptions={{headerShown:false}}>
          <stack.Screen name="LoginThunk" component={LoginScreenThunk}   />
          <stack.Screen name="HomeThunk" component={HomeScreenThunk} />
        </stack.Navigator>

  </Provider>
 
 )
}

export default NavigationReduxThunk;