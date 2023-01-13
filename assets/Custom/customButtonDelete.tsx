import React from 'react'
import { Text, TouchableOpacity, View , StyleSheet, Image} from 'react-native'
interface customItem {
    onPress?: (val:any)=>void
}

const CustomButtonDelete:React.FC<customItem> =(props) => {
    return (
                <TouchableOpacity  
                    onPress={props.onPress}
                    style={styles.buttonDelete}
                    >     
                    <Text style={styles.textDelete}>DELETE</Text>    
                </TouchableOpacity>                    
    )
};

const styles = StyleSheet.create({
    buttonDelete:{
        height:30,
        width:90,
        borderRadius:30,
        backgroundColor:'#f0e9e9',
        alignItems:'center',
        justifyContent:'center',
    },
    textDelete:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        color:'red',
        justifyContent:'center',
    
    },
})



export default CustomButtonDelete