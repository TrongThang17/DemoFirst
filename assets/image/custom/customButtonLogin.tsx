import React from 'react'
import { Text, TouchableOpacity, View , StyleSheet} from 'react-native'


interface CustomButtonProps  {
    label:string;
    colorCode:string;
    onPress: () => void;
  
}
const CustomButton: React.FC<CustomButtonProps> =(props) => {
    return (
        <View style={styles.viewButton}>
            <TouchableOpacity  
                onPress={props.onPress }
                style={[styles.buttonLogin,{backgroundColor:props.colorCode}]}>
                <Text style={styles.textLogin}> {props.label}</Text>    
            </TouchableOpacity> 
        </View>
    )
};

const styles = StyleSheet.create({
    viewButton:{
        justifyContent:'center',
        alignItems:'center',

    },
    buttonLogin:{
        height:50,
        width:200,
        marginVertical:10,
        borderRadius:20

    },
    textLogin:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        padding:10
    }

})



export default CustomButton