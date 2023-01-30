import React, { useCallback, useState } from "react";
import { StyleSheet,View, Text, Image,TouchableOpacity, Alert} from "react-native";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import { Controller,useForm } from "react-hook-form";
import {image} from '../../assets/image';
import {Colors} from '../../assets/Colors'
import CustomInput from "../../assets/Custom/customInputLogin";
import CustomButton from "../../assets/Custom/customButtonLogin";
import LinearGradient from 'react-native-linear-gradient';
import {auth} from '../Firebase/firebase'
interface validate {
    firstname:string,
    lastname:string,
    email:string,
    password:string,
}
const schema = yup.object().shape({
    firstname:yup.string().required(),
    lastname:yup.string().required(),
    password:yup.string().required().min(8, 'At least 8 characters'),
    email:yup.string().email()
})

const Signin:React.FC<{navigation:any}> = ({navigation}) =>{
    const [show,setShow] = useState(false);
    const [tick,setTick] = useState(false);
    const { control,register, handleSubmit, watch, formState: { errors } }:any = useForm<validate>({
        resolver: yupResolver(schema)
      }); 
    const Show = () =>{
        show == true ? setShow(false) : setShow(true)
    }
    const onSignUp =useCallback((value:any) =>{
        auth
        .createUserWithEmailAndPassword(value.email,value.password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log(user?.email)
        })
        .catch(err => console.log(err.message))
        // if(auth.currentUser != null ){
        //     auth.currentUser.updateProfile({
        //         displayName:value.lastname + ' ' + value.firstname
        //     })
        //     .then(()=>console.log("Updated"))
        //     .catch(err=>console.log(err))
        // }
        console.log(value.email)
},[])
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
            <Text style={styles.textLogin}>Register </Text>

            <View style={styles.viewTextInput}>
                    <Controller
                                control={control}
                                rules={{
                                    required:true
                                }}
                                render={({ field: { onChange ,value} }) =>
                                <CustomInput 
                                            placeholder="First name" 
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
                                    required:true
                                }}
                                render={({ field: { onChange ,value} }) =>
                                <CustomInput 
                                            placeholder="Last name" 
                                            onChange={onChange}
                                            value={value} 
                                            img={image.user} 
                                            />                                   
                                } 
                                name={'lastname'}     
                        />
                            {errors.firstname && <Text style={styles.errorText}>This is required Lastname.</Text>}   
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
                                            img={image.email} 
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
                        <View style={styles.selectedButton} >
                            <TouchableOpacity 
                                style={styles.choosenButton}
                                onPress={()=>{
                                    tick ? setTick(false) : setTick(true)
                                }}
                            >
                               {tick ? <Image source={image.tick} style={{width:18,height:18,justifyContent:'center',alignItems:'center'}} /> : ''} 
                            </TouchableOpacity>
                            <View style={{width:275,height:40,left:18}}>
                                <Text style={styles.textChoosen}>by clicking on "Register" you agree to our  
                                    <Text style={styles.textSpecial}> Term & Conditions</Text> and 
                                    <Text style={styles.textSpecial}> Privacy Policy</Text>
                                </Text>
                            </View>

                            

                        </View>
                        <LinearGradient 
                                colors={Colors.colorLogin}  
                                style={styles.linearGradient}
                                start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}}
                        >
                                
                            <CustomButton 
                                    label="Register" 
                                    onPress={handleSubmit(onSignUp)}
                            />
                        </LinearGradient>                   
            </View>
            <View style={{top:710,alignItems:'center'}}>
                <Text style={styles.textChoosen}>Already have an account ? <Text style={styles.textSpecial} onPress={()=>{navigation.navigate('Login')}}>Log In</Text></Text>
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
        position:'absolute',
        width: 97,
        height: 27,
        left: 38,
        top: 168,
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
        top: 216,
        position:'absolute'
    },
    errorText:{
        color:'red',
        marginBottom:5,
        marginLeft:30
    },
    linearGradient:{
        borderRadius:30,
        height:52,
        width:327,
        paddingTop:5,
        marginLeft:30,
        marginTop:60
    },
    selectedButton:{
        flexDirection:'row',
        
    },
    choosenButton:{
        width:18,
        height:18,
        borderRadius:4,
        backgroundColor:'#A4BCC1',
        marginLeft:40,
        marginTop:10
    },
    textChoosen:{
        fontSize:15,
        fontWeight:'400',
        lineHeight:20,
        color:'white'
    },
    textSpecial:{
        color:'#FF5889',
        fontSize:15,
        fontWeight:'400',
        lineHeight:20
    }

})

export default Signin