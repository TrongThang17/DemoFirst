import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from "./Navigation/Navigation";
import {store,persistor} from "./src/Store/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
const App = () =>{
 return(
      <Provider store={store}>
           <PersistGate loading={null} persistor={persistor}>
               <Navigation />
           </PersistGate>
         
      </Provider>
  
 )
}

export default App;