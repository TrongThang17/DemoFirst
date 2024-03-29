import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomItemInfor from '../../../assets/custom/customItemInfor'
import { Colors } from '../../../assets/Colors'
import {image} from '../../../assets/image'
import I18n from '../../i18njs/i18n'
import { useSelector } from 'react-redux'

const UserInfor = () => {
    const languages:any = useSelector((state:any)=> state.reducerLanguage.language)
    I18n.locale=languages
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>{I18n.t('Screen_UserInfor.UserInfor')}</Text>
        </View>
        <View style={styles.avatar}>
            <Image source={image.avatar} style={{width:85,height:85}}/>
            <Text style={styles.textUnderAvatar}>{I18n.t('Screen_UserInfor.Change_Profile')}</Text>
        </View>
        <View style={styles.infor}>
            <CustomItemInfor label={I18n.t('Screen_UserInfor.First_Name')} value='Renata'/>
            <CustomItemInfor label={I18n.t('Screen_UserInfor.Last_Name')} value='Andryshyn'/>
            <CustomItemInfor label='Email' value='renataandryshyn@gmail.com'/>
            <CustomItemInfor label={I18n.t('Screen_UserInfor.Password')} value='********'/>
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