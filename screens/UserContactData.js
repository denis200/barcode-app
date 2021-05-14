import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';
import { useState } from 'react'
import { Button, StyleSheet, View, Text, TouchableOpacity, Icon, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AuthContex } from '../components/contex'
import Good from '../components/good'

export default function UserDataScreen({ route, navigation }) {
    const [user, setUser] = useState({})
    React.useEffect(() => {

        if (route.params?.user) {
            setUser(JSON.parse(route.params?.user))
        }


    }, [route.params?.user]);


    return (
        <View style={{ backgroundColor: '#fff', height: '100%' }}>
            <TouchableOpacity>
                <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                    <Text style={{ fontSize: 22, marginLeft: '5%', flexGrow: 1 }}>Имя</Text><Text style={{ fontSize: 22, marginRight: '5%' }}>{user.name}</Text>
                </View>
            </TouchableOpacity>
            <Image source={require('../images/stick.jpg')} style={{
                marginHorizontal: 20,
            }}></Image>
            <TouchableOpacity>
                <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                    <Text style={{ fontSize: 22, marginLeft: '5%', flexGrow: 1 }}>Дата рождения</Text><Text style={{ fontSize: 22, marginRight: '5%' }}>{user.br_day}</Text>
                </View>
            </TouchableOpacity>
            <Image source={require('../images/stick.jpg')} style={{
                marginHorizontal: 20,
            }}></Image>
            <TouchableOpacity>
                <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                    <Text style={{ fontSize: 22, marginLeft: '5%', flexGrow: 1 }}>Email</Text><Text style={{ fontSize: 22, marginRight: '5%' }}>{user.e_mail}</Text>
                </View>
            </TouchableOpacity>
            <Image source={require('../images/stick.jpg')} style={{
                marginHorizontal: 20,
            }}></Image>
            <TouchableOpacity>
                <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                    <Text style={{ fontSize: 22, marginLeft: '5%', flexGrow: 1 }}>Телефон</Text><Text style={{ fontSize: 22, marginRight: '5%' }}>{user.tel}</Text>
                </View>
            </TouchableOpacity>
            <Image source={require('../images/stick.jpg')} style={{
                marginHorizontal: 20,
            }}></Image>



        </View>


    )
}