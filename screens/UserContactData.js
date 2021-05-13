import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';
import { useState } from 'react'
import { Button, StyleSheet, View, Text, TouchableOpacity, Icon, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AuthContex } from '../components/contex'
import Good from '../components/good'

export default function UserDataScreen({ route, navigation }) {
    const [image, setImage] = useState({})

    return (
        <View>
            <Text>Hello world</Text>


        </View>


    )
}