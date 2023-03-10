import React from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView, Image, Touchable, TouchableOpacity } from "react-native";
import I18n from "../../src/i18njs/i18n";
interface customInputProps {
    placeholder: string,
    onChangeText?: (val: string) => void,
    label: string,
    values?: string,
    onChangeee?: () => void,
    defaultValue?: string
}

const CustomInputTodo: React.FC<customInputProps> = (props) => {

    return (
        <SafeAreaView>
            <View style={[styles.viewLogin,
            {
                height: props.label == I18n.t('Screen_AddTodo.Title') ? 50 : 250,
                borderRadius: props.label == I18n.t('Screen_AddTodo.Title') ? 100 : 20,
                flexDirection: props.label == I18n.t('Screen_AddTodo.Title') ? 'row' : 'column'
            }]}>
                <Text style={[styles.textLabel, {marginLeft:props.label == I18n.t('Screen_AddTodo.Title') ? 30 : -10}]}>{props.label}</Text>
                <TextInput
                    placeholder={props.placeholder}
                    onEndEditing={props.onChangeee}
                    placeholderTextColor="#828187"
                    style={[styles.textInput, { height: props.label == I18n.t('Screen_AddTodo.Title') ? 50 : 150, }]}
                    value={props.values}
                    onChangeText={props.onChangeText}
                    defaultValue={props.defaultValue}
                />
            </View>
        </SafeAreaView>

    )
}



const styles = StyleSheet.create({
    viewLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 327,
        height: 50,
        borderRadius: 100,
        marginLeft: 30,
        marginBottom: 10,
        marginRight: 30
    },
    textInput: {
        fontSize: 20,
        width: '80%',
        color: 'black',
        marginLeft: 10
    },
    textLabel: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
        marginBottom: 2,
    },


})

export default CustomInputTodo