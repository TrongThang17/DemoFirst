import React,{useCallback, useState} from "react";
import {TouchableOpacity, StyleSheet,Text,View} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
const  Item = ( {id, title,describe, selected, onSelect,selectedCheck,onSelectCheck,navigation,onDeleteTask }:any) =>  {

    return (
        <View style={styles.container}>
                <CheckBox 
                    value={selectedCheck}
                    onValueChange={()=>onSelectCheck(id)}
                />

                <TouchableOpacity
                    onPress={() =>{
                        onSelect(id)
                        navigation()
                    }}
                    style={[
                    styles.item,
                    { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
                    ]}
                >
                    <Text style={styles.title}>{id + '   '+ title + '     ' + describe }</Text>
                </TouchableOpacity>
        </View>
     
    );
  }

const styles= StyleSheet.create({
    container:{
        width:'100%',
        height:70,
        flexDirection:'row',
        backgroundColor:'yellow',
        marginBottom:10,
        flex:1,
    
        alignItems:'center'
    },
    item:{
        height:60,
        width:'60%',
        justifyContent:'center'
    },
    title:{

    },
    buttonDelete:{
        flex:1,
        alignItems:'flex-end'
    }
})

export default Item