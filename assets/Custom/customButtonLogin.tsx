import React from 'react'
import { Text, TouchableOpacity, View , StyleSheet, Image} from 'react-native'


interface CustomButtonProps  {
    label:string;
    colorCode:string;
    onPress: () => void;
    img?:any
  
}
const CustomButton: React.FC<CustomButtonProps> =(props) => {
    return (
        <View style={styles.viewButton}>
            
            <TouchableOpacity  
                onPress={props.onPress }
                style={[styles.buttonLogin,{backgroundColor:props.colorCode}]}>
                <Image source={props.img}  style={styles.img} />
                <Text style={styles.textLogin}> {props.label}</Text>    
            </TouchableOpacity> 
        </View>
    )
};

const styles = StyleSheet.create({
    viewButton:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20

    },
    buttonLogin:{
        height:52,
        width:327,
        left:3,
        borderRadius:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    textLogin:{
        fontSize:20,
        fontWeight:'bold',
        marginRight:40,
        padding:10,
        color:'white'
    },
    img:{
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
       
        alignItems: 'center',
    },

})



export default CustomButton