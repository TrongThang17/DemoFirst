import React from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView, Image, Touchable, TouchableOpacity } from "react-native";
import { image } from '../image'

interface customInputProps {
    placeholder: string,
    onChange?: (val: string) => void,
    value?: string
    img?: any
    img1?: any
    onClickEye?: () => void
    show?: boolean
}

const CustomInput: React.FC<customInputProps> = (props) => {

    return (
        <SafeAreaView>
            <View style={styles.viewLogin}>

                <Image source={props.img} style={styles.images} />
                <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor="#828187"
                    style={styles.textInput}
                    value={props.value}
                    onChangeText={props.onChange}
                    secureTextEntry={props.show}
                />
                <TouchableOpacity onPress={props.onClickEye}>
                    <Image source={props.img1} style={{ width: 30, height: 30, right: 30 }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}



const styles = StyleSheet.create({
    container: {

    },
    viewLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 327,
        height: 50,
        borderRadius: 100,
        marginLeft: 30,
        marginBottom: 10,
        marginRight: 30


    },
    textInput: {
        height: 50,
        width: 270,
        color: '#828187',

    },
    textLabel: {
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 25,
        marginRight: 10,
        justifyContent: 'center'
    },
    images: {
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        marginLeft: 25
    }

})

export default CustomInput