import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React, { useState, useMemo, useEffect,useCallback } from 'react'
import { Colors } from '../../../assets/Colors'
import { image } from '../../../assets/image'
import LinearGradient from 'react-native-linear-gradient'
import { Calendar } from 'react-native-calendars';
const Reminder: React.FC<{ navigation: any }> = ({ navigation }) => {

    const [selectedStartDay, setSelectedStartDay]: any = useState('');
    const [selectedEndDay, setSelectedEndDay]: any = useState('');
    const marked = useMemo(() => ({
        [selectedStartDay]: {
            startingDay:true,
            selected: true,
            // selectedColor: Colors.colorSelectedDay,
            // selectedTextColor: Colors.white,
            color: Colors.colorSelectedDay, 
            textColor: Colors.white,
            // borderTopLeftRadius: 30,
            // borderBottomLeftRadius: 30,
            
            
        },
        '2023-02-02': { 
            
            // selectedColor: Colors.colorSelectedDay,
            // selectedTextColor: Colors.white,
            // color: 'rgba(0, 0, 0, 0.2)', 
            textColor: Colors.white,
        },
        '2023-02-03': { 
            
            // selectedColor: Colors.colorSelectedDay,
            // selectedTextColor: Colors.white,
            // color: 'rgba(0, 0, 0, 0.2)', 
            textColor: Colors.white,
        },
        '2023-02-04': { 
            
            // selectedColor: Colors.colorSelectedDay,
            // selectedTextColor: Colors.white,
            // color: 'rgba(0, 0, 0, 0.2)', 
            textColor: Colors.white,
        },
        '2023-02-05': { 
            
            // selectedColor: Colors.colorSelectedDay,
            // selectedTextColor: Colors.white,
            // color: 'rgba(0, 0, 0, 0.2)', 
            textColor: Colors.white,
        },
            
        [selectedEndDay]: {
            endingDay:true,
            selected: true,
            // selectedColor: Colors.colorSelectedDay,
            // selectedTextColor: Colors.white,
            color: Colors.colorSelectedDay, 
            textColor: Colors.white,
      
        },
       
    }), [selectedStartDay, selectedEndDay]);


    const _renderArrow = (direction:any,state:any) => {
        if(direction === 'left') {
            return <Text>aaa</Text>
        } else {
            return <Text>bbb</Text>
        }
    }

    const onDayPress = (day:any)=>{
        selectedStartDay == '' && selectedEndDay == '' ? setSelectedStartDay(day.dateString) :
            selectedStartDay == day.dateString ? setSelectedStartDay('') :
                selectedEndDay == '' ? setSelectedEndDay(day.dateString) :
                    selectedEndDay == day.dateString ? setSelectedEndDay('') :
                        selectedStartDay != day.dateString && selectedEndDay != day.dateString
                            && selectedEndDay > day.dateString ? setSelectedStartDay(day.dateString) :
                            selectedStartDay != day.dateString && selectedEndDay != day.dateString &&
                                selectedEndDay < day.dateString ? setSelectedEndDay(day.dateString) : ''
    }
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
                        console.log('onPressArrowLeft'); goToPreviousMonth();
                    }}
                    onPressArrowRight={(goToNextMonth) => {
                        console.log('onPressArrowRight'); goToNextMonth();
                    }}
                    // renderArrow={_renderArrow}
                    pastScrollRange={0}
                    markingType={'period'}
                    
                    markedDates={marked}
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
                            }, dayTextAtIndex1: {
                                color: 'white',
                                fontWeight: '500',
                                fontSize: 15,
                            }, dayTextAtIndex2: {
                                color: 'white',
                                fontWeight: '500',
                                fontSize: 15,
                            }, dayTextAtIndex3: {
                                color: 'white',
                                fontWeight: '500',
                                fontSize: 15,
                            }, dayTextAtIndex4: {
                                color: 'white',
                                fontWeight: '500',
                                fontSize: 15,
                            }, dayTextAtIndex5: {
                                color: 'white',
                                fontWeight: '500',
                                fontSize: 15,
                            }, dayTextAtIndex6: {
                                color: 'white',
                                fontWeight: '500',
                                fontSize: 15,
                            }
                        },
                        // 'stylesheet.calendar.day.basic': {
                        //     selected: {
                        //       borderRadius: 20
                        //     }
                        //   }
                        // 'stylesheet.day.period': {
                        //     wrapper: {
                        //         alignItems: 'center',
                        //         // alignSelf: 'stretch',
                        //         // marginLeft: -2,
                             
                              
                        //     },
                        //     leftFiller: {
                        //         height: 26,
                        //         flex: 1,
                               
                        //     }
                        // }
                    }}
                    
                    monthFormat='MMMM'
                    style={{

                    }}

                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,


    },
    viewHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {

        color: Colors.white,
        fontWeight: '500',
        fontSize: 17
    },
    viewCurrentStreak: {
        flex: 3,

        justifyContent: 'center',
        alignItems: 'center'
    },
    currentStreak: {
        width: 335,
        height: 70,
        borderRadius: 20
    },
    streakContainer: {
        flex: 1,
        borderRadius: 20,
        flexDirection: 'row'

    },
    streakLeft: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    streakRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    textCurrentStreak: {
        color: Colors.white,
        fontSize: 15,
        fontWeight: '500'
    },
    textLongestStreak: {
        color: Colors.longestStreak,
        fontSize: 13,
        fontWeight: '300'
    },
    viewCalendar: {
        flex: 10, 
    },
})

export default Reminder