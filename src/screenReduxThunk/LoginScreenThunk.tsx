import React,{useState} from "react";
import { SafeAreaView, StyleSheet,ImageBackground, Image, View, Text, Alert } from "react-native";
import CustomButton from "../../assets/Custom/customButtonLogin";
import CustomInput from "../../assets/Custom/customInputLogin";
import {yupResolver} from '@hookform/resolvers/yup';
import { Controller,useForm } from "react-hook-form";
import { useSelector} from "react-redux";
import * as yup from "yup";
import axios from 'axios';
import * as f from '../reduxThunk/actions'
import { store } from "../reduxThunk/store";
import {image} from '../../assets/image'
interface validate {
    username:string,
    password:string
}

const schema = yup.object().shape({
    username:yup.string().required(),
    password:yup.string().required().min(8, 'At least 8 characters')
})
const  LoginScreenThunk:React.FC<{navigation:any}> =  ({navigation}) => {  
    const data = useSelector((state:any)=> state.loginReducers);
    const { control,register, handleSubmit, watch, formState: { errors } }:any = useForm<validate>({
        resolver: yupResolver(schema)
      }); 
  
    const baseUrl = "https://reqres.in";
    
    const submit =  (value:any) =>{ 
          
        setTimeout(()=>{
                store.dispatch(f.login(value.username,value.password))       
        },3000)      
        navigation.navigate('HomeThunk');              
   } 
    return (
        <SafeAreaView  >
            <ImageBackground source={require('../../assets/image/backgroundDemo.jpg')} 
                            resizeMode="cover" style={styles.image}>
                 <View>
                 <Text style={styles.textHeader}>
                        WELCOME REDUX THUNK {data.username}
                    </Text>
                 </View>
                 
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
                                    img={image.password} 
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
                    
                  
                    <CustomButton label="Login" onPress={handleSubmit(submit)} 
                        colorCode="#9ee6e6" />
                </View>
                
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    viewLogin:{     
         
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
        marginBottom:30

    },
    errorText:{
        color:'red',
        marginBottom:5
    }
})

export default LoginScreenThunk;