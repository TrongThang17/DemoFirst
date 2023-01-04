import React,{useEffect, useRef} from "react";
import {Animated, View, Text ,StyleSheet} from "react-native";
import CustomButton from "../../assets/Custom/customButtonLogin";
import { useSelector,useDispatch } from "react-redux";

const  Home:React.FC<{navigation:any}> =  ({navigation}) => {
    const inf = useSelector((state:any)=>state.loginReducer)
    const fadeAnim = useRef(new Animated.Value(0)).current ;
    
    const fadein = useEffect(()=>{
        Animated.timing(
            fadeAnim,{
                toValue:1,
                duration:3000,
                useNativeDriver: true
            }
        ).start()
    },[fadeAnim])

    // const fadeout = useEffect(()=>{
    //     Animated.timing(
    //         fadeAnim,{
    //             toValue:0,
    //             duration:3000,
    //             useNativeDriver: true
    //         }
    //     ).start()
    // },[fadeAnim])
    const dispatch = useDispatch();
    return (
        <View style={styles.container}> 
            <Text style={[styles.title]}>HOME</Text>                                     
            <Animated.View style={{opacity:fadeAnim}}>
                <Text style={styles.title}>Hello {inf.username}</Text>
            </Animated.View>
            
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

export default Home;
