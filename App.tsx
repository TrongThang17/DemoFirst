import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from "./Navigation/Navigation";
import store from "./src/Store/store";


import { Provider } from "react-redux";
const App = () =>{
 return(
      <Provider store={store}>
         <Navigation />
      </Provider>
  
 )
}

export default App;