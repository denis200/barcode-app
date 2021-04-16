import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import Good from '.././components/good'

const goods =[
  {
    name:"Молоко Простоквашино",
    price: 45.99,
    image: require('.././images/prosto.jpg'),
},

]


export default function GoodsScreen({navigation}) {
  return (
    <View style ={styles.screen}>
      <View>
        <Text style={styles.content} >Текущий список:</Text>
        <Text style={{marginLeft:30,fontSize: 18}}>5 товаров</Text>
      </View>
      
      <ScrollView style = {{height:350,marginTop:20}}>
         <Good name = {goods[0].name} image = {goods[0].image} price = {goods[0].price}></Good>
         <Good name = {goods[0].name} image = {goods[0].image} price = {goods[0].price}></Good>
         <Good name = {goods[0].name} image = {goods[0].image} price = {goods[0].price}></Good>
         <Good name = {goods[0].name} image = {goods[0].image} price = {goods[0].price}></Good>
         <Good name = {goods[0].name} image = {goods[0].image} price = {goods[0].price}></Good>
         <Good name = {goods[0].name} image = {goods[0].image} price = {goods[0].price}></Good>
      </ScrollView>
      
      <Text onPress={()=> alert('You tapped the button!')} style ={styles.scanButton}>Отсканировать товар</Text>
      
      <View style={{flexDirection:'row',marginTop:50,marginRight:30}}>
        <Text style = {{fontSize:25,marginLeft:30,flexGrow:1}}>Итого:</Text>
        <Text style = {{fontSize:25}}>200,49 Р</Text>
      </View>
      <Text onPress={()=> alert('You tapped the button!')} style ={styles.payButton}>Оплатить</Text>

    </View>
    
  );
}

const styles = StyleSheet.create({
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
