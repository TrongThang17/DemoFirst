import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from "react-native";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from "react-hook-form";
import { image } from '../../../assets/image';
import { Colors } from '../../../assets/Colors'
import CustomInput from "../../../assets/Custom/customInputLogin";
import CustomButton from "../../../assets/Custom/customButtonLogin";
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from "react-redux";
import { signup } from "../../redux/thunk/thunkLogin";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import I18n from "../../i18njs/i18n";
import { useSelector } from "react-redux";
interface validate {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
}
const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    password: yup.string().required().min(8, 'At least 8 characters'),
    email: yup.string().email()
})

const Signin: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [showPW, setShowPW] = useState(true);
    const [tick, setTick] = useState(false);

    const { control, register, handleSubmit, watch, formState: { errors } }: any = useForm<validate>({
        resolver: yupResolver(schema)
    });
    const languages:any = useSelector((state:any)=> state.reducerLanguage.language)
    I18n.locale=languages

    const onShowPW = useCallback(() => {
        showPW ? setShowPW(false) : setShowPW(true)
    }, [showPW])

    const dispatch = useDispatch()

    const onSignUp = useCallback((value: any) => {
        dispatch(signup(value))
    }, [])

    const onHandleSetTick = useCallback(()=>{
        tick ? setTick(false) : setTick(true)
    },[])

    return (
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
                            <Text style={styles.textLogin}>{I18n.t('Screen_Register.Register')}</Text>
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
                                            placeholder={I18n.t('Screen_Register.First_Name')}
                                            onChange={onChange}
                                            value={value}
                                            img={image.user}
                                        />
                                    }
                                    name={'firstname'}
                                />
                                {errors.firstname && <Text style={styles.errorText}>This is required Firstname.</Text>}
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true
                                    }}
                                    render={({ field: { onChange, value } }) =>
                                        <CustomInput
                                            placeholder={I18n.t('Screen_Register.Last_Name')}
                                            onChange={onChange}
                                            value={value}
                                            img={image.user}
                                        />
                                    }
                                    name={'lastname'}
                                />
                                {errors.lastname && <Text style={styles.errorText}>This is required Lastname.</Text>}
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
                                            img={image.email}
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
                                            placeholder={I18n.t('Screen_Register.Password')}
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
                            <View style={styles.selectedButton} >
                                <TouchableOpacity
                                    style={styles.choosenButton}
                                    onPress={onHandleSetTick}
                                >
                                    {tick ? <Image source={image.tick} style={{ width: 18, height: 18, justifyContent: 'center', alignItems: 'center' }} /> : ''}
                                </TouchableOpacity>
                                <View style={{ left: 18 }}>
                                    <Text style={styles.textChoosen}>{I18n.t('Screen_Register.By_Clicking')} {I18n.t('Screen_Register.Register_Clicking')} {I18n.t('Screen_Register.You_Agree')}
                                        <Text style={styles.textSpecial}> {I18n.t('Screen_Register.Term_Condition')}</Text> {I18n.t('Screen_Register.and')}
                                        <Text style={styles.textSpecial}>{I18n.t('Screen_Register.Privacy')}</Text>
                                    </Text>
                                </View>
                            </View>
                            <View style={{ paddingTop: 120 }}>
                                <View>
                                    <LinearGradient
                                        colors={Colors.colorLogin}
                                        style={styles.linearGradient}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                    >

                                        <CustomButton
                                            label={I18n.t('Screen_Register.Register')}
                                            onPress={handleSubmit(onSignUp)}
                                        />
                                    </LinearGradient>
                                </View>
                                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                                    <Text style={styles.textChoosen}>{I18n.t('Screen_Register.Already')} <Text style={styles.textSpecial} onPress={() => { navigation.navigate('Login') }}>{I18n.t('Screen_Register.Log_In')}</Text></Text>
                                </View>
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
        height: 31.47
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
    errorText: {
        color: 'red',
        marginBottom: 5,
        marginLeft: 40
    },
    linearGradient: {
        borderRadius: 30,
        height: 52,
        width: 327,

    },
    selectedButton: {
        flexDirection: 'row',
        paddingRight: 50,
        paddingTop: 20
    },
    choosenButton: {
        width: 18,
        height: 18,
        borderRadius: 4,
        backgroundColor: '#A4BCC1',
        marginLeft: 40,
        
    },
    textChoosen: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20,
        color: 'white'
    },
    textSpecial: {
        color: '#FF5889',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20,
        
    }
})

export default Signin