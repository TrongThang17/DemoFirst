import React,{useState,useEffect, useCallback} from "react";
import {View, Text, Touchable, TouchableOpacity, StyleSheet} from 'react-native'
import CustomInputTodo from "../../assets/Custom/customInputTodo";
import CustomButton from "../../assets/Custom/customButtonLogin";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import { Controller,useForm } from "react-hook-form";
import { Colors } from "../../assets/Colors";
import { store } from "../redux/store";
import { addTodo } from "../redux/thunk/thunkTask";
import initTask from "../redux/data/initTask";
import { useSelector,useDispatch } from "react-redux";
interface validate {
    title:string,
}
const schema = yup.object().shape({
    title:yup.string().required() 
   
})
let ID=0
const AddTodo:React.FC<{navigation:any}> = ({navigation}) =>{
    const { control,register, handleSubmit, watch, formState: { errors } }:any = useForm<validate>({
        resolver: yupResolver(schema)
      }); 
    const inf = useSelector((state:any)=>state.reducerTask.list)
    const dispatch = useDispatch()
    const handleAddTodo =useCallback((value:any)=>{
        
        dispatch(addTodo(ID++,value.title,value.describe))
        navigation.navigate('Home')
    },[])
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
                                    />                                   
                                } 
                                name={'describe'}                              
                        />    
                <CustomButton label="Save" onPress={handleSubmit(handleAddTodo)} disable={isDisable} colorCode={isDisable ? Colors.background: Colors.colorApple}/> 
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
   

})

export default AddTodo;