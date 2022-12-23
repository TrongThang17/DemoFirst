import React,{useState} from "react";
import { SafeAreaView, StyleSheet,ImageBackground, Image, View, Text, Alert } from "react-native";
import CustomInput from "../../assets/image/custom/customInputLogin";
import CustomButton from "../../assets/image/custom/customButtonLogin";
import {yupResolver} from '@hookform/resolvers/yup';
import { Controller,useForm } from "react-hook-form";
import { useSelector, useDispatch} from "react-redux";
import * as yup from "yup";

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
        setTimeout(()=>{
            dispatch({
                type:'LOGIN',
                payload:{
                    username:value.username,
                    password:value.password
                }
            })  
        })
           
            
          
        
         
        
    navigation.navigate('HomeScreen');   
   }
   
    return (
        <SafeAreaView  >
            <ImageBackground source={require('../../assets/image/backgroundDemo.jpg')} 
                            resizeMode="cover" style={styles.image}>
                 <View>
                 <Text style={styles.textHeader}>
                        WELCOME {inforLogin.username}
                    </Text>
                 </View>
                 
                <View style={styles.viewLogin}>
                    <Controller
                        control={control}
                        rules={{
                            required:true
                        }}
                        render={({ field: { onChange ,value} }) =>
                        <CustomInput label="Username" 
                                    placeholder="username" 
                                    onChange={onChange}
                                    value={value}  
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
                        <CustomInput label="Password" 
                                    placeholder="password"
                                    onChange={onChange} 
                                    value={value}  
                                    
                                    />
                        }
                    name={'password'}
                    />
                     {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                    
                  
                    <CustomButton label="Login" onPress={handleSubmit(login)} 
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
        marginBottom:100

    },
    errorText:{
        color:'red',
        marginBottom:5
    }
})

export default LoginScreen;