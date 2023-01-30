import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from "./Navigation/Navigation";
import {store,persistor} from "./src/redux/store"
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
const App = () =>{
 return(
      <Provider store={store}>
         
               <Navigation />
          
      </Provider>
  
 )
}

export default App;