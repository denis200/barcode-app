import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,Image ,useEffect} from 'react-native';
import App from '../App';
import Good from '../components/good';
import GoodsArray from '../components/goods-array';
import ScanScreen from './ScanPage';
import { useIsFocused } from '@react-navigation/native'





export default function GoodsScreen({navigation}) {

    const [goods,setGoods] = useState([])
    const [count,setCount] = useState(0)
    const [sum,setSum] = useState(0)
    const addGood = ()=>{
        setGoods(prev => [...prev,{
        name:'Простоквашино',
        price: 45.99,
        image: require('.././images/prosto.jpg')}])
        setCount(count+1)
        setSum(sum+45.99)
    }
    return (
    <View style ={styles.screen}>
      <View>
        <Text style={styles.content} >Текущий список:</Text>
        <Text style={{marginLeft:30,fontSize: 18}}>{count} товаров</Text>
      </View>
      
      <ScrollView style = {{height:350,marginTop:20,marginHorizontal:20}}>
          {goods.map(good =>{return <Good name={good.name} price = {good.price} image = {good.image}></Good>})}
      </ScrollView>
      
      <Text onPress={()=> {navigation.navigate('Scan')}} style ={styles.scanButton}>Отсканировать товар</Text>
      
      <View style={{flexDirection:'row',marginTop:50,marginRight:30}}>
        <Text style = {{fontSize:25,marginLeft:30,flexGrow:1}}>Итого:</Text>
        <Text style = {{fontSize:25}}>{sum} Р</Text>
      </View>
      <Text onPress={addGood} style ={styles.payButton}>Оплатить</Text>

    </View>
    
  );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: '#fff',
    },
  payButton:{
    marginTop:20,
    textAlign:'center',
    borderWidth:2,
    color:'#fff',
    backgroundColor:'#00aa00',
    borderColor:'#00aa00',
    paddingVertical:13,
    borderRadius:17,
    marginHorizontal:30,
  },
  scanButton:{
    marginTop:25,
    textAlign:'center',
    borderWidth:2,
    color:'#00aa00',
    borderColor:'#00aa00',
    paddingVertical:13,
    borderRadius:17,
    marginHorizontal:30,
  },
  content: {
    textAlign:'center',
    marginTop:30,
    fontSize:25,
    marginBottom: 40,

  },
});
