import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomItemInfor from '../../../assets/Custom/customItemInfor'
import { Colors } from '../../../assets/Colors'
import {image} from '../../../assets/image'

const UserInfor = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>User Infor</Text>
        </View>
        <View style={styles.avatar}>
            <Image source={image.avatar} style={{width:85,height:85}}/>
            <Text style={styles.textUnderAvatar}>Change profile photo</Text>
        </View>
        <View style={styles.infor}>
            <CustomItemInfor label='First name' value='Renata'/>
            <CustomItemInfor label='Last name' value='Andryshyn'/>
            <CustomItemInfor label='Email' value='renataandryshyn@gmail.com'/>
            <CustomItemInfor label='Password' value='********'/>
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:Colors.background
    },
    header:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textHeader:{
        fontSize:17,
        fontWeight:'500',
        color:Colors.colorTextHeaderInfor,
    },
    avatar:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:10
    },
    textUnderAvatar:{
        color:Colors.colorTextUnderAvatar,
        fontSize:15,
        fontWeight:'500',
        marginTop:15
    },
    infor:{
        flex:10
    }
})

export default UserInfor