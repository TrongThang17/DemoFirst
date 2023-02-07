import React, { useState, useEffect, useCallback } from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import CustomInputTodo from "../../assets/Custom/customInputTodo";
import CustomButton from "../../assets/Custom/customButtonLogin";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from "react-hook-form";
import { Colors } from "../../assets/Colors";
import { addTodo } from "../redux/thunk/thunkTask";
import { image } from '../../assets/image'
import {  useDispatch } from "react-redux";
import { useDrawerProgress } from '@react-navigation/drawer'
import Animated,{interpolate,useAnimatedStyle} from 'react-native-reanimated';
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

    const handleAddTodo = useCallback((value: any) => {
        dispatch(addTodo(ID++, value.title, value.describe))
        navigation.navigate('Home')
    }, [])

    const progressDrawer = useDrawerProgress()
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
        <Animated.View style={viewDrawerStyle}>
            <ImageBackground source={image.backgroundtodo} style={{ width: '100%', height: '100%' }}>
                <View style={styles.viewContainer}>
                    <View>
                        <Text style={styles.textHeader}>
                            Write Here !!
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
                                    label="Title"
                                    placeholder="Write your title here !"
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
                                    label="Description"
                                    placeholder="Write your description here !"
                                    onChangeText={onChange}
                                    values={value}
                                />
                            }
                            name={'describe'}
                        />
                    </View>
                    <View>
                        <CustomButton
                            label="Save"
                            onPress={handleSubmit(handleAddTodo)}
                            disable={isDisableButton}
                            colorCode={isDisableButton ? Colors.background : Colors.white}
                            colorLabel='black'
                        />
                    </View>
                </View>
            </ImageBackground>
        </Animated.View>
    )

}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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