import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from "./Navigation/Navigation";
import DrawerNavigation from "./Navigation/DrawerNavigation";
import { store, persistor } from "./src/redux/store"
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import SlideMenu from "./src/screen/SlideMenu";
const App = () => {
     return (
          <Provider store={store}>
               <DrawerNavigation />
          </Provider>

     )
}

export default App;