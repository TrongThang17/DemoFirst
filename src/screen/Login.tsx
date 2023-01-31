import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet,View, Text, Image,TouchableOpacity, Linking,Alert} from "react-native";
import {image} from '../../assets/image';
import CustomInput from "../../assets/Custom/customInputLogin";
import CustomButton from "../../assets/Custom/customButtonLogin";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import { Controller,useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../assets/Colors'
import Loading from "./Loading";
import {auth} from '../Firebase/firebase'
import {login} from '../redux/thunk/thunkLogin'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
interface validate {
    email:string,
    password:string
}

const schema = yup.object().shape({
    email:yup.string().required(),
    password:yup.string().required().min(8, 'At least 8 characters')
})
const Login:React.FC<{navigation:any}> =({navigation}) =>{
    const { control,register, handleSubmit, watch, formState: { errors } }:any = useForm<validate>({
        resolver: yupResolver(schema)
      }); 
    const dispatch = useDispatch()
    const isLoading = useSelector((state:any)=>state.reducerLogin.isLoading)
    const [show,setShow] = useState(true);
    
    const  onLoginThunk =  useCallback((value:any)=>{
        dispatch(login(value))
    } ,[])

    const Show = useCallback(()=>{
        show ? setShow(false) : setShow(true)
    },[show])
    return isLoading  ? (<Loading />) : (
    <KeyboardAwareScrollView>
        <View style={styles.container}>
            <View>
                <View style={styles.imgHeader}>
                    <Image source={image.ellipse} style={styles.ellipse}/>
                    <Image source={image.combined} style={styles.combined}/>
                    <Image source={image.oval} style={styles.oval}/>
                </View>
                <View style={styles.contentHeader}>
                    <Text style={styles.textUp}>UpNow</Text>
                    <Text style={styles.textDown}>Digital Hypnotherapy</Text>
                </View>
            </View>

            <View style={styles.hr}/>
            <Text style={styles.textLogin}>Log In </Text>
            <View style={styles.viewTextInput}>
                    <Controller
                                control={control}
                                rules={{
                                    required:true
                                }}
                                render={({ field: { onChange ,value} }) =>
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
                                    required:true,
                                    minLength:8
                                }}
                                render={({field: {onChange,value}}) => 
                                <CustomInput 
                                            placeholder="Password"
                                            onChange={onChange} 
                                            value={value}  
                                            img={image.password} 
                                            img1={image.eye}
                                            onClickEye={Show}
                                            show={show}
                                />
                                
                                }
                            name={'password'}
                        />
                       
                            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}  
                    
                    <Text style={styles.textForget}>Forget Password</Text>  
                            <View style={styles.viewLogin}>
                                <LinearGradient 
                                colors={Colors.colorLogin}  
                                style={styles.linearGradient}
                                start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}}
                                >
                                
                                <CustomButton 
                                        label="Log In" 
                                        onPress={handleSubmit(onLoginThunk)}
                                        colorLabel={Colors.white}
                                />
                                </LinearGradient>    
                            </View>

                       
                <View style={styles.viewTextLR}>
                    <Text style={styles.textLeft}>Don't have an account ? </Text>
                    <Text style={styles.textRight} onPress={()=>{
                        navigation.navigate('Signup')
                    }}>Sign Up </Text>
                </View> 
                <View style={{flexDirection: 'row', alignItems: 'center',padding:20}}>
                    <View style={{flex: 1, height: 2, backgroundColor:Colors.hr1,borderRadius:90}} />
                        <View>
                                <Text style={{width:150, textAlign: 'center',color:'white',}}>Or Log in With </Text>
                        </View>
                    <View style={{flex: 1, height: 2, backgroundColor: Colors.hr1, borderRadius:90}} />
                </View> 
                <View style={styles.viewFooter}>
                    <CustomButton 
                            img={image.facebook}
                            label='Log in with Facebook'
                            colorCode={Colors.colorFacebook}
                            colorCodeIcon='white'
                            colorLabel={Colors.white}
                            onPress={()=>{
                                Linking.openURL('https://facebook.com')
                            }}
                    />
               
                    <CustomButton 
                            img={image.apple}
                            label='Log in with Aple'
                            colorCode={Colors.colorApple}
                            colorCodeIcon={Colors.colorApple}
                            colorLabel={Colors.white}
                            onPress={()=>{
                                Linking.openURL('https://appleid.apple.com/sign-in')
                            }}
                    />             
            </View>      
        </View>                                                     
    </View>
</KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:812,
        left:0,
        top:0,
        backgroundColor:Colors.background,         
    },
    imgHeader:{
        position:'absolute',
    },
    ellipse:{
        position:'absolute',
        width:50.35,
        height:50.35,
        left:24,
        top:60,
        backgroundColor:Colors.ellipse,
        borderRadius:79.144
    },
    combined:{
        position:'absolute',
        left:33,
        top:68,
        right:0,
        bottom:0,
        backgroundColor:Colors.combined,
        width:31.47,
        height:31.47
    },
    oval:{
        position:'absolute',
        top:78,
        left:43,
        backgroundColor:Colors.oval,
    },
    contentHeader:{
        flexDirection:'column',       
    },
    textUp:{
        position:'absolute',
        width: 88.82,
        height: 27.59,
        left: 93,
        top: 62,
        fontFamily: 'Outfit',
        fontStyle:'normal',
        fontWeight:'900',
        color:Colors.white,
        fontSize:24,
        lineHeight:25,
        display:"flex",
        alignItems:'center'
    },
    textDown:{
        position:'absolute',
        fontFamily: 'Outfit',
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:14.07,
        lineHeight:18,
        display:"flex",
        alignItems:'center',
        color:Colors.textDown,
        left: 93,
        top: 90.14,
        width: 134.54,
        height: 17.59
    },
    hr:{
        position:'absolute',
        width: 375,
        height: 1,
        left: 0,
        top: 131,
        backgroundColor:Colors.hr,
        borderRadius:30,
    },
    textLogin:{
        width: 69,
        height: 27,
        left: 38,
        top: 150,
        fontFamily:'Outfit',
        fontStyle:'normal',
        fontWeight:'900',
        fontSize:24,
        lineHeight:25,
        display:"flex",
        alignItems:'center',
        color:Colors.white
    },
    viewTextInput:{
        top: 160,
      
        justifyContent:'center',
        alignItems:'center'
    },
    textForget:{
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:15,
        lineHeight:20,
        display:'flex',
        textAlign:"right",
        alignItems:'center',
        color:Colors.white,
        marginLeft:190
    },
    viewLogin:{
        paddingRight:20,
      
    },
    viewTextLR:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    textLeft:{
        width: 170,
        height:20,
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:15,
        lineHeight:20,
        fontFamily:'Outfit',
        color:Colors.white
    },
    textRight:{
        width: 60,
        height:20,
        color:Colors.signUp,
        fontStyle:'normal',
        fontWeight:'700',
        fontSize:15,
        lineHeight:20,
        fontFamily:'Outfit',
    },
    viewFooter:{
        
    },
    errorText:{
        color:'red',
        marginBottom:5,
        marginRight:130
    },
    linearGradient:{
        borderRadius:30,
        height:52,
        width:327,
        paddingTop:5,
        marginLeft:30,
        marginTop:15
    }
})

export default Login;

