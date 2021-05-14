import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';
import { useState } from 'react'
import { Button, StyleSheet, View, Text, TouchableOpacity, Icon, Image, ScrollView, ActivityIndicator, Alert } from 'react-native';



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

const mas = []


export default function PayScreen({ route, navigation }) {
    const [goodspay, setGoodsForPay] = useState()
    const [creditcard, setCard] = useState('')
    const [sum, setSum] = useState(0)
    const [userid, setUserId] = useState(1)
    const [loading, setLoading] = useState(true)
    const [isPayed, setIsPayed] = useState(true)


    React.useEffect(() => {
        AsyncStorage.getItem('id', (err, result) => {
            if (result) {
                setUserId(result)
            }
        })

        if (route.params?.data) {
            setGoodsForPay(route.params?.data)
            setLoading(false)
        }


    }, [route.params?.data]);

    React.useEffect(() => {

        if (route.params?.card) {
            setCard(route.params?.card)
        }


    }, [route.params?.card]);

    React.useEffect(() => {
        if (route.params?.sum) {
            setSum(route.params?.sum)
        }


    }, [route.params?.sum]);

    const BuySomething = (userid) => {
        var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        var now = new Date().toLocaleTimeString().slice(0, -3);

        const products = []
        for (let i = 0; i < goodspay.length; i++) {
            products[i] = { "qrcode": goodspay[i].code }
        }

        fetch(`http://qrcodeback.azurewebsites.net/api/History?ID=${userid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            mode: 'no-cors',
            body: JSON.stringify({
                "timeDate": utc,
                "products": products,
                "time": now,
                "sum": sum
            })
        }).then((response) => {
            if (response.status === 200) {
                Alert.alert('Покупатель,', 'Спасибо за покупку')
            } else {
                Alert.alert('Упс...,', 'Кажется что то пошло не так')
            }
            setIsPayed(!isPayed)
        })
        mas.push('1')
        const nam = mas.length % 2 === 0 ? true : false
        navigation.navigate('Корзина', { isPayed: nam })
    }

    return (
        <View style={{ backgroundColor: '#fff', height: '100%' }}>
            {loading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size='large' color='#00aa00'></ActivityIndicator></View> :
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 26, marginTop: '15%' }}>Ваша корзина:</Text>
                    <ScrollView style={{ marginHorizontal: '5%', height: '55%', marginTop: 15 }}>
                        {goodspay.map((good) => <PayGood name={good.name} price={good.price}  ></PayGood>)}
                    </ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 30, marginLeft: '5%', flexGrow: 1 }}>ИТОГО:    </Text><Text style={{ fontSize: 30, marginRight: '5%' }}>{sum.toFixed(2)}</Text>
                    </View>
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
                    <TouchableOpacity onPress={() => { BuySomething(userid) }} style={{ backgroundColor: '#00aa00', paddingVertical: 7, marginTop: 40, borderRadius: 16, marginHorizontal: '20%' }}>
                        <Text style={{ textAlign: 'center', fontSize: 22, color: '#fff', }}>Оплатить</Text>
                    </TouchableOpacity>
                </View>}


        </View>


    )
}