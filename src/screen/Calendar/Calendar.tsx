import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import React,{useEffect,useState} from 'react';
import { Colors } from '../../../assets/Colors';
import { image } from '../../../assets/image';
import LinearGradient from 'react-native-linear-gradient';
import Calendars from '../../../assets/Custom/customCalendar';
import I18n from '../../i18njs/i18n';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
const Reminder: React.FC<{ navigation: any }> = ({ navigation }) => {
  const languages: any = useSelector((state: any) => state.reducerLanguage.language);
  I18n.locale = languages;
  const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>{I18n.t('Screen_Calendar.Streak')}</Text>
      </View>
      <View style={styles.viewCurrentStreak}>
        <LinearGradient
          colors={Colors.colorTouchMenu}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.currentStreak}
        >
          <View style={styles.streakContainer}>
            <View style={styles.streakLeft}>
              <Image source={image.streak} />
            </View>
            <View style={styles.streakRight}>
              <Text style={styles.textCurrentStreak}>{I18n.t('Screen_Calendar.Current_Streak')} : 1 </Text>
              <Text style={styles.textLongestStreak}>{I18n.t('Screen_Calendar.Longest_Streak')} : 2</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.viewCalendar}>
        {isFocused ? <Calendars /> : ''} 
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  viewHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 17,
  },
  viewCurrentStreak: {
    flex: 3,

    justifyContent: 'center',
    alignItems: 'center',
  },
  currentStreak: {
    width: 335,
    height: 70,
    borderRadius: 20,
  },
  streakContainer: {
    flex: 1,
    borderRadius: 20,
    flexDirection: 'row',
  },
  streakLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  streakRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textCurrentStreak: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
  },
  textLongestStreak: {
    color: Colors.longestStreak,
    fontSize: 13,
    fontWeight: '300',
  },
  viewCalendar: {
    flex: 10,
  },
});

export default Reminder;
