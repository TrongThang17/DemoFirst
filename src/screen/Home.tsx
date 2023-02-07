import React, { useEffect, useRef, useState, useCallback } from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import CustomButton from "../../assets/Custom/customButtonLogin";
import { useSelector, useDispatch } from "react-redux";
import { image } from '../../assets/image'
import CustomButtonDelete from "../../assets/Custom/customButtonDelete";
import Item from "../../assets/Custom/customItem";
import { deleteTodo, updateDetail } from "../redux/thunk/thunkTask";
import Modal from "react-native-modal";
import { logout } from "../redux/thunk/thunkLogin";
import { auth } from "../Firebase/firebase";
import { useDrawerProgress } from '@react-navigation/drawer'
import Animated,{interpolate,useAnimatedStyle} from 'react-native-reanimated';
import { Colors } from "../../assets/Colors";
const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
    const inf = useSelector((state: any) => state.reducerTask.list)
    const [selected, setSelected] = useState(new Map());
    const [selectedCheck, setSelectedCheck] = useState(new Map());
    const [allSelectCheck, setAllSelectCheck] = useState(false)
    const [allDataCheckbox, setAllDataCheckbox]: any = useState([])
    const [modalShowPopupDelete, setModalShowPopupDelete] = useState(false)
    const dispatch = useDispatch()

    const onSelectItem = useCallback(
        (id: number) => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));
            setSelected(newSelected);
        },
        [selected],
    );

    const onSendValueToDetail = (id: number) => {
        inf.forEach((element: any) => {
            if (element.id == id) dispatch(updateDetail(element))
        });
        navigation.navigate('TodoDetail')
    }
    const onSelectCheck = (
        (id: number) => {
            const newSelectedCheck = new Map(selectedCheck);
            let arr: any = [];
            newSelectedCheck.set(id, !selectedCheck.get(id));
            setSelectedCheck(newSelectedCheck);
            let numberCount = newSelectedCheck.values.length
            inf.forEach((element: any) => {
                if (newSelectedCheck.get(element.id) == true) {
                    numberCount--
                    arr.push(element.id)
                }
            });
            setAllDataCheckbox(arr)
            numberCount == 0 ? setAllSelectCheck(false) : setAllSelectCheck(true)
        })

    const onLogout = useCallback(() => {
        dispatch(logout())
    }, [])

    let user = auth.currentUser

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
        <Animated.View style={[{flex: 1,backgroundColor:Colors.backColorMain},viewDrawerStyle]}>
            <View>
                <Text style={styles.title}>All Tasks {user?.displayName}  </Text>
            </View>
            <View style={styles.viewBody}>
                <View>
                    <View style={{ height: 30, alignItems: 'flex-end', marginBottom: 10, marginRight: 30 }}>
                        {allSelectCheck ? <CustomButtonDelete onPress={() => {
                            setModalShowPopupDelete(true)
                        }} /> : ''}

                        <Modal isVisible={modalShowPopupDelete} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.popupDelete}>
                                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700', color: 'red' }}>Are you sure you want to delete it?</Text>
                                <View style={styles.viewBtnPopupDelete}>
                                    <TouchableOpacity
                                        style={styles.btnConfirmDelete}
                                        onPress={() => {
                                            dispatch(deleteTodo(allDataCheckbox))
                                            navigation.replace('Home')
                                        }}
                                    >
                                        <Text style={styles.textButton}>OK</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnConfirmDelete} onPress={() => setModalShowPopupDelete(false)}>
                                        <Text style={styles.textButton}>CANCLE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View>
                        <FlatList
                            style={{ height: 400, width: '100%' }}
                            data={inf}
                            keyExtractor={(item: any) => item.id}
                            renderItem={({ item }) => (
                                <Item
                                    id={item.id}
                                    title={item.title}
                                    describe={item.describe}
                                    selected={!!selected.get(item.id)}
                                    selectedCheck={!!selectedCheck.get(item.id)}
                                    onSelectItem={onSelectItem}
                                    onSelectCheck={onSelectCheck}
                                    allSelectCheck={allSelectCheck}
                                    onSendValue={onSendValueToDetail}
                                />
                            )}
                            extraData={selected}
                        />
                    </View>
                </View>

                <View style={styles.viewTouchPlus}>
                    <TouchableOpacity style={styles.touchPlus} onPress={() => { navigation.navigate('AddTodo') }}>
                        <Text style={styles.textPlus}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 30 }}>
                    <CustomButton label="Logout" onPress={() => navigation.goBack()} colorCode="#9ee6e6" />
                </View>
            </View>

        </Animated.View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red'
    },
    viewBody: {
        flex: 1,
        justifyContent: 'center',

    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        color: 'white',
    },
    touchPlus: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        justifyContent: 'center',
    },
    textPlus: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 40,

    },
    choosenButton: {
        width: 18,
        height: 18,
        borderRadius: 4,
        backgroundColor: '#A4BCC1',
        marginLeft: 40,
        marginTop: 10
    },
    viewContent: {
        flexDirection: 'row',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    popupDelete: {
        width: 300,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 20
    },
    viewBtnPopupDelete: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
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
    },
    viewTouchPlus: {
        alignItems: 'center',
    },

})

export default Home;
