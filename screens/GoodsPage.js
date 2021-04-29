import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, useEffect } from 'react-native';
import Good from '../components/good';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





const Tab = createBottomTabNavigator();

export default function GoodsScreen({ route, navigation }) {

  const [goods, setGoods] = useState([])
  const [count, setCount] = useState(0)
  const [sum, setSum] = useState(0)
  const [isTransition, setTransition] = useState(false)
  const addGood = (data) => {
    setGoods(prev => [...prev, {
      name: data.Name,
      price: data.Price,  
      image: require('.././images/prosto.jpg')
    }])
    setCount(count + 1)
    setSum(sum + data.Price)
  }
  const rightWord = (count) => {
    switch (count) {
      case 2:
        return ' товара'
      case 3:
        return ' товара'
      case 4:
        return ' товара'
      case 1:
        return ' товар'
      default:
        return ' товаров'

    }
  }
  React.useEffect(() => {
    if (route.params?.data) {
      addGood(route.params?.data)
    }
    
  }, [route.params?.data]);
  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.content} >Текущий список:</Text>
        <Text style={{ marginLeft: 30, fontSize: 18 }}>{count + rightWord(count)}</Text>
      </View>
      <View style={{ height: '42%' }}>
        <ScrollView style={{ marginTop: 20, marginHorizontal: 30, }}>
          {goods.map(good => { return <Good name={good.name} price={good.price} image={good.image}></Good> })}
        </ScrollView>
      </View>
      <Text onPress={() => { navigation.navigate('Сканировать') }} style={styles.scanButton}>Отсканировать товар</Text>

      <View style={{ flexDirection: 'row', marginTop: 80, marginRight: 30 }}>
        <Text style={{ fontSize: 25, marginLeft: 30, flexGrow: 1 }}>Итого:</Text>
        <Text style={{ fontSize: 25 }}>{sum.toFixed(2)} руб.</Text>
      </View>
      <Text style={styles.payButton}>Оплатить</Text>
     
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    height: '100%',
  },
  payButton: {
    marginTop: 15,
    textAlign: 'center',
    borderWidth: 2,
    color: '#fff',
    backgroundColor: '#00aa00',
    borderColor: '#00aa00',
    paddingVertical: 10,
    borderRadius: 17,
    marginHorizontal: 30,
    fontSize: 20,
  },
  scanButton: {
    marginTop: 40,
    textAlign: 'center',
    borderWidth: 2,
    color: '#00aa00',
    borderColor: '#00aa00',
    paddingVertical: 10,
    borderRadius: 17,
    marginHorizontal: 30,
    fontSize: 20,
  },
  content: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 25,
    marginBottom: 40,

  },
});
