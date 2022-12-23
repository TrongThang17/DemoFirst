import React from "react";
import { View, Text ,StyleSheet} from "react-native";
import CustomButton from "../../assets/image/custom/customButtonLogin";
import { useSelector,useDispatch } from "react-redux";



const  HomeScreenSaga:React.FC<{navigation:any}> =  ({navigation}) => {
    
    const dispatch = useDispatch();
    const data = useSelector((state:any)=>state.loginReducer)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HOME REDUX SAGA </Text>
            <Text style={styles.title}>Hello {data.username}</Text>
            {<CustomButton label="Logout" onPress={() => {
                    
                    navigation.replace('LoginSaga') 
                }} colorCode="#9ee6e6" />}
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

export default HomeScreenSaga;
