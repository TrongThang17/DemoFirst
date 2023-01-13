import React,{useCallback, useState} from "react";
import {TouchableOpacity, StyleSheet,Text,View} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
const  Item = ( {id, title,describe, selected, onSelectItem,selectedCheck,onSelectCheck,onSendValue }:any) =>  {

    return (
        <View style={{alignItems:'center'}}>
            <View style={styles.container}>
                    <CheckBox 
                        style={styles.checkbox}
                        boxType='circle'
                        value={selectedCheck}
                        onValueChange={()=>onSelectCheck(id)}
                    />
                    <TouchableOpacity
                        onPress={() =>{
                            onSelectItem(id)
                            onSendValue(id)
                        
                        }}
                        style={styles.item}
                    >
                        <Text style={styles.title}>{ title  }</Text>
                    </TouchableOpacity>
            </View>
        </View>

       
    );
  }

const styles= StyleSheet.create({
    container:{
        width:350,
        height:'100%',
        flexDirection:'row',
        backgroundColor:'#f0e9e9',
        marginBottom:10,
        flex:1,
        borderRadius:50,
        alignItems:'center'
    },
    item:{
        width:'70%',
        
    },
    title:{
        fontSize:20,
        fontWeight:'400',
        color:'#1a0808'
    },
    buttonDelete:{
        flex:1,
        alignItems:'flex-end'
    },
    checkbox:{
        marginLeft:20,
        marginRight:30,
        height:70,
    }
})

export default Item