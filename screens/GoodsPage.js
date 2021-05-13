import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, useEffect, ActivityIndicator, Alert } from 'react-native';
import Good from '../components/good';
import { AuthContex } from '../components/contex'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function GoodsScreen({ route, navigation }) {

  const [goods, setGoods] = useState([])
  const [count, setCount] = useState(0)
  const [sum, setSum] = useState(0)
  const [isFound, setFound] = useState(false)
  const [quantityname, setQuantityname] = useState("")
  const addGood = (data) => {
    let isFind = goods.find(good => good.code === data.barcode)



    if (isFind === undefined) {
      setGoods(prev => [...prev, {
        name: data.Name,
        price: data.Price,
        image: data.picture,
        code: data.barcode,
        quantity: data.quantity,
      }])
      setCount(count + 1)
      setSum(sum + data.Price * data.quantity)
    } else {
      goods.map(obj => (obj.code === data.barcode ? addItem(obj.quantity, obj.code, obj.price, data.quantity) : obj))

    }
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


  const deleteItem = (code, price, quantity) => {
    const arr = [...goods]
    let delArr = arr.filter(item => item.code !== code);
    setGoods(delArr)
    setCount(count - 1)
    setSum(sum - price * quantity)
  }
  const addItem = (quantity, code, price, actQuantity) => {
    setSum(sum + price * actQuantity)
    setGoods(goods.map(obj => (obj.code === code ? { ...obj, quantity: quantity + actQuantity } : obj)))

  }
  const delete1Item = (quantity, name, code, price) => {
    setGoods(goods.map(obj => (obj.code === code ? { ...obj, quantity: quantity - 1 } : obj)))
    if (quantity == 1) { deleteItem(code, price, quantity) }
    setSum(sum - price)

  };

  const goPay = (goods) => {
    if (goods !== []) {
      navigation.navigate('Оплата', { data: goods })
    } else {
      alert('В вашей корзине нет товаров!')
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
          {goods.map(good => {
            return <Good key={good.code} name={good.name} price={good.price} image={`data:image/png;base64,${good.image}`} quantity={good.quantity}
              handleAdd1={() => addItem(good.quantity, good.code, good.price, 1)} handle1Delete={() => delete1Item(good.quantity, good.name, good.code, good.price)}
              handleDelete={() => deleteItem(good.code, good.price, good.quantity)} ></Good>
          })}
        </ScrollView>
      </View>
      <Text onPress={() => { navigation.navigate('Сканировать') }} style={styles.scanButton}>Отсканировать товар</Text>

      <View style={{ flexDirection: 'row', marginTop: 80, marginRight: 30 }}>
        <Text style={{ fontSize: 25, marginLeft: 30, flexGrow: 1 }}>Итого:</Text>
        <Text style={{ fontSize: 25 }}>{sum.toFixed(2)} руб.</Text>
      </View>
      <Text style={styles.payButton} onPress={() => { goods[0] ? navigation.navigate('Оплата', { data: goods }) : Alert.alert('Ошибка', 'Ваша корзина пуста') }}>Оплатить</Text>

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
