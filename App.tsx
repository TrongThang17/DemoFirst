import React from "react";
import Navigation from "./Navigation/Navigation";
import { store, persistor } from "./src/redux/store"
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
     return (
          <Provider store={store}>
               <PersistGate persistor={persistor}>
               <Navigation />
               </PersistGate>
          </Provider>

     )
}

export default App;