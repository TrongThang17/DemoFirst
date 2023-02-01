import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import CustomInputTodo from "../../assets/Custom/customInputTodo";
import CustomButton from "../../assets/Custom/customButtonLogin";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from "react-hook-form";
import { Colors } from "../../assets/Colors";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../redux/thunk/thunkTask";
import Modal from "react-native-modal";
import { image } from '../../assets/image'
interface validate {
    title: string,
    describe: string
}
const schema = yup.object().shape({
    title: yup.string().min(1, 'You have to write title'),
    describe: yup.string().min(0)

})


const TodoDetail: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { value, reset, control, handleSubmit, formState: { errors } }: any = useForm<validate>({
        resolver: yupResolver(schema)
    });
    const dataDetail = useSelector((state: any) => state.reducerTask.detail_list)
    const [isDisable, setIsDisable] = useState(true);
    const [modalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()

    const handleSaveData = useCallback((value: any) => {
        value.title == undefined ? dispatch(updateTodo(dataDetail.id, dataDetail.title, value.describe))
            : value.describe == undefined ? dispatch(updateTodo(dataDetail.id, value.title, dataDetail.describe))
                : dispatch(updateTodo(dataDetail.id, value.title, value.describe))
        navigation.navigate('Home')

    }, [])

    const onShowErrOrNot = useCallback(() => {
        handleSubmit(),
            !errors.tittle ? setModalVisible(true) : setModalVisible(false)
    }, [])

    const onDisableButton = useCallback((value: any) => {
        value.title || value.describe ? setIsDisable(false) : setIsDisable(true)
        if (value.title || value.describe) {
            setIsDisable(false)
        }
    }, [])

    useEffect(() => {
        // reset form with  data
        reset(dataDetail);
    }, [dataDetail]);

    return (
        <View>
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
                                minLength: 1,

                            }}
                            render={({ field: { onChange, value } }) =>

                                <CustomInputTodo
                                    label="Title"
                                    placeholder="Write your title here !"
                                    values={value}
                                    onChangeText={onChange}
                                    onChangeee={() => { onDisableButton(dataDetail) }}
                                    defaultValue={dataDetail.title}
                                />
                            }
                            name={'title'}
                        />
                        {errors.title && <Text style={styles.errorText}>This is required Title.</Text>}

                        <Controller
                            control={control}
                            render={({ field: { onChange, value } }) =>

                                <CustomInputTodo
                                    label="Description"
                                    placeholder="Write your description here !"
                                    values={value}
                                    onChangeText={onChange}
                                    onChangeee={() => { onDisableButton(dataDetail) }}
                                    defaultValue={dataDetail.describe}
                                />
                            }
                            name={'describe'}
                        />
                    </View>

                    <View style={styles.viewButton}>
                        <View style={{ marginRight: 20 }}>
                            <CustomButton
                                label="Save"
                                onPress={() => { setModalVisible(true) }}
                                disable={isDisable}
                                colorCode={isDisable ? Colors.background : Colors.white}
                                colorLabel='black'
                            />

                            <Modal isVisible={modalVisible} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.popupDelete}>
                                    {
                                        errors.title ?
                                            <>
                                                <View >
                                                    <Text style={styles.textPopup}>This is required Title.</Text>
                                                </View>

                                                <View style={styles.viewBtnPopupDelete}>
                                                    <TouchableOpacity
                                                        style={styles.btnConfirmDelete}
                                                        onPress={() => setModalVisible(false)}
                                                    >
                                                        <Text style={styles.textButton}>OK</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.btnConfirmDelete} onPress={() => setModalVisible(false)}>
                                                        <Text style={styles.textButton}>CANCLE</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </>
                                            :
                                            <>
                                                <View >
                                                    <Text style={styles.textPopup}>Are you sure you want to save it?</Text>
                                                </View>

                                                <View style={styles.viewBtnPopupDelete}>
                                                    <TouchableOpacity
                                                        style={styles.btnConfirmDelete}
                                                        onPress={handleSubmit(handleSaveData)}
                                                    >
                                                        <Text style={styles.textButton}>OK</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.btnConfirmDelete} onPress={() => setModalVisible(false)}>
                                                        <Text style={styles.textButton}>CANCLE</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </>
                                    }
                                </View>
                            </Modal>


                        </View>
                        <View>
                            <CustomButton
                                label="Cancle"
                                onPress={() => {
                                    setIsDisable(true)
                                    reset()
                                }}
                                disable={isDisable}
                                colorCode={isDisable ? Colors.background : Colors.white}
                                colorLabel='black'
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
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
        color: '#ee6e73',
        marginBottom: 50,

    },
    errorText: {
        color: 'red',
        marginBottom: 5,
        marginLeft: 40
    },
    viewButton: {
        flexDirection: 'row',
    },
    textPopup: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: 'red',
        marginTop: 10
    },
    popupDelete: {
        display: 'flex',
        height: 120,
        backgroundColor: 'white',
        borderRadius: 20
    },
    viewBtnPopupDelete: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
    },
    btnConfirmDelete: {
        backgroundColor: '#f2e9e9',
        borderRadius: 30,
        width: 90,
        height: 40,
        margin: 10,
    },
    textButton: {
        marginTop: 10,
        textAlign: 'center',
        fontWeight: '600',
        color: 'red'
    }


})

export default TodoDetail;