import { createDrawerNavigator, useDrawerStatus, useDrawerProgress } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../src/screen/Login";
import Home from "../src/screen/Home";
import AddTodo from "../src/screen/AddTodo";
import Signip from "../src/screen/Signup";
import TodoDetail from "../src/screen/TodoDetail";
import SlideMenu from "../src/screen/SlideMenu";
import { Colors } from '../assets/Colors';
import { image } from '../assets/image'
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../src/Firebase/firebase'
import { useSelector } from "react-redux";
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
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const navigation = useNavigation()
    var statusDrawer = useDrawerStatus();
    const currentScreen = useSelector((state: any) => state.reducerCurrentScreen.currentScreen)
   

    useEffect(() => {
        statusDrawer == 'open' ? setIsOpenMenu(true) : setIsOpenMenu(false)
    }, [statusDrawer])


    return (
        <Stack.Navigator
            initialRouteName={currentScreen}
            screenOptions={{
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.iconTouchMenu}
                            onPress={() => {
                                if (statusDrawer == 'open') {
                                    navigation.closeDrawer()
                                    setIsOpenMenu(false)
                                } else {
                                    navigation.openDrawer()
                                    setIsOpenMenu(true)
                                }
                            }}
                        >
                            {!isOpenMenu ? <Image source={image.iconMenu} style={styles.iconMenu} /> : <Image source={image.iconExit} style={{ width: 25, height: 25, }} />}
                        </TouchableOpacity>
                    </View>

                )
            }}
        >
            <Stack.Screen name={'Home'} component={Home} />
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
                drawerType: 'slide',
                drawerStyle:{width:'60%'},
                overlayColor: Colors.backgroundOverLayColor,
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
    container:{
        flex:1, 
        marginLeft:30,
        marginTop:20,
    },
    iconMenu: {
        width: 30,
        height: 30
    },
    iconTouchMenu: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    }
})
