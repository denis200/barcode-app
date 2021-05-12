import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, Icon } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { onChange } from 'react-native-reanimated';



export default function CreditCardScreen({ navigation }) {
    const [isCardAdded, setIsAdded] = useState(false)
    const [creditCard, setCard] = useState({})
    const [isPressed, setPressed] = useState(false)

    const addCardFunc = () => {
        return (

            <CreditCardInput labels={{ number: "Номер карты", expiry: "ДД/ММ", cvc: "CVC/CCV" }} allowScroll={true} invalidColor={false} />

        )
    };
    const onChange = formData => {
        setCard({
            number: formData.values.number,
            date: formData.values.expiry,
            cvc: formData.values.cvc
        })
    }


    return (
        <View>
            {isCardAdded ? (
                <View>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Ваша карта - {creditCard.number}</Text>

                </View>) :
                (!isPressed ? (<View>
                    <Text style={{ marginTop: '70%', fontSize: 24, textAlign: 'center' }}>У вас нет добавленных карт.</Text>
                    <TouchableOpacity onPress={() => { setPressed(!isPressed) }} style={{ backgroundColor: '#00aa00', paddingVertical: 10, marginHorizontal: '30%', borderRadius: 13, marginTop: 22 }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>Добавить</Text>
                    </TouchableOpacity>

                </View>
                ) : (
                    <View style={{ marginTop: "30%", }}>
                        <CreditCardInput onChange={onChange} labels={{ number: "Номер карты", expiry: "ДД/ММ", cvc: "CVC/CCV" }} allowScroll={true} invalidColor={false} />
                        <TouchableOpacity onPress={() => { setPressed(!isPressed), setIsAdded(!isCardAdded) }} style={{ backgroundColor: '#00aa00', paddingVertical: 10, marginHorizontal: '30%', borderRadius: 13, marginTop: 60 }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>Сохранить</Text>
                        </TouchableOpacity>
                    </View>))
            }

        </View>
    )
}