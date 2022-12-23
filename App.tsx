import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import NavigationRedux from "./Navigation/NavigationRedux";
import NavigationReduxThunk from "./Navigation/NavigationReduxThunk";
import NavigationReduxSaga from "./Navigation/NavigationReduxSaga";
const Tab = createBottomTabNavigator();

const App = () =>{
 return(
  <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Redux" component={NavigationRedux} />
        <Tab.Screen name="Redux thunk" component={NavigationReduxThunk} />
        <Tab.Screen name="Redux saga" component={NavigationReduxSaga} />
      </Tab.Navigator>
  </NavigationContainer>
  
 
 )
}

export default App;