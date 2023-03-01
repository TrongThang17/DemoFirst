import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Colors } from '../../../assets/Colors';
import { image } from '../../../assets/image';
import LinearGradient from 'react-native-linear-gradient';
import { sendCurrentScreen } from '../../redux/thunk/thunkCurrentScreen';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import I18n from '../../languages/i18n';

const SlideMenu:React.FC<{ navigation: any }> = ({navigation}) => {
  const dispatch = useDispatch();
  const currentScreen = useSelector((state: any) => state.reducerCurrentScreen.currentScreen);
  const [currentTab, setCurrentTab] = useState('Home');
  const languages:any = useSelector((state:any)=> state.reducerLanguage.language)
  useEffect(() => {
    setCurrentTab(currentScreen);
  });

  const onAvatarPress = useCallback(()=>{
   navigation.navigate('UserInfor');
  },[])

  const onPressItemHome = useCallback(()=>{
    dispatch(sendCurrentScreen('Home'));
    navigation.navigate('Home');
  },[languages])

  const onPressItemCalendar = useCallback(()=>{
    dispatch(sendCurrentScreen('Calendar'));
    navigation.navigate('Calendar');
  },[languages])

  const onPressItemAddTodo = useCallback(()=>{
    dispatch(sendCurrentScreen('AddTodo'));
    navigation.navigate('AddTodo');
  },[])

  const onPressItemTodoDetail = useCallback(()=>{
    dispatch(sendCurrentScreen('TodoDetail'));
    navigation.navigate('TodoDetail');
  },[])

  const onPressItemWelcomeVideo = useCallback(()=>{
    dispatch(sendCurrentScreen('Welcome video'));
  },[])

  const onPressItemReward = useCallback(()=>{
    dispatch(sendCurrentScreen('Rewards'));
  },[])

  const onPressItemHelp = useCallback(()=>{
    dispatch(sendCurrentScreen('Help & Support'));
  },[])

  const onPressItemSetting = useCallback(()=>{
    dispatch(sendCurrentScreen('Settings'));
    navigation.navigate('Setting');
  },[])

  const onPressItemDisclaimer = useCallback(()=>{
    dispatch(sendCurrentScreen('Disclaimer'));
  },[])

 


  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image source={image.logoMenu} style={styles.logoMenu} />
      </View>
      <TouchableOpacity onPress={onAvatarPress}>
        <View style={styles.avatar}>
          <Image source={image.avatar} style={styles.avatarImg} />
          <Text style={styles.avatarText}>James B.</Text>
        </View>
      </TouchableOpacity>
      <ScrollView style={styles.menuBar}>
        <TouchableOpacity
          onPress={onPressItemHome}
        >
          <LinearGradient
            colors={currentTab == 'Home' ? Colors.colorTouchMenu : Colors.null}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.touchMenu}
          >
            <Image source={image.home} style={styles.iconMenu} />
            <Text style={styles.textMenu}>{I18n.t('Home')}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressItemCalendar}
        >
          <LinearGradient
            colors={currentTab == 'Calendar' ? Colors.colorTouchMenu : Colors.null}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.touchMenu}
          >
            <Image source={image.reminder} style={styles.iconMenu} />
            <Text style={styles.textMenu}>{I18n.t('Calendar')}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressItemAddTodo}
        >
          <LinearGradient
            colors={currentTab == 'AddTodo' ? Colors.colorTouchMenu : Colors.null}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.touchMenu}
          >
            <Image source={image.user} style={styles.iconUser} />
            <Text style={styles.textMenu}>{I18n.t('Invite')}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressItemTodoDetail}
        >
          <LinearGradient
            colors={currentTab == 'TodoDetail' ? Colors.colorTouchMenu : Colors.null}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.touchMenu}
          >
            <Image source={image.gmail} style={styles.iconMenu} />
            <Text style={styles.textMenu}>{I18n.t('Send')}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressItemWelcomeVideo}
        >
          <LinearGradient
            colors={currentTab == 'Welcome video' ? Colors.colorTouchMenu : Colors.null}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.touchMenu}
          >
            <Image source={image.video} style={styles.iconMenu} />
            <Text style={styles.textMenu}>{I18n.t('Welcome')}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressItemReward}
        >
          <LinearGradient
            colors={currentTab == 'Rewards' ? Colors.colorTouchMenu : Colors.null}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.touchMenu}
          >
            <Image source={image.reward} style={styles.iconMenu} />
            <Text style={styles.textMenu}>{I18n.t('Reward')}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressItemHelp}
        >
          <LinearGradient
            colors={currentTab == 'Help & Support' ? Colors.colorTouchMenu : Colors.null}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.touchMenu}
          >
            <Image source={image.help} style={styles.iconHelpSetting} />
            <Text style={styles.textMenu}>{I18n.t('Help')}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressItemSetting}
        >
          <LinearGradient
            colors={currentTab == 'Settings' ? Colors.colorTouchMenu : Colors.null}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.touchMenu}
          >
            <Image source={image.setting} style={styles.iconHelpSetting} />
            <Text style={styles.textMenu}>{I18n.t('Setting')}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressItemDisclaimer}
        >
          <LinearGradient
            colors={currentTab == 'Disclaimer' ? Colors.colorTouchMenu : Colors.null}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.touchMenu}
          >
            <Image source={image.disclaimer} style={styles.iconMenu} />
            <Text style={styles.textMenu}>{I18n.t('Disclaimer')}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={{ color: 'white' }}>
            {I18n.t('Power_By')} <Text style={{ fontWeight: '700' }}> UpNow</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width:281
  },
  viewLogo: {
    justifyContent: 'flex-start',
    padding: 20,
  },
  logoMenu: {
    width: 45,
    height: 45,
  },
  avatar: {
    marginLeft: 45,
    marginBottom: 20,
  },
  avatarImg: {
    width: 65,
    height: 65,
  },
  avatarText: {
    fontFamily: 'outfit',
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  menuBar: {
    flex: 1,
    marginLeft: 20,
  },
  touchMenu: {
    borderRadius: 70,
    width: 221,
    height: 52,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 27.1,
    marginBottom: 5,
  },
  iconMenu: {},
  textMenu: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    paddingLeft: 18.36,
  },
  iconUser: {
    width: 19,
    height: 28,
  },
  iconHelpSetting: {
    width: 20,
    height: 29,
  },
  footer: {
    paddingLeft: 26,
    paddingBottom: 10,
  },
});

export default SlideMenu;
