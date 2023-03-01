import { View, Text,StyleSheet } from 'react-native'
import React,{useCallback,useState,useEffect} from 'react'
import { Colors } from '../../../assets/Colors'
import {image} from '../../../assets/image'
import CustomItemLanguage from '../../../assets/Custom/customItemLanguage'
import { useSelector,useDispatch } from 'react-redux'
import I18n from '../../languages/i18n'
import { onChangeLanguaue } from '../../redux/thunk/thunkLanguage';
import RNRestart from 'react-native-restart';
const Language = (props: any) => {
    const [selectedEnglish,setSelectedEnglish] = useState(false);
    const [selectedVietnamese,setSelectedVietnamese] = useState(false);
    const languages:any = useSelector((state:any)=> state.reducerLanguage.language)
   

    I18n.locale=languages
    const dispatch = useDispatch();
      const onChangeLanguageVie = useCallback(() => {
        dispatch(onChangeLanguaue('vi'));
        // RNRestart.restart();
      }, []);

      const onChangeLanguageEng = useCallback(() => {
        dispatch(onChangeLanguaue('en'));
        // RNRestart.restart();
      }, []);

      useEffect(()=>{
        languages == 'vi' ? [setSelectedVietnamese(true) ,setSelectedEnglish(false)]:
        languages == 'en' ? [setSelectedEnglish(true) ,setSelectedVietnamese(false)]:''
      },[languages])
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>{I18n.t('Language')}</Text>
        </View>
        <View style={styles.infor}>
            <View style={styles.viewContent}>
                <CustomItemLanguage 
                    label={I18n.t('English')}  
                    image={selectedEnglish ? image.tickLanguage :''} 
                    color={Colors.white} onPress={onChangeLanguageEng}

                />
                <CustomItemLanguage label={I18n.t('Vietnamese')}  image={selectedVietnamese ? image.tickLanguage :''} color={Colors.white} onPress={onChangeLanguageVie}/>
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
    viewContent:{
        marginTop:90
    },  
    tickIcon:{
        width:15,
        height:15
    }
})

export default Language