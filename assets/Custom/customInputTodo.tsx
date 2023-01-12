import React from "react";
import { View, Text, TextInput,StyleSheet, SafeAreaView, Image, Touchable, TouchableOpacity } from "react-native";

interface customInputProps {
    placeholder:string,
    onChangeText?:(val:string) =>void,
    label:string,
    values?:string,
    onChangeee?:()=>void,
    defaultValue?:string
}

const CustomInputTodo:React.FC<customInputProps> = (props) =>{
    
    return (
    <SafeAreaView>
        <View style={[styles.viewLogin,
                    {
                        height:props.label=='Title' ? 50 : 250,
                        borderRadius:props.label=='Title' ? 100 : 20,
                        flexDirection:props.label=='Title' ? 'row' : 'column'
                    }]}>
            <Text style={[styles.textLabel,{}]}>{props.label}</Text>
            <TextInput 
                placeholder={props.placeholder}
                onEndEditing={props.onChangeee}
                placeholderTextColor="#828187"
                style={[styles.textInput,{ height:props.label=='Title' ? 50 : 150,}]}
                value={props.values}
                onChangeText={props.onChangeText}
                defaultValue={props.defaultValue}
                />
        </View>
    </SafeAreaView>
        
    )
}



const styles = StyleSheet.create({
    container:{
        
    },
    viewLogin:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 327,
        height: 50,
        borderRadius: 100,
        marginLeft:30,
        marginBottom:10,
        marginRight:30
    },
    textInput:{
        height:50,
        width:270,
        color:'#828187',
        
    },
    textLabel:{
        color: 'black',
        fontWeight:'bold',
        fontSize:20,
        justifyContent:'center',
        bottom:2
    },
    images:{
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        marginLeft:25
    }

})

export default CustomInputTodo