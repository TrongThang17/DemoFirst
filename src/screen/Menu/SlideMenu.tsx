import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Colors } from '../../../assets/Colors'
import { image } from '../../../assets/image'
import LinearGradient from 'react-native-linear-gradient'
import { sendCurrentScreen } from '../../redux/thunk/thunkCurrentScreen'
import { useSelector, useDispatch } from "react-redux";
const SlideMenu = (props: any) => {
    const dispatch = useDispatch();
    const currentScreen = useSelector((state: any) => state.reducerCurrentScreen.currentScreen)
    const [currentTab, setCurrentTab] = useState('Home')

    useEffect(() => {
        setCurrentTab(currentScreen)
    })

    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Image
                    source={image.logoMenu}
                    style={styles.logoMenu}
                />
            </View>
            <View style={styles.avatar}>
                <Image source={image.avatar} style={styles.avatarImg} />
                <Text style={styles.avatarText}>James B.</Text>
            </View>
            <View style={styles.menuBar}>
                <TouchableOpacity onPress={() => {
                    dispatch(sendCurrentScreen('Home'))
                    props.navigation.navigate('Home')
                }}>
                    <LinearGradient
                        colors={currentTab == 'Home' ? Colors.colorTouchMenu : Colors.null}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.touchMenu}
                    >
                        <Image source={image.home} style={styles.iconMenu} />
                        <Text style={styles.textMenu}>Home</Text>
                    </LinearGradient>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    dispatch(sendCurrentScreen('Calendar'))
                    props.navigation.navigate('Calendar')
                }} >
                    <LinearGradient
                        colors={currentTab == 'Calendar' ? Colors.colorTouchMenu : Colors.null}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.touchMenu}
                    >
                        <Image source={image.reminder} style={styles.iconMenu} />
                        <Text style={styles.textMenu}>Calendar</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    dispatch(sendCurrentScreen('AddTodo'))
                    props.navigation.navigate('AddTodo')
                }}>
                    <LinearGradient
                        colors={currentTab == 'AddTodo' ? Colors.colorTouchMenu : Colors.null}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.touchMenu}
                    >
                        <Image source={image.user} style={styles.iconUser} />
                        <Text style={styles.textMenu}>Invite your friends</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    dispatch(sendCurrentScreen('TodoDetail'))
                    props.navigation.navigate('TodoDetail')
                }}>
                    <LinearGradient
                        colors={currentTab == 'TodoDetail' ? Colors.colorTouchMenu : Colors.null}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.touchMenu}
                    >
                        <Image source={image.gmail} style={styles.iconMenu} />
                        <Text style={styles.textMenu}>Send a testimonial</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    dispatch(sendCurrentScreen('Welcome video'))
                }}>
                    <LinearGradient
                        colors={currentTab == 'Welcome video' ? Colors.colorTouchMenu : Colors.null}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.touchMenu}
                    >
                        <Image source={image.video} style={styles.iconMenu} />
                        <Text style={styles.textMenu}>Welcome video</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    dispatch(sendCurrentScreen('Rewards'))
                }} >
                    <LinearGradient
                        colors={currentTab == 'Rewards' ? Colors.colorTouchMenu : Colors.null}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.touchMenu}
                    >
                        <Image source={image.reward} style={styles.iconMenu} />
                        <Text style={styles.textMenu}>Rewards</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    dispatch(sendCurrentScreen('Help & Support'))
                }}>
                    <LinearGradient
                        colors={currentTab == 'Help & Support' ? Colors.colorTouchMenu : Colors.null}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.touchMenu}
                    >
                        <Image source={image.help} style={styles.iconHelpSetting} />
                        <Text style={styles.textMenu}>Help & Support</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    dispatch(sendCurrentScreen('Settings'))
                }}>
                    <LinearGradient
                        colors={currentTab == 'Settings' ? Colors.colorTouchMenu : Colors.null}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.touchMenu}
                    >
                        <Image source={image.setting} style={styles.iconHelpSetting} />
                        <Text style={styles.textMenu}>Settings</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    dispatch(sendCurrentScreen('Disclaimer'))
                }}>
                    <LinearGradient
                        colors={currentTab == 'Disclaimer' ? Colors.colorTouchMenu : Colors.null}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.touchMenu}
                    >
                        <Image source={image.disclaimer} style={styles.iconMenu} />
                        <Text style={styles.textMenu}>Disclaimer</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={{ color: 'white' }}>Power by <Text style={{ fontWeight: '700' }}>UpNow</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    viewLogo: {
        justifyContent: 'flex-start',
        padding: 20
    },
    logoMenu: {
        width: 45,
        height: 45
    },
    avatar: {
        marginLeft: 45,
        marginBottom:20
    },
    avatarImg: {
        width: 65,
        height: 65
    },
    avatarText: {
        fontFamily: 'outfit',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    },
    menuBar: {
        flex: 1,
        marginLeft: 20,
    },
    touchMenu: {
        borderRadius: 70,
        width: 221,
        height: 52,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 27.1,
        marginBottom: 5
    },
    iconMenu: {

    },
    textMenu: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
        paddingLeft: 18.36
    },
    iconUser: {
        width: 19,
        height: 28
    },
    iconHelpSetting: {
        width: 20,
        height: 29
    },
    footer: {
        paddingLeft: 26,
        paddingBottom: 10,
    }
})

export default SlideMenu