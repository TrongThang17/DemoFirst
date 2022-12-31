import React from "react";
import { View, Text, TextInput,StyleSheet, SafeAreaView, Image } from "react-native";


interface customInputProps {
    placeholder:string,
    onChange?:(val:string) =>void,
    value?:string
    defaultValue?:string
    img?:any
    
}

const CustomInput:React.FC<customInputProps> = (props) =>{
  
    return (
    <SafeAreaView>
        <View style={styles.viewLogin}>
            
            <Image source={props.img}  style={styles.images} />
            <TextInput 
                placeholder={props.placeholder}
                placeholderTextColor="#828187"
                style={styles.textInput}
                value={props.value}
                onChangeText={props.onChange}
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
        color:'#828187'
    },
    textLabel:{
        color: 'black',
        fontWeight:'bold',
        marginVertical:25,
        marginRight:10,
        justifyContent:'center'
    },
    images:{
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        


    }

})

export default CustomInput