import React from "react";
import { View, Text, TextInput,StyleSheet, SafeAreaView } from "react-native";

interface customInputProps {
    label:string,
    placeholder:string,
    onChange?:(val:string) =>void,
    value?:string
    defaultValue?:string
    
}

const CustomInput:React.FC<customInputProps> = (props) =>{
  
    return (
    <SafeAreaView>
        <View style={styles.viewLogin}>
            <Text style={styles.textLabel}>
                {props.label}
            </Text>
            <TextInput 
                placeholder={props.placeholder}
                style={styles.textInput}
                value={props.value}
                onChangeText={props.onChange}
                defaultValue={props.defaultValue}
                />
        </View>
    </SafeAreaView>
        
    
    )
};



const styles = StyleSheet.create({
    container:{
        
    },
    viewLogin:{
        flexDirection:'row',
    
    },
    textInput:{
        borderWidth:1,
        borderColor:'grey',
        height:50,
        borderRadius:15,
        width:300,
    },
    textLabel:{
        color: 'black',
        fontWeight:'bold',
        marginVertical:25,
        marginRight:10,
        justifyContent:'center'
    }

})

export default CustomInput;