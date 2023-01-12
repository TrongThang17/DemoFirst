import React,{useState,useEffect, useCallback} from "react";
import {View, Text, Touchable, TouchableOpacity, StyleSheet} from 'react-native'
import CustomInputTodo from "../../assets/Custom/customInputTodo";
import CustomButton from "../../assets/Custom/customButtonLogin";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import { Controller,useForm } from "react-hook-form";
import { Colors } from "../../assets/Colors";

interface validate {
    title:string,
    description:string
}
const schema = yup.object().shape({
    title:yup.string().required() ,
    description:yup.string().required() 
   
})


const TodoDetail:React.FC<{navigation:any}> = ({navigation}) =>{
    const {value,dirty,isValid, control,register, handleSubmit, watch, formState: { errors } }:any = useForm<validate>({
        resolver: yupResolver(schema)
      }); 
    const saveData=()=>{
        navigation.goBack()
    }
    const [isDisable,setIsDisable] = useState(true);
    return (
        <View>
            <Text style={styles.textHeader}>
                Write Here !!
            </Text>
            <View>
                        <Controller
                                control={control}
                                rules={{
                                    required:true
                                }}
                                render={({ field: { onChange ,value} }) =>
                                
                                <CustomInputTodo 
                                        label="Title" 
                                        placeholder="Write your title here !"
                                        onChangeText={onChange}
                                        values={value}
                                        onChangeee={()=>{value ? setIsDisable(false) : setIsDisable(true)}}
                                    />                                   
                                } 
                                name={'title'}                              
                        />    
                            {errors.title && <Text style={styles.errorText}>This is required Username.</Text>}

                        <Controller
                                control={control}
                                render={({ field: { onChange ,value} }) =>
                                
                                <CustomInputTodo 
                                        label="Description" 
                                        placeholder="Write your description here !"
                                        onChangeText={onChange}
                                        values={value}
                                        onChangeee={()=>{value ? setIsDisable(false) : setIsDisable(true)}}
                                    />                                   
                                } 
                                name={'Description'}                              
                        />    
                        
                        <View style={styles.viewButton}>
                            <View style={{marginRight:20}}>
                                <CustomButton label="Save" onPress={handleSubmit(saveData)} disable={isDisable} colorCode={isDisable ? Colors.background: Colors.colorApple}/>
                            </View>
                            <View>
                                <CustomButton label="Cancle" onPress={handleSubmit(saveData)} disable={isDisable} colorCode={isDisable ? Colors.background: Colors.colorApple}/>  
                            </View>
                        </View>   
            </View>

        </View>
    )
   
}

const styles = StyleSheet.create({
    textHeader:{
        textAlign:'center',
        fontSize:50,
        fontWeight:'600',
        color:'#ee6e73',
        marginBottom:50,
        marginTop:50
    },
    errorText:{
        color:'red',
        marginBottom:5,
        marginLeft:30
    },
    viewButton:{
        flexDirection:'row',
        justifyContent:'center',
    }
   

})

export default TodoDetail;