import React from 'react'
import { Text, TouchableOpacity, View , StyleSheet, Image} from 'react-native'


interface CustomButtonProps  {
    label:string;
    colorCode?:string;
    onPress?: () => void; 
    img?:any;
    colorCodeIcon?:string,
    colorLabel?:string,
    disable?:boolean
}
const CustomButton: React.FC<CustomButtonProps> =(props) => {
    return (
        
        <View style={[styles.viewButton]}>                                         
                <TouchableOpacity  
                    onPress={props.onPress }
                    style={[styles.buttonLogin,{backgroundColor:props.colorCode, width:props.label == 'Save' || props.label == 'Cancle' ? 150 :327}]}
                    disabled={props.disable}>
                    <View style={[styles.viewImg,{backgroundColor:props.colorCodeIcon}]}>
                        <Image source={props.img}  
                                style={styles.img} 
                        />
                    </View>
                    
                    <Text style={[styles.textLogin,{color:props.colorLabel}]}> {props.label}</Text>    
                </TouchableOpacity>                    
        </View> 
    )
};

const styles = StyleSheet.create({
    viewButton:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        flexDirection:'row',
    },
    viewImg:{
        width:26,
        height:26.33,
        borderRadius:100,
        top:13,
        left:15
    },
    buttonLogin:{
        height:52,
        width:327,
        borderRadius:30,
        flexDirection:'row'
        
    },
    textLogin:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        flex:1,
        justifyContent:'center',
        marginTop:9,
        marginRight:25,
        
       
    },
    img:{
        flex:1,
        alignSelf:'center'
    },
    

})



export default CustomButton