import React from "react";
import { View, Text ,StyleSheet} from "react-native";
import CustomButton from "../../assets/image/custom/customButtonLogin";
import { useSelector,useDispatch } from "react-redux";
import { store } from "../reduxThunk/store";
import * as f from '../reduxThunk/actions'

const  HomeScreenThunk:React.FC<{navigation:any}> =  ({navigation}) => {
    const data = useSelector((state:any)=> state.loginReducers);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HOME REDUX THUNK </Text>
            <Text style={styles.title}>Hello {data.username} </Text>
            {<CustomButton label="Logout" onPress={() => {
                    store.dispatch(f.logout())
                    navigation.replace('LoginThunk') 
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

export default HomeScreenThunk;
