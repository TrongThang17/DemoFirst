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
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../src/Firebase/firebase'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screen = (props: any) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [user, setUser] = useState();
    const navigation = useNavigation()
    const progressDrawer = useDrawerProgress()
    var statusDrawer = useDrawerStatus();

    const viewDrawerStyle = useAnimatedStyle(() => {
        const scale = interpolate(progressDrawer.value,
            [0, 1],
            [1, 1]
        )
        const borderRadius = interpolate(progressDrawer.value,
            [0, 1],
            [0, 40]
        )
        return {
            transform: [{ scale }], borderRadius
        }
    })


    useEffect(() => {
        statusDrawer == 'open' ? setIsOpenMenu(true) : setIsOpenMenu(false)
        console.log('stats', statusDrawer)

    }, [statusDrawer])


    useEffect(() => {
        auth.onAuthStateChanged((user: any) => {
            setUser(user)
        })
    }, [])


    return (
        <Animated.View style={[{ flex: 1 }, viewDrawerStyle]}>
            <Stack.Navigator
                screenOptions={{
                    headerTitle: '',
                    headerTransparent: true,
                    headerLeft: () => (
                        <TouchableOpacity
                            style={styles.iconTouchMenu}

                            onPress={() => {

                                if (statusDrawer == 'open') {
                                    navigation.closeDrawer()
                                    setIsOpenMenu(false)
                                    console.log('open11')
                                } else {


                                    navigation.openDrawer()
                                    setIsOpenMenu(true)
                                    console.log('close11')
                                }
                            }}
                        >
                            {!isOpenMenu ? <Image source={image.iconMenu} style={styles.iconMenu} /> : <Image source={image.iconExit} style={{ width: 20, height: 20 }} />}
                        </TouchableOpacity>
                    )
                }}
            >
                {!user ?
                    (
                        <>
                            <Stack.Screen name={'Login'} component={Login} />
                            <Stack.Screen name={'Signup'} component={Signip} />
                        </>
                    ) :
                    (
                        <>
                            <Stack.Screen name={'Menu'} component={SlideMenu} />
                            <Stack.Screen name={'Home'} component={Home} />
                            <Stack.Screen name={'AddTodo'} component={AddTodo} />
                            <Stack.Screen name={'TodoDetail'} component={TodoDetail} />
                        </>
                    )
                }
            </Stack.Navigator>
        </Animated.View>
    )
}




export default () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props: any) => {
                    return <SlideMenu {...props} />
                }}

                screenOptions={{
                    headerShown: false,
                    drawerType: 'slide',
                    drawerStyle: { width: '55%' },
                    overlayColor: Colors.background,


                }}
            >
                <Drawer.Screen name={'Screen'}>
                    {props => <Screen {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    iconMenu: {
        width: 30,
        height: 30
    },
    iconTouchMenu: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30
    }
})
