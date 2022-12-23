import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import NavigationRedux from "./Navigation/NavigationRedux";
import NavigationReduxThunk from "./Navigation/NavigationReduxThunk";
const Tab = createBottomTabNavigator();

const App = () =>{
 return(
  <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Redux" component={NavigationRedux} />
        <Tab.Screen name="Redux thunk" component={NavigationReduxThunk} />
      </Tab.Navigator>
  </NavigationContainer>
  
 
 )
}

export default App;