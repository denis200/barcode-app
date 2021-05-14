import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, Touchable } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Ionicons from 'react-native-vector-icons/Ionicons';

const SmallGood = (props) => {
    return (
        <View>
            <View style={{ width: 100, height: 100, alignItems: 'center' }}>
                <Image source={require('../images/3267835H.jpg')} style={{
                    width: 88,
                    height: 88,

                    resizeMode: 'contain'
                }}></Image>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>{props.price}</Text>
            </View>

        </View>
    )
}

export default SmallGood