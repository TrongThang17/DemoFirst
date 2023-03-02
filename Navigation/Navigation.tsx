import {
  createDrawerNavigator,
  useDrawerStatus,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../src/screen/Login/Login';
import Home from '../src/screen/Home/Home';
import AddTodo from '../src/screen/TodoList/AddTodo';
import Signip from '../src/screen/Login/Signup';
import TodoDetail from '../src/screen/TodoList/TodoDetail';

import SlideMenu from '../src/screen/Menu/SlideMenu';
import Calendar from '../src/screen/Calendar/Calendar';
import Setting from '../src/screen/Setting/Setting';
import Language from '../src/screen/Setting/Language';
import { image } from '../assets/image';
import React, { useState, useEffect, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../src/Firebase/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { sendCurrentScreen } from '../src/redux/thunk/thunkCurrentScreen';
import { DrawerActions } from '@react-navigation/native';
import UserInfor from '../src/screen/UserInfor/UserInfor';
import I18n from '../src/languages/i18n';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AuthScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Signup'} component={Signip} />
    </Stack.Navigator>
  );
};

const MainScreen = (props: any) => {
  const navigation = useNavigation();
  var statusDrawer = useDrawerStatus();
  let drawerActions = DrawerActions;
  const [statusDrawerState, setStatusDrawerState] = useState(statusDrawer);
  const currentScreen = useSelector((state: any) => state.reducerCurrentScreen.currentScreen);
  const dispatch = useDispatch();

  const onPressOpenDrawer = useCallback(() => {
    navigation.dispatch(drawerActions.openDrawer);
    setStatusDrawerState('open');
  },[statusDrawer]);

  const onPressClosedDrawer = useCallback(() => {
    navigation.dispatch(drawerActions.closeDrawer);
    setStatusDrawerState('closed');
  }, [statusDrawer]);

  const onPressDrawer = useCallback(() => {
    statusDrawerState == 'open' ? onPressClosedDrawer() : onPressOpenDrawer();
  },[statusDrawerState]);

  const onPressGoback = useCallback(()=>{
    navigation.navigate('Home'), 
    dispatch(sendCurrentScreen('Home'));
  },[])

  const onPressGobackSetting = useCallback(()=>{
   
    navigation.navigate('Setting'), 
    dispatch(sendCurrentScreen('Settings'));
    <Setting />
  },[])

  useEffect(() => {
    if (statusDrawer == 'open' && statusDrawerState == 'closed') {
      setStatusDrawerState('open');
    }
  }, [statusDrawer]);

  useEffect(() => {
    setTimeout(() => {
      if (statusDrawer == 'closed' && statusDrawerState == 'open') {
        setStatusDrawerState('closed');
      }
    });
  }, [statusDrawer]);

  return (
    <Stack.Navigator
      initialRouteName={currentScreen}
      screenOptions={{
        headerTitle: '',
        headerTransparent: true,

        headerLeft: () => (
          <View style={styles.container}>
            <TouchableOpacity
              style={[
                styles.iconTouchMenu,
                {
                  marginLeft: statusDrawer == 'open' ? 50 : 0,
                  marginTop: statusDrawer == 'open' ? 20 : 0,
                },
              ]}
              onPress={onPressDrawer}
            >
              {statusDrawer == 'closed' ? (
                <Image source={image.iconMenu} style={styles.iconMenu} />
              ) : (
                <Image source={image.iconExit} style={styles.iconExit} />
              )}
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen
        name={'Calendar'}
        component={Calendar}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={onPressGoback}
              style={styles.goBack}
            >
              <Image source={image.goBack} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name={'AddTodo'} component={AddTodo} />
      <Stack.Screen name={'TodoDetail'} component={TodoDetail} />
      <Stack.Screen
        name={'UserInfor'}
        component={UserInfor}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={onPressGoback}
              style={styles.goBack1}
            >
              <Image source={image.goBack} />
            </TouchableOpacity>
          ),
        }}
      />
       <Stack.Screen
        name={'Setting'}
        component={Setting}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={onPressGoback}
              style={styles.goBack1}
            >
              <Image source={image.goBack} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={'Language'}
        component={Language}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={onPressGobackSetting}
              style={styles.goBack1}
            >
              <Image source={image.goBack} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerScreen = () => {
  const languages:any = useSelector((state:any)=> state.reducerLanguage.language)


    I18n.locale=languages
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => {
        return <SlideMenu {...props} />;
      }}
      screenOptions={{
        headerShown: false,
        drawerType:'slide'
      }}
    >
      <Drawer.Screen name={'MainScreen'}>{(props) => <MainScreen {...props} />}</Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default () => {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      {user ? (
        <>
          <AuthScreen />
        </>
      ) : (
        <>
          <DrawerScreen />
        </>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginTop: 20,
  },
  iconMenu: {
    width: 30,
    height: 30,
  },
  iconExit: {
    width: 25,
    height: 25,
  },
  iconTouchMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  goBack: {
    padding: 10,
  },
  goBack1: {
    padding: 10,
    marginLeft:30
  },
});
