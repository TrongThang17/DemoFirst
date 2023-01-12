import React,{useEffect, useRef, useState,useCallback} from "react";
import {Animated, View, Text ,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native';
import CustomButton from "../../assets/Custom/customButtonLogin";
import { useSelector,useDispatch } from "react-redux";
import * as f from '../redux/action'
import CustomButtonDelete from "../../assets/Custom/customButtonDelete";
import Item from "../../assets/Custom/customItem";
import { deleteTodo} from "../redux/thunk/thunkTask";
const  Home:React.FC<{navigation:any}> =  ({navigation}) => {
    const inf = useSelector((state:any)=>state.reducerTask.list)
    const [selected, setSelected] = useState(new Map());
    const [selectedCheck, setSelectedCheck] = useState(new Map());
    const [allSelectCheck,setAllSelectCheck] = useState(false)
    const [allDataCheckbox,setAllDataCheckbox]:any = useState([])
    const fadeAnim = useRef(new Animated.Value(0)).current ;
    const dispatch = useDispatch()
    const fadein = useEffect(()=>{
        Animated.timing(
            fadeAnim,{
                toValue:1,
                duration:3000,
                useNativeDriver: true
            }
        ).start()
    },[fadeAnim])
    
      const onSelect = useCallback(
        (id:number) => {
          const newSelected = new Map(selected);        
          newSelected.set(id, !selected.get(id));
          setSelected(newSelected);     
        },
        [selected],
      );
      const onSelectCheck = (
        (id:number) => {
          const newSelectedCheck = new Map(selectedCheck);
          let arr:any =[];
          newSelectedCheck.set(id, !selectedCheck.get(id));
          setSelectedCheck(newSelectedCheck);
          let numberCount = newSelectedCheck.values.length
          inf.forEach((element:any)=>{ 
                if(newSelectedCheck.get(element.id) == true) {
                    numberCount--
                    arr.push(element.id) 
                }     
            }
          );
          setAllDataCheckbox(arr)
          numberCount == 0  ? setAllSelectCheck(false) : setAllSelectCheck(true)
        })
    
       
    return  (
        <View style={styles.container}> 
            <Text style={[styles.title]}>HOME</Text>                                     
            <View style={styles.viewFlatlist}>
                <View style={{height:30,alignItems:'flex-end'}}>
                    {allSelectCheck ? <CustomButtonDelete onPress={()=>{
                        dispatch(deleteTodo(allDataCheckbox)) 
                        navigation.replace('Home')
                    }}/> : ''}
                </View>
                
                    <FlatList
                        style={{height:400,width:'100%',}}
                        data={inf}
                        keyExtractor={(item:any)=>item.id}
                        renderItem={({item})=>(
                            <Item 
                                id={item.id}
                                title={item.title}
                                describe={item.describe}
                                selected={!!selected.get(item.id)}
                                selectedCheck={!!selectedCheck.get(item.id)}
                                onSelect={onSelect}
                                onSelectCheck={onSelectCheck}
                                allSelectCheck={allSelectCheck} 
                               
                            />
                            )}
                        extraData={selected}
                    />
            </View>
            
            
            <CustomButton label="Logout" onPress={() => {
                     dispatch({
                         type:f.LOGOUT_SAGA,
                        
                     })
                }} colorCode="#9ee6e6" />

           
            <TouchableOpacity style={styles.touchPlus} onPress={()=>{ navigation.navigate('AddTodo')}}>
               <Text style={styles.textPlus}>+</Text>
            </TouchableOpacity>
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
    },
    touchPlus:{
        width:60,
        height:60,
        borderRadius: 30,            
        backgroundColor: '#ee6e73',                                    
        position: 'absolute',
        top:670,
        left:300,
        
    },
    textPlus:{
        justifyContent:'center',
        textAlign:'center',
        fontSize:40,
        
    },
    viewFlatlist:{
        height:500,
        width:'100%',
     
        marginBottom:10,
    },
    choosenButton:{
        width:18,
        height:18,
        borderRadius:4,
        backgroundColor:'#A4BCC1',
        marginLeft:40,
        marginTop:10
    },
    viewContent:{
        flexDirection:'row',
        backgroundColor:''
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
})

export default Home;
