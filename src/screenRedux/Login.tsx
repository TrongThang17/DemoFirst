import React from "react";
import { StyleSheet,View, Text, Image} from "react-native";
import {image} from '../../assets/image';
import CustomInput from "../../assets/Custom/customInputLogin";
import CustomButton from "../../assets/Custom/customButtonLogin";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import { Controller,useForm } from "react-hook-form";
import { useSelector, useDispatch} from "react-redux";
interface validate {
    username:string,
    password:string
}

const schema = yup.object().shape({
    username:yup.string().required(),
    password:yup.string().required().min(8, 'At least 8 characters')
})
const Login:React.FC<{navigation:any}> =({navigation}) =>{
    const { control,register, handleSubmit, watch, formState: { errors } }:any = useForm<validate>({
        resolver: yupResolver(schema)
      }); 
      const dispatch = useDispatch()
    const login =(value:any) =>{
        dispatch({
            type:'LOGIN',
            payload:{
                username:value.username,
                password:value.password
            }
        })                                                 
    navigation.navigate('HomeScreen');   
    }
    return (
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
                                            placeholder="Username" 
                                            onChange={onChange}
                                            value={value} 
                                            img={image.user} 
                                            />                                   
                                } 
                                name={'username'}
                                
                        />
                            {errors.username && <Text style={styles.errorText}>This is required Username.</Text>}
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
                                            />
                                }
                            name={'password'}
                        />
                            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}                           
            </View>
            
            <Text style={styles.textForget}>Forget Password</Text>
            <View style={styles.btnLogin}>
                <CustomButton 
                        label="Log In" 
                        colorCode="pink"
                        onPress={handleSubmit(login)}
                />
            </View>
            
            
            <View style={styles.viewTextLR}>
                <Text style={styles.textLeft}>Don't have an account ? </Text>
                <Text style={styles.textRight}>Sign Up </Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center',padding:20,top:500}}>
                    <View style={{flex: 1, height: 2, backgroundColor: 'rgba(0, 0, 0, 0.2)',borderRadius:90}} />
                    <View>
                            <Text style={{width:150, textAlign: 'center',color:'white',}}>Or Log in With </Text>
                    </View>
                    <View style={{flex: 1, height: 2, backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius:90}} />
            </View>   
            <View style={styles.viewFooter}>
               
                    <CustomButton 
                            img={image.facebook}
                            label='Log in with Facebook'
                            colorCode="#3F60B2"
                            onPress={()=>{}}
                    />
               
                    <CustomButton 
                            img={image.apple}
                            label='Log in with Aple'
                            colorCode="#131416"
                            onPress={()=>{}}
                    />
           
                 
            </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:375,
        height:812,
        left:0,
        top:0,
        backgroundColor:'rgba(45, 55, 72, 0.8)',  
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
        backgroundColor:'#343542',
        borderRadius:79.144
    },
    combined:{
        position:'absolute',
        left:33,
        top:68,
        right:0,
        bottom:0,
        backgroundColor:' linear-gradient(278.65deg, #5DF4CA 6.6%, #A9ECFD 95.41%)',
        width:31.47,
        height:31.47

    },
    oval:{
        position:'absolute',
        top:78,
        left:43,
        backgroundColor:'linear-gradient(180deg, #57C1EA 0%, #60AADA 100%)',
    },
    contentHeader:{
        flexDirection:'column',
       
    },
    textUp:{
        position:'absolute',
        width: 88.82,
        height: 17.59,
        left: 93,
        top: 62,
        fontFamily: 'Outfit',
        fontStyle:'normal',
        fontWeight:'900',
        color:'white',
        fontSize:24,
        lineHeight:20,
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
        color:'#2D8CFF',
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
        backgroundColor:'#2D8CFF',
        borderRadius:30,
    },
    textLogin:{
        position:'absolute',
        width: 69,
        height: 20,
        left: 38,
        top: 168,
        fontFamily:'Outfit',
        fontStyle:'normal',
        fontWeight:'900',
        fontSize:24,
        lineHeight:20,
        display:"flex",
        alignItems:'center',
        color:'white'
    },
    viewTextInput:{
        top: 216,
        position:'absolute'

    },
    textForget:{
        position:'absolute',
        width: 123,
        height:20,
        left:214,
        top:340,
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:15,
        lineHeight:20,
        display:'flex',
        textAlign:"right",
        alignItems:'center',
        color:'white'
    },
    btnLogin:{
        position:'absolute',
        left: 24,
        top: 392,
        justifyContent:'center'
    },
    viewTextLR:{
        position:'absolute',
        flexDirection:'row'
    },
    textLeft:{
        position:'absolute',
        width: 186,
        height:20,
        left:77,
        top:470,
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:15,
        lineHeight:20,
        fontFamily:'Outfit',
        color:'white'
    },
    textRight:{
        width: 60,
        height:20,
        left:244,
        top:470,
        color:'#FF5889',
        fontStyle:'normal',
        fontWeight:'700',
        fontSize:15,
        lineHeight:20,
        fontFamily:'Outfit',
    },
    viewFooter:{
        top:500,
    },
    errorText:{
        color:'red',
        marginBottom:5,
        marginLeft:30
    }

})

export default Login;

