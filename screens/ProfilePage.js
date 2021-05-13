import * as React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import { useState } from 'react'
import { AuthContex } from '../components/contex'
import AsyncStorage from '@react-native-community/async-storage'






export default function ProfileScreen({ navigation }) {
    const [token, setToken] = useState('')
    const [user, setUser] = useState()
    const [leter, setLet] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)




    React.useEffect(() => {
        AsyncStorage.getItem('user', (err, result) => {
            if (result) {
                setUser(result)

            }
        })

        if (user) {
            const USer = JSON.parse(user)
            setName(USer.name)
            setEmail(USer.e_mail)
        }
    }, [user])

    const { signOut } = React.useContext(AuthContex)
    return (

        <View style={{ backgroundColor: "#fff", height: '100%' }}>
            {isLoading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size='large' color='#00aa00'></ActivityIndicator></View> : (<View><View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View style={{ marginLeft: 20 }}>
                    <Avatar
                        size="large"
                        rounded
                        title={leter}
                        titleStyle={{ color: '#000' }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        avatarStyle={{ borderColor: '#00aa00', borderWidth: 2, }}

                    />
                </View>
                <View>
                    <Text style={{ fontSize: 25, marginLeft: 20, }}>{name}</Text>
                    <Text style={{ fontSize: 20, marginLeft: 20, color: '#00aa00' }}>{email}</Text>
                </View>
            </View>
                <View style={{ marginTop: 40, }}>
                    <TouchableOpacity onPress={async () => { navigation.navigate('Личная информация') }} style={{ paddingVertical: 10, }}>
                        <Text style={{ textAlign: 'center', fontSize: 25 }}>Личная информация</Text>
                    </TouchableOpacity>
                    <Image source={require('../images/stick.jpg')} style={{
                        marginHorizontal: 20, marginTop: 15,
                    }}></Image>
                    < TouchableOpacity onPress={() => { navigation.navigate('Адреса магазинов') }} style={{ paddingVertical: 10, marginTop: 10, }}>
                        <Text style={{ textAlign: 'center', fontSize: 25 }}>Адреса магазинов</Text>
                    </TouchableOpacity>

                </View>
                < TouchableOpacity onPress={() => { signOut() }} style={{ paddingVertical: 10, marginTop: 300, }}>
                    <Text style={{ textAlign: 'center', fontSize: 25 }}>Выход</Text>
                </TouchableOpacity></View>)}



        </View >
    )
}