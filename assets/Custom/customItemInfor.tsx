import React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import { Colors } from '../Colors';
import LinearGradient from 'react-native-linear-gradient';

interface CustomInforProps {
  label: string;
  value: string;
}
const CustomItemInfor: React.FC<CustomInforProps> = (props) => {
  return (
    <LinearGradient
      colors={Colors.colorItemInfor}
      style={styles.linearGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.container}>
        <View style={styles.viewLabel}>
          <Text style={styles.text}>{props.label}</Text>
        </View>
        <View style={styles.viewContent}>
          <TextInput style={styles.textInput}>{props.value}</TextInput>
        </View>
      </View>
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
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
    marginLeft:40
  },
  viewContent:{
    flex:3,
    justifyContent:'center',
    alignItems:'flex-start',
    marginLeft:10
  },
  text:{
    color:Colors.white,
    fontSize:15,
    fontFamily:'Outfit',
    fontWeight:'500'
  },
  textInput:{
    height:52,
    color:Colors.white,
    fontSize:15,
    fontFamily:'Outfit',
    fontWeight:'500',
    width:'100%',
    marginTop:2,
  }

});

export default CustomItemInfor;
