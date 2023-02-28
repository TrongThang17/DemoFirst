import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from '../../../assets/Colors';
import { image } from '../../../assets/image';
import LinearGradient from 'react-native-linear-gradient';
import { Calendar } from 'react-native-calendars';

const Reminder: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedStartDay, setSelectedStartDay]: any = useState('');
  const [selectedEndDay, setSelectedEndDay]: any = useState('');

  const getDateForCalendar = (date: any) => {
    let myDate = new Date(date);
    const yr = myDate.getFullYear();
    const month = `${myDate.getMonth() + 1 < 10 ? 0 : ''}${myDate.getMonth() + 1}`;
    const d = `${myDate.getDate() < 10 ? 0 : ''}${myDate.getDate()}`;
    return `${yr}-${month}-${d}`;
  };

  const getAllDatesBetween = (fromDate: any, toDate: any) => {
    let startDate = new Date(fromDate);
    let endDate = new Date(toDate);
    let curDate = new Date(startDate.getTime());
    const datesForCalendar: any = {};
    datesForCalendar[getDateForCalendar(fromDate)] = {
      startingDay: true,
      textColor: 'white',
    };
    if (toDate) {
      while (curDate < endDate) {
        curDate = new Date(curDate.setDate(curDate.getDate() + 1));
        datesForCalendar[getDateForCalendar(curDate)] = {
          color: 'rgba(0, 0, 0, 0.1)',
          textColor: 'white',
        };
      }
      datesForCalendar[getDateForCalendar(toDate)] = {
        endingDay: true,
        textColor: 'white',
      };
    }

    return datesForCalendar;
  };

  useEffect(() => {
    if (selectedEndDay < selectedStartDay) {
      setSelectedEndDay(selectedStartDay);
      setSelectedStartDay(selectedEndDay);
    }
  }, [selectedEndDay]);

  const onDayPress = (day: any) => {
    selectedStartDay == '' && selectedEndDay == ''
      ? setSelectedStartDay(day.dateString) 
      : selectedStartDay == day.dateString
      ? setSelectedStartDay('')
      : selectedEndDay == ''
      ? setSelectedEndDay(day.dateString)
      : selectedEndDay == day.dateString
      ? setSelectedEndDay('')
      : selectedStartDay != day.dateString &&
        selectedEndDay != day.dateString &&
        selectedEndDay > day.dateString
      ? setSelectedStartDay(day.dateString)
      : selectedStartDay != day.dateString &&
        selectedEndDay != day.dateString &&
        selectedEndDay < day.dateString 
      ? [setSelectedStartDay(selectedEndDay) ,setSelectedEndDay(day.dateString)]
      : '';
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>My Streak</Text>
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
              <Text style={styles.textCurrentStreak}>Current streak: 1 </Text>
              <Text style={styles.textLongestStreak}>Longest streak: 2</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.viewCalendar}>
        <Calendar
          onDayPress={onDayPress}
          onPressArrowLeft={(goToPreviousMonth) => {
            goToPreviousMonth();
          }}
          onPressArrowRight={(goToNextMonth) => {
            goToNextMonth();
          }}
          markingType={'period'}
          markedDates={getAllDatesBetween(selectedStartDay, selectedEndDay)}
          theme={{
            calendarBackground: Colors.backgroundCalendar,
            todayTextColor: '#141617',
            dayTextColor: Colors.white,
            textDayFontWeight: '300',
            textDayFontSize: 17,
            monthTextColor: 'white',
            textMonthFontSize: 20,
            textMonthFontWeight: '600',
            textDisabledColor: Colors.textDisableColor,
            'stylesheet.calendar.header': {
              dayTextAtIndex0: {
                color: 'white',
                fontWeight: '500',
                fontSize: 15,
              },
              dayTextAtIndex1: {
                color: 'white',
                fontWeight: '500',
                fontSize: 15,
              },
              dayTextAtIndex2: {
                color: 'white',
                fontWeight: '500',
                fontSize: 15,
              },
              dayTextAtIndex3: {
                color: 'white',
                fontWeight: '500',
                fontSize: 15,
              },
              dayTextAtIndex4: {
                color: 'white',
                fontWeight: '500',
                fontSize: 15,
              },
              dayTextAtIndex5: {
                color: 'white',
                fontWeight: '500',
                fontSize: 15,
              },
              dayTextAtIndex6: {
                color: 'white',
                fontWeight: '500',
                fontSize: 15,
              },
            },

            'stylesheet.day.period': {
              wrapper: {
                alignItems: 'center',
                alignSelf: 'stretch',
                marginLeft: -1,
                borderRadius: 2,
                overflow: 'hidden',
              },
              leftFiller: {
                height: 26,
                flex: 1,
                marginLeft: -10,
              },
              rightFiller: {
                height: 26,
                flex: 1,
                marginRight: 60,
              },
            },
          }}
          monthFormat="MMMM"
          style={{}}
        />
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
