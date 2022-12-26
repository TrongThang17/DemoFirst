import React,{useState} from "react";
import { SafeAreaView, StyleSheet,ImageBackground, Image, View, Text, Alert } from "react-native";
import CustomInput from "../../assets/Custom/customInputLogin";
import CustomButton from "../../assets/Custom/customButtonLogin";
import {yupResolver} from '@hookform/resolvers/yup';
import { Controller,useForm } from "react-hook-form";
import { useSelector, useDispatch} from "react-redux";
import * as yup from "yup";
import {image} from '../../assets/image'
interface validate {
    username:string,
    password:string
}

const schema = yup.object().shape({
    username:yup.string().required(),
    password:yup.string().required().min(8, 'At least 8 characters')
})
const  LoginScreen:React.FC<{navigation:any}> =  ({navigation}) => {  
    
    const dispatch=useDispatch();
    const inforLogin = useSelector((state:any)=> state.loginReducer);
    const { control,register, handleSubmit, watch, formState: { errors } }:any = useForm<validate>({
        resolver: yupResolver(schema)
      }); 
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
        <SafeAreaView  >
           <View style={styles.background}>
                <View style={styles.header}>
                    <Image source={image.circleLoop} />
                    <View style={{flexDirection:'column'}}> 
                        <Text style={styles.text1}>UpNow</Text>
                        <Text style={{fontSize:15,color:'#2E87F4'}}>Digital Hypnotherapy</Text>
                    </View>
                </View>
                <View style={styles.hr}>
                    <View style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderWidth:3,   
                    }}/> 
                    <View style={{
                        borderTopWidth:StyleSheet.hairlineWidth,  
                        borderTopColor:'white',
                        borderWidth:3,                   
                    }}/>
                </View>
                <Text style={[styles.text1,{marginLeft:30,marginBottom:20}]}>Log In </Text>
                        <View style={styles.viewLogin}>
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
                            
                            <Text style={{color:'white',textAlign:'right',marginRight:30,marginBottom:20}}>Forget Password ?</Text>
                        
                            <CustomButton label="Login" onPress={handleSubmit(login)} 
                                colorCode="#FF7591" />

                            <Text style={{color:'white',textAlign:'center'}}>Don't have an account ? <Text style={{color:'#FF7591'}}>Sign Up</Text></Text>
                            <View style={{flexDirection: 'row', alignItems: 'center',padding:40}}>
                                <View style={{flex: 1, height: 2, backgroundColor: 'black',}} />
                                <View>
                                    <Text style={{width: 90, textAlign: 'center',color:'white'}}>Or Log in With </Text>
                                </View>
                                <View style={{flex: 1, height: 2, backgroundColor: 'black', }} />
                            </View>

                            <View>
                                <CustomButton label="Log in with Facebook" colorCode="#3F60B2" onPress={()=>{}} img={image.facebook} />
                                <CustomButton label="Log in with Apple" colorCode="black" onPress={()=>{}} img={image.apple} />
                            </View>
                </View>
           </View>                             
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'rgb(66, 66, 81)',
        height:'100%',
    },
    viewLogin:{     
         
    },
    header:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:30
    },
    hr:{
        marginBottom:10,
        marginTop:10,
        flexDirection:'column'
    },
    text1:{
        fontSize:30,
        color:'white',
        
    },
    image:{
        width:'100%',
        height:'100%',
        justifyContent:'center'
    },
    textHeader:{
        fontSize:50,
        fontStyle:'italic',
        textAlign:'center',
        marginBottom:100

    },
    errorText:{
        color:'red',
        marginBottom:5,
        marginLeft:30
    }
})

export default LoginScreen;