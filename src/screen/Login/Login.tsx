import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking, Alert } from "react-native";
import { image } from '../../../assets/image';
import CustomInput from "../../../assets/Custom/customInputLogin";
import CustomButton from "../../../assets/Custom/customButtonLogin";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../assets/Colors'
import Loading from "../Loading/Loading";
import { auth } from '../../Firebase/firebase'
import { login } from '../../redux/thunk/thunkLogin'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import I18n from "../../i18njs/i18n";
interface validate {
    email: string,
    password: string
}

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required().min(8, 'At least 8 characters')
})
const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { control, register, handleSubmit, watch, formState: { errors } }: any = useForm<validate>({
        resolver: yupResolver(schema)
    });
    const dispatch = useDispatch()
    
    const isLoading = useSelector((state: any) => state.reducerLogin.isLoading)
    const languages:any = useSelector((state:any)=> state.reducerLanguage.language)
    I18n.locale=languages
    const [showPW, setShowPW] = useState(true);

    const onLoginThunk = useCallback((value: any) => {
        dispatch(login(value))
    }, [])

    const onShowPW = useCallback(() => {
        showPW ? setShowPW(false) : setShowPW(true)
    }, [showPW])

    const onPressSignUp = useCallback(()=>{
        navigation.navigate('Signup')
    },[])

    const onPressOpenLinkFB = useCallback(()=>{
        Linking.openURL('https://facebook.com')
    },[])

    const onPressOpenLinkApple = useCallback(()=>{
        Linking.openURL('https://appleid.apple.com/sign-in')
    },[])
    return isLoading ? (<Loading />) : (
        <View style={{ backgroundColor: Colors.background, height: '100%' }}>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.viewHeader}>
                        <View style={styles.imgHeader}>
                            <Image source={image.ellipse} style={styles.ellipse} />
                            <Image source={image.combined} style={styles.combined} />
                            <Image source={image.oval} style={styles.oval} />
                        </View>
                        <View style={styles.contentHeader}>
                            <Text style={styles.textUp}>UpNow</Text>
                            <Text style={styles.textDown}>Digital Hypnotherapy</Text>
                        </View>
                    </View>
                    <View style={styles.viewBody}>
                        <View style={styles.viewTextLogin}>
                            <View style={styles.hr} />
                            <View style={styles.hr1} />
                            <Text style={styles.textLogin}>{I18n.t('Screen_Login.Log_In')}</Text>
                        </View>

                        <View style={styles.viewTextInput}>
                            <View>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true
                                    }}
                                    render={({ field: { onChange, value } }) =>
                                        <CustomInput
                                            placeholder="Email"
                                            onChange={onChange}
                                            value={value}
                                            img={image.user}
                                        />
                                    }
                                    name={'email'}

                                />
                                {errors.email && <Text style={styles.errorText}>This is required Email.</Text>}
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                        minLength: 8
                                    }}
                                    render={({ field: { onChange, value } }) =>
                                        <CustomInput
                                            placeholder={I18n.t('Screen_Login.Password')}
                                            onChange={onChange}
                                            value={value}
                                            img={image.password}
                                            img1={image.eye}
                                            onClickEye={onShowPW}
                                            show={showPW}
                                        />

                                    }
                                    name={'password'}
                                />

                                {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                            </View>
                            <View>
                                <View style={{ paddingTop: 10, paddingBottom: 20 }}>
                                    <Text style={styles.textForget}>{I18n.t('Screen_Login.Forget_Pass')}</Text>
                                </View>

                                <View >
                                    <LinearGradient
                                        colors={Colors.colorLogin}
                                        style={styles.linearGradient}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                    >

                                        <CustomButton
                                            label={I18n.t('Screen_Login.Log_In')}
                                            onPress={handleSubmit(onLoginThunk)}
                                            colorLabel={Colors.white}
                                        />
                                    </LinearGradient>
                                </View>
                            </View>
                            <View>
                                <View style={styles.viewTextLR}>
                                    <Text style={styles.textLeft}>{I18n.t('Screen_Login.Dont_Have_Account')} </Text>
                                    <Text style={styles.textRight} onPress={onPressSignUp}>{I18n.t('Screen_Login.Register')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, width: '100%' }}>
                                    <View style={{ flex: 1, height: 2, backgroundColor: Colors.hr1, borderRadius: 90 }} />
                                    <View>
                                        <Text style={{ width: 150, textAlign: 'center', color: 'white', }}>{I18n.t('Screen_Login.Or_Login_With')}</Text>
                                    </View>
                                    <View style={{ flex: 1, height: 2, backgroundColor: Colors.hr1, borderRadius: 90 }} />
                                </View>
                            </View>


                            <View>
                                <CustomButton
                                    img={image.facebook}
                                    label={I18n.t('Screen_Login.Login_With_FB')}
                                    colorCode={Colors.colorFacebook}
                                    colorCodeIcon='white'
                                    colorLabel={Colors.white}
                                    onPress={onPressOpenLinkFB}
                                />

                                <CustomButton
                                    img={image.apple}
                                    label={I18n.t('Screen_Login.Login_With_AP')}
                                    colorCode={Colors.colorApple}
                                    colorCodeIcon={Colors.colorApple}
                                    colorLabel={Colors.white}
                                    onPress={onPressOpenLinkApple}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    viewHeader: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 20
    },
    imgHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ellipse: {
        top: 30,
        width: 50.35,
        height: 50.35,
        backgroundColor: Colors.ellipse,
        borderRadius: 79.144
    },
    combined: {
        bottom: 10,
        backgroundColor: Colors.combined,
        width: 31.47,
        height: 31.47,
    },
    oval: {
        bottom: 30,
        backgroundColor: Colors.oval,
    },
    contentHeader: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
    },
    textUp: {
        
        fontFamily: 'Outfit',
        fontStyle: 'normal',
        fontWeight: '900',
        color: Colors.white,
        fontSize: 24,
        lineHeight: 25,
        display: "flex",
        alignItems: 'center'
    },
    textDown: {
        fontFamily: 'Outfit',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14.07,
        lineHeight: 18,
        display: "flex",
        alignItems: 'center',
        color: Colors.textDown,
      
    },
    viewBody: {
        display: 'flex',
    },
    viewTextLogin: {
        marginTop: 5,
    },
    hr: {
        height: 2,
        backgroundColor: Colors.hr,
        borderRadius: 30,
    },
    hr1: {
        height: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 30,
    },
    textLogin: {

        marginTop: 20,
        marginLeft: 40,
        fontFamily: 'Outfit',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 24,
        lineHeight: 25,
        display: "flex",
        alignItems: 'center',
        color: Colors.white
    },
    viewTextInput: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textForget: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,
        display: 'flex',
        textAlign: "right",
        alignItems: 'center',
        color: Colors.white,

    },

    viewTextLR: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20
    },
    textLeft: {
       
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'Outfit',
        color: Colors.white
    },
    textRight: {
      
        color: Colors.signUp,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'Outfit',
    },

    errorText: {
        color: 'red',
        marginBottom: 5,
        marginLeft: 40
    },
    linearGradient: {
        borderRadius: 30,
        height: 52,
        width: 327,

    }
})

export default Login;

