import { createDrawerNavigator, useDrawerStatus, useDrawerProgress } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../src/screen/Login";
import Home from "../src/screen/Home";
import AddTodo from "../src/screen/AddTodo";
import Signip from "../src/screen/Signup";
import TodoDetail from "../src/screen/TodoDetail";
import SlideMenu from "../src/screen/SlideMenu";
import Reminder from '../src/screen/Reminder';
import { Colors } from '../assets/Colors';
import { image } from '../assets/image'
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../src/Firebase/firebase'
import { useSelector, useDispatch } from "react-redux";
import { sendCurrentScreen } from '../src/redux/thunk/thunkCurrentScreen';
import { DrawerActions } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AuthScreen = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={'Login'} component={Login} />
            <Stack.Screen name={'Signup'} component={Signip} />
        </Stack.Navigator>
    )
}

const MainScreen = (props: any) => {
    const navigation = useNavigation()
    var statusDrawer = useDrawerStatus();
    let drawerActions = DrawerActions;
    const [statusDrawerState, setStatusDrawerState] = useState(statusDrawer)
    const currentScreen = useSelector((state: any) => state.reducerCurrentScreen.currentScreen)
    const dispatch = useDispatch();

    const onPressOpenDrawer = () => {

        setStatusDrawerState('open')

        navigation.dispatch(drawerActions.closeDrawer)
        console.log('bbb')

        console.log(1, statusDrawer)
        console.log(drawerActions)
    }

    const onPressClosedDrawer = () => {

        setStatusDrawerState('closed')
        navigation.dispatch(drawerActions.openDrawer)
        console.log('aaa')


        console.log(2, statusDrawer)
        console.log(drawerActions)
    }


    useEffect(() => {
        if (statusDrawerState == 'open') {
            setStatusDrawerState('open')
            console.log('effect', statusDrawer)
            console.log('effect state', statusDrawerState, '--------------')
        }
        else if (statusDrawerState == 'closed') {
            setStatusDrawerState('closed')
            console.log('effect 2', statusDrawer)
            console.log('effect state 2', statusDrawerState, '--------------')
        }
    }, [statusDrawerState, statusDrawer])



    return (
        <Stack.Navigator
            initialRouteName={currentScreen}
            screenOptions={{
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={[styles.iconTouchMenu, {
                                marginLeft: statusDrawer == 'open' ? 50 : 0,
                                marginTop: statusDrawer == 'open' ? 20 : 0,
                            }]}
                            onPress={statusDrawerState == 'open' ? onPressClosedDrawer : onPressOpenDrawer}
                        >
                            {statusDrawer == 'closed' ? <Image source={image.iconMenu} style={styles.iconMenu} /> : <Image source={image.iconExit} style={styles.iconExit} />}
                        </TouchableOpacity>
                    </View>

                )
            }}
        >
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'Reminder'} component={Reminder} options={{
                headerLeft: () => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Home'),
                            dispatch(sendCurrentScreen('Home'))
                    }}
                        style={styles.goBack}
                    >
                        <Image source={image.goBack} />
                    </TouchableOpacity>
                )
            }} />
            <Stack.Screen name={'AddTodo'} component={AddTodo} />
            <Stack.Screen name={'TodoDetail'} component={TodoDetail} />
        </Stack.Navigator>
    )
}

const DrawerScreen = () => {
    return (
        <Drawer.Navigator

            drawerContent={(props: any) => {
                return <SlideMenu {...props} />
            }}
            screenOptions={{
                headerShown: false,
                drawerType: 'back',
            }}
        >
            <Drawer.Screen name={'MainScreen'}>
                {props => <MainScreen {...props} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default () => {
    const [user, setUser] = useState();
    useEffect(() => {
        auth.onAuthStateChanged((user: any) => {
            setUser(user)
        })
    }, [])
    return (
        <NavigationContainer>
            {
                !user ?
                    <>
                        <AuthScreen />
                    </>
                    :
                    <>
                        <DrawerScreen />
                    </>
            }
        </NavigationContainer>
    )
}

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
        height: 25
    },
    iconTouchMenu: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
    goBack: {
        padding: 10
    }
})
