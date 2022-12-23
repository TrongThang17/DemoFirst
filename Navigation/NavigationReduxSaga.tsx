import React from "react";

import LoginScreenSaga from "../src/screenReduxSaga/LoginScreenSaga";
import HomeScreenSaga from "../src/screenReduxSaga/HomeScreenSaga";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import  store from "../src/reduxSaga/store";
const stack = createNativeStackNavigator();
const NavigationReduxSaga:React.FC = () =>{
 return(
  <Provider store={store}>

        <stack.Navigator screenOptions={{headerShown:false}}>
          <stack.Screen name="LoginSaga" component={LoginScreenSaga}   />
          <stack.Screen name="HomeSaga" component={HomeScreenSaga} />
        </stack.Navigator>

  </Provider>
 
 )
}

export default NavigationReduxSaga;