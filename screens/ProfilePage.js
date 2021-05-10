import * as React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import { AuthContex } from '../components/contex'


export default function ProfileScreen({ navigation }) {
    const { signOut } = React.useContext(AuthContex)
    return (
        <View style={{ backgroundColor: "#fff", height: '100%' }}>
            <View style={{ flexDirection: 'row', marginTop: 65 }}>
                <View style={{ marginLeft: 30 }}>
                    <Avatar
                        size="large"
                        rounded
                        title="Д"
                        titleStyle={{ color: '#000' }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        avatarStyle={{ borderColor: '#00aa00', borderWidth: 2, }}

                    />
                </View>
                <View>
                    <Text style={{ fontSize: 30, marginLeft: 20, }}>Денис</Text>
                    <Text style={{ fontSize: 20, marginLeft: 20, color: '#00aa00' }}>soundze@mail.ru</Text>
                </View>
            </View>
            <View style={{ marginTop: 40, }}>
                <TouchableOpacity style={{ paddingVertical: 10, }}>
                    <Text style={{ textAlign: 'center', fontSize: 25 }}>Пункт меню 1</Text>
                </TouchableOpacity>
                <Image source={require('../images/stick.jpg')} style={{
                    marginHorizontal: 20, marginTop: 15,
                }}></Image>
                < TouchableOpacity style={{ paddingVertical: 10, marginTop: 10, }}>
                    <Text style={{ textAlign: 'center', fontSize: 25 }}>Пункт меню 2</Text>
                </TouchableOpacity>

            </View>
            < TouchableOpacity onPress={() => { signOut() }} style={{ paddingVertical: 10, marginTop: 300, }}>
                <Text style={{ textAlign: 'center', fontSize: 25 }}>Выход</Text>
            </TouchableOpacity>


        </View >
    )
}