import React from "react";
import { View, Text ,StyleSheet} from "react-native";
import CustomButton from "../../assets/Custom/customButtonLogin";
import { useSelector,useDispatch } from "react-redux";

const  HomeScreen:React.FC<{navigation:any}> =  ({navigation}) => {
    const inforLogin = useSelector((state:any)=> state.loginReducer);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HOME</Text>
            <Text style={styles.title}>Hello {inforLogin.username}</Text>
            <CustomButton label="Logout" onPress={() => {
                    navigation.replace('Login') 
                    dispatch({
                        type:'LOGOUT',
                    })
                }} colorCode="#9ee6e6" />
        </View>
    )
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    title:{
        textAlign:'center',
        fontSize:50,
        marginBottom:200
    }
})

export default HomeScreen;
