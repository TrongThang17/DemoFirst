import React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { Colors } from '../Colors';
import LinearGradient from 'react-native-linear-gradient';

interface CustomSettingProps {
  label: string;
  image: any;
  color:string,
  onPress?:()=>void,
  style?:any
}
const CustomItemSetting: React.FC<CustomSettingProps> = (props) => {
  return (
    <LinearGradient
      colors={Colors.colorItemSetting}
      style={styles.linearGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <TouchableOpacity 
         style={styles.linearGradient}
         onPress={props.onPress}
      >
        <View style={styles.container}>
          <View style={styles.viewLabel}>
            <Text style={[styles.text, { color: props.color }]}>{props.label}</Text>
          </View>
          <View style={styles.viewImg}>
            <Image source={props.image} style={props.style} />
          </View>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: 52,
    marginBottom:8
  },
  container:{
    flex:1,
    flexDirection:'row'
  },
  viewLabel:{
    flex:3,
    justifyContent:'center',
    alignItems:'flex-start',
    marginLeft:40,
  },
  viewImg:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    marginRight:20
  },
  text:{
    fontSize:17,
    fontFamily:'Outfit',
    fontWeight:'500'
  },
 

});

export default CustomItemSetting;
