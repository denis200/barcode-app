import React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Good from '../components/good';
import GoodHistory from '../components/goodHistory';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Purchase = (props) => {
  const [showList, setShowList] = useState(false)

  const [name, setName] = useState('chevron-down-circle-outline')
  return (
    <View>
      <TouchableOpacity onPress={() => { showList ? (setShowList(false), setName('chevron-down-circle-outline')) : (setShowList(true), setName('chevron-up-circle-outline')) }} style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#00aa00', paddingVertical: 10, marginTop: 10, marginHorizontal: 30, borderRadius: 14, }}>
        <Text style={{ flex: 1, marginLeft: 20, fontSize: 16 }}>Покупка {props.date}  {props.timeDate}</Text>
        <Ionicons style={{ marginRight: 20, }} name={name} size={25} />
      </TouchableOpacity>
      <View style={{ marginHorizontal: 30, marginTop: 1, }}>
        {showList && props.goods.map(good => { return <GoodHistory name={good.name} price={good.price} image={`data:image/png;base64,${good.picture}`}></GoodHistory> })}
        {showList &&
          <View style={{ flexDirection: 'row', marginRight: 10, marginBottom: 20, marginTop: 10, }}>
            <Text style={{ fontSize: 21, marginLeft: 10, flexGrow: 1 }}>Итого:</Text>
            <Text style={{ fontSize: 21 }}>{props.sum} руб.</Text>
          </View>}

      </View>


    </View>
  )
}

export default function StoryScreen({ route, navigation }) {
  const [history, setHistory] = useState([])
  const [isFirst, setFirst] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const GetPurchaseHistory = () => {
    fetch(`https://qrcodeback.azurewebsites.net/api/History?ID=6`, {
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setHistory(data)
        setIsLoading(false)
      })
  }

  React.useEffect(() => {

    GetPurchaseHistory()



  }, []);

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <Text style={{ textAlign: 'center', fontSize: 24, marginTop: 50, }}>История покупок:</Text>

      <ScrollView style={{ height: '88%', marginTop: 25, }}>
        {isLoading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size='large' color='#00aa00'></ActivityIndicator></View> : history.map(purch => { return <Purchase date={purch.timeDate} goods={purch.products} sum={purch.sum}></Purchase> })}
      </ScrollView>
    </View>

  )
}