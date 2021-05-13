import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';
import { useState } from 'react'
import { Button, StyleSheet, View, Text, TouchableOpacity, Icon, Image, ScrollView, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AuthContex } from '../components/contex'
import Good from '../components/good'



const PayGood = (props) => {
    return (
        <View style={{ marginTop: 12 }}>
            <View style={{ flexDirection: 'row', borderWidth: 2, paddingVertical: 12, borderRadius: 20, }}>
                <View style={{ marginLeft: 10, }}>
                    <Text style={{ fontSize: 22 }}>{props.name} </Text>
                </View>
                <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 10 }}>
                    <Text style={{ fontSize: 22 }}>{props.price.toFixed(2)}</Text>
                </View>
            </View>
        </View>

    )
}




export default function PayScreen({ route, navigation }) {
    const [goodspay, setGoodsForPay] = useState()
    const [creditcard, setCard] = useState('')
    const [loading, setLoading] = useState(true)


    React.useEffect(() => {

        if (route.params?.data) {
            setGoodsForPay(route.params?.data)
            setLoading(false)
        }


    }, [route.params?.data]);

    React.useEffect(() => {

        if (route.params?.card) {
            setCard(route.params?.card)
            alert('я тут')
        }


    }, [route.params?.card]);

    const BuySomething = () => {
        fetch(`http://qrcodeback.azurewebsites.net/api/History?id=1`, {

            body: {
                'timeDate': '11/11/2011',
                "products": [
                    {
                        "qrcode": "4690363072835"
                    }],
                "time": "1:11",
                "sum": 50
            }
        })
        alert('Отправлено')
    }

    return (
        <View style={{ backgroundColor: '#fff', height: '100%' }}>
            {loading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size='large' color='#00aa00'></ActivityIndicator></View> :
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 26, marginTop: '15%' }}>Ваша корзина:</Text>
                    <ScrollView style={{ marginHorizontal: '5%', height: '55%', marginTop: 15 }}>
                        {goodspay.map((good) => <PayGood name={good.name} price={good.price}  ></PayGood>)}
                    </ScrollView>
                    <Text style={{ fontSize: 30, marginLeft: '5%' }}>ИТОГО:</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Карта')}>
                        <Image source={require('../images/stick.jpg')} style={{
                            marginHorizontal: 20, marginTop: 15,
                        }}></Image>
                        {creditcard === '' ?
                            <Text style={{ textAlign: 'center', fontSize: 22, marginVertical: 10 }}>Добавить карту</Text> :
                            <Text style={{ textAlign: 'center', fontSize: 22, marginVertical: 10 }}>{creditcard}</Text>
                        }
                        <Image source={require('../images/stick.jpg')} style={{
                            marginHorizontal: 20,
                        }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { BuySomething() }} style={{ backgroundColor: '#00aa00', paddingVertical: 7, marginTop: 40, borderRadius: 16, marginHorizontal: '20%' }}>
                        <Text style={{ textAlign: 'center', fontSize: 22, color: '#fff', }}>Оплатить</Text>
                    </TouchableOpacity>
                </View>}


        </View>


    )
}