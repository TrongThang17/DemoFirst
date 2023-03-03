import { Calendar, LocaleConfig } from 'react-native-calendars';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import I18n from '../../src/i18njs/i18n';
import { Colors } from '../Colors';

const Calendars:React.FC = (props:any) => {

  const [selectedStartDay, setSelectedStartDay]: any = useState('');
  const [selectedEndDay, setSelectedEndDay]: any = useState('');
  const languages: any = useSelector((state: any) => state.reducerLanguage.language);
  I18n.locale = languages;
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

  const onDayPress = useCallback(
    (day: any) => {
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
        ? [setSelectedStartDay(selectedEndDay), setSelectedEndDay(day.dateString)]
        : '';
    },
    [selectedStartDay, selectedEndDay]
  );

  const onPressArrowRight = useCallback((goToNextMonth: Function) => {
    goToNextMonth();
  }, []);

  const onPressArrowLeft = useCallback((goToPreviousMonth: Function) => {
    goToPreviousMonth();
  }, []);
  return (
    <Calendar
      onDayPress={onDayPress}
      onPressArrowLeft={onPressArrowLeft}
      onPressArrowRight={onPressArrowRight}
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
  );
};

export default Calendars;
