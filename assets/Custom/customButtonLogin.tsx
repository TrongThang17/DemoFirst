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
       

    },
    buttonLogin:{
        height:50,
        width:300,
        marginVertical:10,
        borderRadius:25,
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
        resizeMode: 'stretch',
        alignItems: 'center',
    },

})



export default CustomButton