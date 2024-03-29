import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet } from 'react-native'
import CustomInputTodo from "../../../assets/custom/customInputTodo";
import CustomButton from "../../../assets/custom/customButtonLogin";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from "react-hook-form";
import { Colors } from "../../../assets/Colors";
import { addTodo } from "../../redux/thunk/thunkTask";
import { sendCurrentScreen } from "../../redux/thunk/thunkCurrentScreen";
import I18n from '../../i18njs/i18n';
import { useDispatch ,useSelector} from "react-redux";
import { useDrawerProgress } from '@react-navigation/drawer'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
interface validate {
    title: string,
}
const schema = yup.object().shape({
    title: yup.string().required()

})
let ID = 0
const AddTodo: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { control, register, handleSubmit, watch, formState: { errors } }: any = useForm<validate>({
        resolver: yupResolver(schema)
    });
    const [isDisableButton, setIsDisableButton] = useState(true);
    const dispatch = useDispatch()
    const progressDrawer = useDrawerProgress()
    const languages:any = useSelector((state:any)=> state.reducerLanguage.language)
    I18n.locale=languages
    const onAddTodo = useCallback((value: any) => {
        dispatch(addTodo(ID++, value.title, value.describe))
        dispatch(sendCurrentScreen('Home'))
        navigation.navigate('Home')
    }, [])


    const viewDrawerStyle = useAnimatedStyle(() => {
        const scale = interpolate(progressDrawer.value,
            [0, 1],
            [1, 0.8]
        )
        const borderRadius = interpolate(progressDrawer.value,
            [0, 1],
            [0, 50]
        )
        return {
            transform: [{ scale }], borderRadius
        }
    })


    return (
        <Animated.View style={[{ backgroundColor: Colors.backColorMain, flex: 1 }, viewDrawerStyle]}>
            <View style={styles.viewContainer}>
                <View>
                    <Text style={styles.textHeader}>
                        {I18n.t('Screen_AddTodo.Write_Here')}
                    </Text>
                </View>

                <View>
                    <Controller
                        control={control}
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) =>

                            <CustomInputTodo
                                label={I18n.t('Screen_AddTodo.Title')}
                                placeholder={I18n.t('Screen_AddTodo.Title_PlaceHolder')}
                                onChangeText={onChange}
                                values={value}
                                onChangeee={() => { value ? setIsDisableButton(false) : setIsDisableButton(true) }}
                            />
                        }
                        name={'title'}
                    />
                    {errors.title && <Text style={styles.errorText}>This is required Username.</Text>}

                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) =>

                            <CustomInputTodo
                                label={I18n.t('Screen_AddTodo.Description')}
                                placeholder={I18n.t('Screen_AddTodo.Description_PlaceHolder')}
                                onChangeText={onChange}
                                values={value}
                            />
                        }
                        name={'describe'}
                    />
                </View>
                <View>
                    <CustomButton
                        label={I18n.t('Screen_AddTodo.Save')}
                        onPress={handleSubmit(onAddTodo)}
                        disable={isDisableButton}
                        colorCode={isDisableButton ? Colors.background : Colors.white}
                        colorLabel='black'
                    />
                </View>
            </View>
        </Animated.View>
    )

}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: '600',
        color: 'white',
        marginBottom: 50,
        marginTop: 50
    },
    errorText: {
        color: 'red',
        marginBottom: 5,
        marginLeft: 30
    },


})

export default AddTodo;