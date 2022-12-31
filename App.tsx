import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation/Navigation";
import NavigationRedux from "./Navigation/NavigationRedux";
import NavigationReduxThunk from "./Navigation/NavigationReduxThunk";
import NavigationReduxSaga from "./Navigation/NavigationReduxSaga";
import store from "./src/reduxThunk/store";
const Tab = createBottomTabNavigator();

import { Provider } from "react-redux";
const App = () =>{
 return(
      <Provider store={store}>
         <Navigation />
      </Provider>
  
 )
}

export default App;