import { View, Text,StyleSheet } from 'react-native'
import React,{useCallback} from 'react'
import { Colors } from '../../../assets/Colors'
import {image} from '../../../assets/image'
import CustomItemSetting from '../../../assets/Custom/cusomItemSetting'
import I18n from '../../i18njs/i18n'
const Setting = (props: any) => {

    const onPressUserInforItem = useCallback(() => {
        props.navigation.navigate('UserInfor');
      },[],
    )

    const onPressLanguageItem = useCallback(() => {
        props.navigation.push('Language');
      },[],
    )
    

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>{I18n.t('Screen_Setting.Setting')}</Text>
        </View>
        <View style={styles.infor}>
            <View style={styles.view1}>
                <CustomItemSetting label={I18n.t('Screen_Setting.UserInfor')} image={image.iconSetting} color={Colors.white} onPress={onPressUserInforItem}/>
                <CustomItemSetting label={I18n.t('Screen_Setting.MySub')} image={image.iconSetting} color={Colors.white}/>
                <CustomItemSetting label={I18n.t('Screen_Setting.Profile_Tag')}  image={image.iconSetting} color={Colors.white}/>
            </View>
            <View style={styles.view2}>
                <CustomItemSetting label={I18n.t('Screen_Setting.Language')}  image={image.iconSetting} color={Colors.white} onPress={onPressLanguageItem}/>
                <CustomItemSetting label={I18n.t('Screen_Setting.Term_Condition')}  image={image.iconSetting} color={Colors.white}/>
                <CustomItemSetting label={I18n.t('Screen_Setting.Privacy')}  image={image.iconSetting} color={Colors.white}/>
            </View>
            <View style={styles.view3}>
                <CustomItemSetting label={I18n.t('Screen_Setting.Delete_Account')}  image={image.iconSetting} color={Colors.colorItemDelete}/>
            </View>
           
           
           
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
    infor:{
        flex:13
    },
    view1:{
       
        flex:2,
        justifyContent:'center',
        
    },
    view2:{
        flex:3,
        justifyContent:'flex-end',
     
    },
    view3:{
     
        flex:1,
        justifyContent:'center'
    }
})

export default Setting